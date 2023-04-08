import { expect } from "chai";

export function shouldBehaveLikeRwaStandard(): void {
  const minterRole: string = "0x9f2df0fed2c77648de5860a4cc508cd0818c85b8b8a1ab4ceeef8d981c8956a6";

  it("should deploy the RwaStandard contract with the correct name and symbol", async function () {
    expect(await this.rwaStandard.name()).to.equal("RWA Standard");
    expect(await this.rwaStandard.symbol()).to.equal("RWA");
  });

  it("should mint a new token and set its URI", async function () {
    const uri = "https://token-uri.com/token/1";
    await this.rwaStandard.connect(this.signers.minter).safeMint(this.signers.user.address, uri);
    expect(await this.rwaStandard.ownerOf(0)).to.equal(this.signers.user.address);
    expect(await this.rwaStandard.tokenURI(0)).to.equal(uri);
  });

  it("should only allow minting by a user with the MINTER_ROLE", async function () {
    const uri = "https://token-uri.com/token/1";
    await expect(
      this.rwaStandard.connect(this.signers.user).safeMint(this.signers.user.address, uri),
    ).to.be.revertedWith(
      `AccessControl: account ${this.signers.user.address.toLowerCase()} is missing role ${minterRole}`,
    );
  });

  it("should set a new token URI for an existing token", async function () {
    const uri1 = "https://token-uri.com/token/1";
    const uri2 = "https://token-uri.com/token/2";
    await this.rwaStandard.connect(this.signers.minter).safeMint(this.signers.user.address, uri1);
    await this.rwaStandard.connect(this.signers.minter).setTokenURI(0, uri2);
    expect(await this.rwaStandard.tokenURI(0)).to.equal(uri2);
  });

  it("should only allow setting a token URI by a user with the MINTER_ROLE", async function () {
    const uri1 = "https://token-uri.com/token/1";
    const uri2 = "https://token-uri.com/token/2";
    await this.rwaStandard.connect(this.signers.minter).safeMint(this.signers.user.address, uri1);
    await expect(this.rwaStandard.connect(this.signers.user).setTokenURI(0, uri2)).to.be.revertedWith(
      `AccessControl: account ${this.signers.user.address.toLowerCase()} is missing role ${minterRole}`,
    );
  });

  it("should burn an existing token", async function () {
    const uri = "https://token-uri.com/token/1";
    await this.rwaStandard.connect(this.signers.minter).safeMint(this.signers.user.address, uri);
    await this.rwaStandard.connect(this.signers.minter).safeBurn(0);
    await expect(this.rwaStandard.ownerOf(0)).to.be.revertedWith("ERC721: invalid token ID");
  });

  it("should only allow burning a token by a user with the MINTER_ROLE", async function () {
    const uri = "https://token-uri.com/token/1";
    await this.rwaStandard.connect(this.signers.minter).safeMint(this.signers.user.address, uri);
    await expect(this.rwaStandard.connect(this.signers.user).safeBurn(0)).to.be.revertedWith(
      `AccessControl: account ${this.signers.user.address.toLowerCase()} is missing role ${minterRole}`,
    );
  });
}
