# RWA Standard

Elysia Rwa Standard

## Usage

### Pre Requisites

```sh
BSC_TESTNET_PRIVATE_KEY=0f11111111111111111111f9faf0187c1a3fa571b632a7864ad384ccf7e8cae7
BSC_MAINNET_PRIVATE_KEY=0f11111111111111111111f9faf0187c1a3fa571b632a7864ad384ccf7e8cae7
BSCSCAN_API_KEY=
```

### Install

Then, proceed with installing dependencies:

```sh
$ yarn
```

### Compile

Compile the smart contracts with Hardhat:

```sh
$ yarn compile
```

### Test

Run the tests with Hardhat:

```sh
$ yarn test
```

### Deploy

Deploy the contracts to Hardhat Network: **supporting networks : bsc_testnet, bsc**

```sh
$ yarn hardhat deploy --network bsc_testnet
```

### Tasks

```sh
yarn hardhat grant-minter-role --network bsc_testnet
yarn hardhat mint --network bsc_testnet
yarn hardhat burn --network bsc_testnet
yarn hardhat set-token-uri --network bsc_testnet
```

## License

This project is licensed under MIT.
