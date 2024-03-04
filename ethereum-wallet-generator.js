const seedEthereumWallet = require('seed-ethereum-wallet');

function createEthereumWalletFromSeedPhrase(seedPhrase) {
    const wallet = seedEthereumWallet.fromSeedPhrase(seedPhrase);
    return {
        address: wallet.getAddressString(),
        privateKey: wallet.getPrivateKeyString()
    };
}

module.exports = {
    createEthereumWalletFromSeedPhrase
};
