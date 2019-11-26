import React, { Component } from "react";
import shortid from "shortid";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Controls from "../Controls/Controls";
import Balance from "../Balance/Balance";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

 const notifyA = () => toast.error("Введите сумму для проведения операции!", {containerId: 'A'});
 const notifyB = () => toast.error("На счету недостаточно средств для проведения операции!", {containerId: 'B'});

export default class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
    amount: '',
    deposit: 0,
    withdraw: 0
  };


  handleTakeAmount = e => {
    this.setState({
      amount: e.target.value
    });
  };

  handleDeposit = e => {
    const { balance, amount, deposit } = this.state;
    const { name } = e.target;

    if (amount === "0" || amount === '') {
      notifyA();
      this.cleanInputAmount();
    } else {
      const step = balance + Number(amount);
      this.setState(state => ({
        balance: step
      }));
  
      const itemTransaction = {
        type: name,
        id: shortid.generate(),
        amount: amount,
        date: new Date().toLocaleString("en-US", { hour12: false })
      };

      this.setState(state => ({
        transactions: [...state.transactions, itemTransaction]
      }));

      this.setState(state => ({
        deposit: deposit + Number(itemTransaction.amount)
      }));

      this.cleanInputAmount();
    }
  };

  handleWithdraw = e => {
    const { balance, amount, withdraw } = this.state;
    const { name } = e.target;

    if (amount > balance) {
      notifyB();
      this.cleanInputAmount();
    } else if (amount === "0" || amount === '') {
     notifyA();
      this.cleanInputAmount();
    } else {
      const step = balance - Number(amount);
      this.setState(state => ({
        balance: step
      }));

      const itemTransaction = {
        type: name,
        id: shortid.generate(),
        amount: amount,
        date: new Date().toLocaleString("en-US", { hour12: false })
      };

      this.setState(state => ({
        transactions: [...state.transactions, itemTransaction]
      }));

      this.setState(state => ({
        withdraw: withdraw + Number(itemTransaction.amount)
      }));

      this.cleanInputAmount();
    }
  };

  cleanInputAmount = () => {
    this.setState(state => ({
      amount: ""
    }));
  };

  render() {
    const { amount, transactions, balance, deposit, withdraw } = this.state;

    return (
      <div className="dashboard">
        <ToastContainer />
        <Controls
          handleDeposit={this.handleDeposit}
          handleWithdraw={this.handleWithdraw}
          amount={amount}
          handleTakeValue={this.handleTakeAmount}
        />
        <Balance
          balance={balance}
          amountDeposit={deposit}
          amoutntWithdraw={withdraw}
        />
        <TransactionHistory transactions={transactions} />
      </div>
    );
  }
}
