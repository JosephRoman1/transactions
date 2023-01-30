import React from "react";

const TransactionData = props => {
    return (
        <div className="container">
            <p><b>Transaction Hash:</b> {props.receiptHash}</p>
            <p><b>Status:</b> {props.status}</p>
            <p><b>Timestamp:</b> {props.createdAt}</p>
            <p><b>From:</b> {props.source}</p>
            <p><b>To:</b> {props.destination}</p>
            <p><b>Value:</b> {props.amount}</p>
            <p><b>Gas Used:</b> {props.gasUsed}</p>
        </div>
    );
};

export default TransactionData;