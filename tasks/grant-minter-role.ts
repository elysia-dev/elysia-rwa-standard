import { task } from "hardhat/config";

import { getRwaStandard } from "./utils";

task("grant-minter-role", async (_taskArgs, hre) => {
  const { deployer, rwaStandard } = await getRwaStandard(hre);
  const minter = deployer;
  const minterRole = await rwaStandard.MINTER_ROLE();

  await rwaStandard.grantRole(minterRole, minter, { from: deployer });
});
