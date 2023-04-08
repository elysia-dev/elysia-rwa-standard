import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import type { RwaStandard } from "../../types/contracts/RwaStandard";
import type { RwaStandard__factory } from "../../types/factories/contracts/RwaStandard__factory";

export async function deployRwaStandardFixture(): Promise<{ rwaStandard: RwaStandard }> {
  const signers: SignerWithAddress[] = await ethers.getSigners();
  const admin: SignerWithAddress = signers[0];
  const minter: SignerWithAddress = signers[1];

  const initData = {
    name: "RWA Standard",
    symbol: "RWA",
  };
  const rwaStandardFactory: RwaStandard__factory = <RwaStandard__factory>await ethers.getContractFactory("RwaStandard");
  const rwaStandard: RwaStandard = <RwaStandard>(
    await rwaStandardFactory.connect(admin).deploy(initData.name, initData.symbol)
  );
  await rwaStandard.deployed();
  await rwaStandard.grantRole(await rwaStandard.MINTER_ROLE(), minter.address);

  return { rwaStandard };
}
