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

Deploy the contracts to Hardhat Network: **supporting networks : bscTestnet, bsc, baobab, cypress**

```sh
$ yarn hardhat deploy --network bscTestnet
```

### Verify

```sh
$ yarn hardhat verify --network bscTestnet CONTARCT_ADDRESS "Elysia RWA Standard" "ERWA"
```

### Tasks

```sh
yarn hardhat grant-minter-role --network bscTestnet
yarn hardhat mint --network bscTestnet
yarn hardhat burn --network bscTestnet
yarn hardhat set-token-uri --network bscTestnet
```

## License

This project is licensed under MIT.
