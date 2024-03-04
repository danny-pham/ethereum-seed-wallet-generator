const ethereumWalletGenerator = require('./ethereum-wallet-generator');

const seedPhraseGenerator = require('seed-phrase-generator');

const seedPhrase = seedPhraseGenerator.generateSeedPhrase();

const ethereumWallet = ethereumWalletGenerator.createEthereumWallet();

console.log('Seed Phrase:', seedPhrase);
console.log('Ethereum Address:', ethereumWallet.getAddressString());
console.log('Ethereum Private Key:', ethereumWallet.getPrivateKeyString());
