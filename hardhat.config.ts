import "@nomicfoundation/hardhat-toolbox";
import * as dotenv from "dotenv";
import "hardhat-deploy";

import "./tasks/grant-minter-role";
import "./tasks/mint";

dotenv.config();
const BSCSCAN_API_KEY = process.env.BSCSCAN_API_KEY;
const BSC_MAINNET_PRIVATE_KEY = process.env.BSC_TESTNET_PRIVATE_KEY;
const BSC_TESTNET_PRIVATE_KEY = process.env.BSC_TESTNET_PRIVATE_KEY;

const config = {
  solidity: {
    version: "0.8.18",
    settings: {
      optimizer: {
        enabled: true,
        runs: 1000,
      },
    },
  },
  namedAccounts: {
    deployer: 0,
  },
  networks: {
    bsc: {
      url: "https://bsc-dataseed.binance.org",
      chainId: 56,
      accounts: BSC_MAINNET_PRIVATE_KEY !== undefined ? [BSC_MAINNET_PRIVATE_KEY] : [],
    },
    bscTestnet: {
      url: "https://data-seed-prebsc-1-s1.binance.org:8545",
      chainId: 97,
      accounts: BSC_TESTNET_PRIVATE_KEY !== undefined ? [BSC_TESTNET_PRIVATE_KEY] : [],
    },
  },
  etherscan: {
    apiKey: {
      bscTestnet: BSCSCAN_API_KEY,
    },
  },
  typechain: {
    outDir: "types",
    target: "ethers-v5",
  },
};

export default config;
