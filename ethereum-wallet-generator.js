const seedEthereumWallet = require('seed-ethereum-wallet');

function generateSeedPhrase() {
    // just test
    seedEthereumWallet.generateSeedPhrase();
}

function createEthereumWallet() {
    const seedPhrase = generateSeedPhrase();
    const ethereumWallet = seedEthereumWallet.fromSeedPhrase(seedPhrase);
    return ethereumWallet;
}

module.exports = {
    generateSeedPhrase: generateSeedPhrase,
    createEthereumWallet: createEthereumWallet
};
