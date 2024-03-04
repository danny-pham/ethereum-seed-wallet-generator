const ethereumWalletGenerator = require('ethereum-wallet-generator');

const seedPhrase = 'your seed phrase here';

const ethereumWallet = ethereumWalletGenerator.createEthereumWalletFromSeedPhrase(seedPhrase);
console.log('Ethereum Address:', ethereumWallet.address);
console.log('Ethereum Private Key:', ethereumWallet.privateKey);
