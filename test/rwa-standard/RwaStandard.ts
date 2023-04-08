import { loadFixture } from "@nomicfoundation/hardhat-network-helpers";
import type { SignerWithAddress } from "@nomiclabs/hardhat-ethers/dist/src/signer-with-address";
import { ethers } from "hardhat";

import type { Signers } from "../types";
import { shouldBehaveLikeRwaStandard } from "./RwaStandard.behavior";
import { deployRwaStandardFixture } from "./RwaStandard.fixture";

describe("Unit tests", function () {
  before(async function () {
    this.signers = {} as Signers;

    const signers: SignerWithAddress[] = await ethers.getSigners();
    this.signers.admin = signers[0];
    this.signers.minter = signers[1];
    this.signers.user = signers[2];

    this.loadFixture = loadFixture;
  });

  describe("RwaStandard", function () {
    beforeEach(async function () {
      const { rwaStandard } = await this.loadFixture(deployRwaStandardFixture);
      this.rwaStandard = rwaStandard;
    });

    shouldBehaveLikeRwaStandard();
  });
});
