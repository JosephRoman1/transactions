let Web3 = require('web3');
let web3 = new Web3('http://localhost:8545');


const getAddresses = async () => {
    console.log("getAddress method called... ");
    const accounts = await(web3.eth.getAccounts());
    return accounts;
}

const getBalance = async (address) => {
    console.log('getBalance method called...');
    const accountBalance = await(web3.eth.getBalance(address))
    return `Account: ${address} Balance: ${accountBalance}`;
}


module.exports = {
    getAddresses,
    getBalance
}