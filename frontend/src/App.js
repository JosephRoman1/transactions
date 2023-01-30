import './App.css';
import { BrowserRouter, Route, Routes } from "react-router-dom";
import React from 'react';
import { Component } from 'react';
import Transactions from './component/Transactions';
import Addresses from './component/Addresses';
import Wallet from './component/Wallet';
import Navigation from './component/Navigation';
import Transfer from './component/Transfer';


class App extends Component {
  render() {
    return (
      <BrowserRouter history={History}>
        <div>
          <Navigation />
          <Routes>
            <Route path="/" element={<Transactions />} exact></Route>
            <Route path="/addresses" element={<Addresses />}></Route>
            <Route path="/wallet" element={<Wallet />}></Route>
            <Route path="/transfer/parameter-data" element={<Transfer />}></Route>
          </Routes>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
