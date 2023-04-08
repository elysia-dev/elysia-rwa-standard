import { DeployFunction } from "hardhat-deploy/dist/types";

const deployFn: DeployFunction = async function (hre) {
  const { deployments, getNamedAccounts, network } = hre;
  const { deploy } = deployments;
  const { deployer } = await getNamedAccounts();

  console.log(`Deploy RWA Standard Token on ${network.name}\n Deployer: ${deployer}\n`);

  const initData = {
    name: "Elysia RWA Standard",
    symbol: "ERWA",
  };

  await deploy("RwaStandard", {
    from: deployer,
    log: true,
    args: [initData.name, initData.symbol],
  });
};

deployFn.tags = ["testnet", "mainnet"];

export default deployFn;
