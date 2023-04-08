import { task } from "hardhat/config";

import { getRwaStandard } from "./utils";

task("set-token-uri", "mint", async (_taskArgs, hre) => {
  const { deployer, rwaStandard } = await getRwaStandard(hre);
  const tokenId = 1;
  const tokenUri = "https://www.google.com";

  await rwaStandard.setTokenURI(tokenId, tokenUri, { from: deployer });
});
