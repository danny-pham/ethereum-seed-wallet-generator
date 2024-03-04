# Ethereum Seed Wallet Generator

## Introduction
Ethereum Seed Wallet Generator is a JavaScript library that allows you to generate Ethereum wallets (addresses) from seed phrases. It relies on the Seed Ethereum Wallet library to generate wallets from seed phrases.

## Installation
You can install the library via npm:

```
npm install ethereum-seed-wallet-generator
```

## Usage
Here's how to use the library to generate Ethereum wallets from seed phrases:

```
const ethereumWalletGenerator = require('ethereum-seed-wallet-generator');

// Generate seed phrase
const seedPhrase = 'your seed phrase here';

// Create Ethereum wallet from seed phrase
const ethereumWallet = ethereumWalletGenerator.createEthereumWalletFromSeedPhrase(seedPhrase);
console.log('Ethereum Address:', ethereumWallet.address);
console.log('Ethereum Private Key:', ethereumWallet.privateKey);
```

The createEthereumWalletFromSeedPhrase function takes a seed phrase as input and returns the corresponding Ethereum wallet, including the Ethereum address and private key.

## License
This library is released under the MIT License.