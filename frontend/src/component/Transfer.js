import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import Receipt from "./Receipt";
import axios from 'axios';

const Transfer = () => {

    const {blockchainAddress} = useLocation().state;
    
    const [isShown, setIsShown] = useState(false);

    const [amount, setAmount] = useState('');

    const [receipt, setReceipt] = useState({

      gas: 0,
      block_num: 0,
      block_hash: '',
      transaction_hash: '',
      from: '',
      to: ''

    });


    const handleChange = event => {
      setAmount(event.target.value);
    };

    const handleSubmit = async (event) => {
      event.preventDefault();


      if(amount.trim().length !== 0) {
        setIsShown(current => !current);
      } else {
        console.log('input was empty');
      }

      var receiptData = await getReceiptData();
      
      setReceipt({...receipt, gas: receiptData.data.gasUsed, block_num: receiptData.data.blockNumber, block_hash: receiptData.data.blockHash, transaction_hash: receiptData.data.transactionHash, from: receiptData.data.from, to: receiptData.data.to});
       

    };

    async function getReceiptData() {
      let result;
      return result = await axios.post("http://localhost:3001/transaction/send",
      {
        headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
        data: {
          source: blockchainAddress,
          destination: '0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199',
          amount: amount
        },
        
      })
     
        
    }
  

    
    return(
      <>
        <h1>Transfer</h1>
       
          <form onSubmit={handleSubmit} className="container">
          <p><b>From:</b> {blockchainAddress}</p>
          <p><b>To:</b> 0x8626f6940E2eb28930eFb4CeF49B2d1F2C9C1199</p>
          <p><b>Amount:</b> <input type="text" id="amount" name="amount" onChange={handleChange}></input></p>
          <button type="submit">Submit</button>
          </form>
     
        {isShown && <Receipt gasUsed={receipt.gas} blockNumber={receipt.block_num} blockHash={receipt.block_hash} transactionHash={receipt.transaction_hash} from={receipt.from} to={receipt.to} />}

      </>
    );
};

export default Transfer;