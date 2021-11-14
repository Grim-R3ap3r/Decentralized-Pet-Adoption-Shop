# Decentralized-Pet-Adoption-Shop
  **STEPS FOR INSTALLATION**
* go to command line
* npm install -g -production windows -build-tools
* installing truffle frame work--> npm install -g truffle
* install gnache [gnache](https://www.trufflesuite.com/ganache)
* creates a folder-->cd that folder-->truffle init -->code .
* this will open a solidity skeleton file in your desired folder
* to deploy smart contracts : **truffle deploy**
* to create smart contracts --> **truffle create contract TruffleContract**
* to create migrations --> **truffle create migrations TruffleContract** (with timestamp as number)
* to test **truffle test** (manually refer each time)


# How to test your Dapp on Gnache
* create a metamask account [metamask](https://metamask.io/)
* cliick on **custom RPC**
* new RPC URL = url in ur gnache workspace
* after setting local test network import any one of the accounts from gnache into metamask
* **npm run dev**
* !!hurray you are all set to test ur Dapp
