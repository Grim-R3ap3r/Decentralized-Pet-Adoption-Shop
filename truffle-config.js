var HDWalletProvider = require("@truffle/hdwallet-provider");
require("dotenv").config();

const MNEMONIC = process.env.MNEMONIC ;

module.exports = {
  networks: {
    development: {
      host: "127.0.0.1",
      port: 7545,
      network_id: "*" // Match any network id
    },
    develop: {
      port: 8545
    },
    rinkeby: {
      // must be a thunk, otherwise truffle commands may hang in CI
      provider: () =>
        new HDWalletProvider({
          mnemonic: {
            phrase: MNEMONIC
          },
          providerOrUrl: `https://rinkeby.infura.io/v3/${process.env.API_KEY}`,
        
          
        }),
      network_id: '4',
    }
  }
};
