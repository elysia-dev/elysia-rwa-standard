import { task } from "hardhat/config";

import { getRwaStandard } from "./utils";

task("mint", "mint", async (_taskArgs, hre) => {
  const { deployer, rwaStandard } = await getRwaStandard(hre);
  const receiver = deployer;
  const tokenUri = "https://www.google.com";

  await rwaStandard.safeMint(receiver, tokenUri, { from: deployer });
});
