import { HardhatRuntimeEnvironment } from "hardhat/types";

import { RwaStandard } from "../types/contracts/RwaStandard";

export const getRwaStandard = async (hre: HardhatRuntimeEnvironment) => {
  const { deployments, getNamedAccounts } = hre;
  const { get } = deployments;
  const { deployer } = await getNamedAccounts();
  const nftAddr = (await get("RwaStandard")).address;
  const rwaStandard = <RwaStandard>await hre.ethers.getContractAt("RwaStandard", nftAddr);
  return { deployer, rwaStandard };
};
