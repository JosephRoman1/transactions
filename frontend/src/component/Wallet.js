import React, { useEffect, useState } from "react";
import axios from "axios";

function Wallet() {

  const [wallet, setWallet] = useState([]);

  useEffect(() => {
    async function getData() {
      axios.get(`http://localhost:3001/account/balance`)
      .then(res => {
        let addressBalance = res.data;
        setWallet(addressBalance); 
      });
    }
    
    getData();

  },[])

  
    return(
      <>
        <h1>My Wallet</h1>

        <div className="container">

          <p className="paragraphStyle">{wallet}</p>

        </div>
      </>
    );
  
};


export default Wallet;