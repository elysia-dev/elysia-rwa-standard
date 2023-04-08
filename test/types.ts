import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";

import { RwaStandard } from "../types/contracts/RwaStandard";

type Fixture<T> = () => Promise<T>;

declare module "mocha" {
  export interface Context {
    rwaStandard: RwaStandard;
    loadFixture: <T>(fixture: Fixture<T>) => Promise<T>;
    signers: Signers;
  }
}

export interface Signers {
  admin: SignerWithAddress;
  minter: SignerWithAddress;
  user: SignerWithAddress;
}
