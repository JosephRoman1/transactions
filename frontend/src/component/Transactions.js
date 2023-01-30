import axios from "axios";
import React from "react";
import TransactionData from "./TransactionData";

class Transactions extends React.Component {

  constructor(props) {
    super(props);

    this.state = {
      transactionData: {},
     
    };
  }


  createTransactionData = count => {
    let transactions = [];

    for(let i = 0; i < count; i++) {
      transactions.push(
      <TransactionData 
        
        source={this.state.transactionData[i].source} 
        destination={this.state.transactionData[i].destination}
        amount={this.state.transactionData[i].amount}
        gasUsed={this.state.transactionData[i].gasUsed}
        createdAt={this.state.transactionData[i].createdAt}
        status={this.state.transactionData[i].status}
        receiptHash={this.state.transactionData[i].receiptHash}
        
      
      />
      
      );

    }

    return transactions;
  }

  componentDidMount() {
    this.getTransactionData();
  }

  getTransactionData() {
    axios.get(`http://localhost:3001/transaction/history`)
    .then(res => {
      const transaction_data = res.data;
      this.setState({transactionData: transaction_data});
   
    });
  }

  
  
  render() {
    return(
      <>
        <h1>Transaction History</h1>
     
        {this.createTransactionData(this.state.transactionData.length)};
      </>
    );
  }
};

export default Transactions;