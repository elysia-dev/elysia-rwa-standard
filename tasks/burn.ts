import { task } from "hardhat/config";

import { getRwaStandard } from "./utils";

task("burn", "burn", async (_taskArgs, hre) => {
  const { deployer, rwaStandard } = await getRwaStandard(hre);
  const tokenId = 1;

  await rwaStandard.safeBurn(tokenId, { from: deployer });
});
