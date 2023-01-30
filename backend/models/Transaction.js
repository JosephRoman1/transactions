const mongoose = require("mongoose");
const transactionSchema = new mongoose.Schema({
    source: {
        type: String,
        require: true
    },
    destination: {
        type: String,
        require: true
    },
    amount: {
        type: String,
        require: true
    },
    status: {
        type: String,
        require: true
    },
    gasUsed: {
        type: String
    },
    receiptHash: {
        type: String
    },
    createdAt: {
        type: String,
        require: true,
    },
    updatedAt: {
        type: String
    }
});
const Transaction = mongoose.model('Transaction', transactionSchema, 'Transactions');
module.exports = Transaction;