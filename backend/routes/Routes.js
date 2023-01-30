const express = require('express');
const cors = require('cors'); //required to get past an error
const transaction = require('../models/Transaction');
const blockchainAddresses = require('../modules/Accounts'); //import the Accounts module
const transactionInfo = require('../modules/Transactions'); //import the Transactions module

const router = express.Router();
router.use(cors()); //have to use this to avoid an error




router.get('/account/addresses', function(req, res) {
    const getAddressData = async () => {
        const results = await blockchainAddresses.getAddresses();
        res.send(results); //call the getAddresses() function from the Accounts module
    }

    getAddressData();
});

router.get('/account/balance', function(req, res) {
    const getAccountBalance = async () => {
        const results = await blockchainAddresses.getBalance('0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199');
        res.send(results);
    }

    getAccountBalance();
});

router.get('/transaction/history', function(req, res) {
    let transactions = transaction.find({}, function(err, transactions) {
        if(err) {
            console.log(err);
        }else {
            res.json(transactions);
        }
    });
});

router.post('/transaction/send', function(req, res) {
    const getReceipt = async () => {
        console.log(`POST called ===> ${JSON.stringify(req.body)}`)
        if(!req.body || !req.body.data) {
            console.error(`transaction/send - request body is undefined`);
            res.send(`error: request body not found`);
            return
        }

        const { source, destination, amount } = req.body.data;

        var date = new Date();

        const receipt = await transactionInfo.sendTransaction(source, destination, amount);

            transaction.insertMany([
                    {
                        source: source,
                        destination: destination,
                        amount: amount,
                        status: "SUCCESS",
                        gasUsed: receipt.gasUsed,
                        receiptHash: receipt.transactionHash,
                        createdAt: date
                      }
                ]).then(function(){
                    console.log("Transaction data successfully inserted")  
                }).catch(function(error){
                    console.log(`Could not insert Transaction data`)  
                });
                
        
      
        res.send(receipt);
    }

    getReceipt();
    
})

module.exports = router;