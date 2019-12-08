import React, { Component } from "react";
import shortid from "shortid";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Controls from "../Controls/Controls";
import Balance from "../Balance/Balance";
import TransactionHistory from "../TransactionHistory/TransactionHistory";

const notifyA = () =>
  toast.error("Введите сумму для проведения операции!", { containerId: "A" });
const notifyB = () =>
  toast.error("На счету недостаточно средств для проведения операции!", {
    containerId: "B"
  });

export default class Dashboard extends Component {
  state = {
    transactions: [],
    balance: 0,
    amount: "",
    deposit: 0,
    withdraw: 0
  };

  componentDidMount() {
    if (localStorage.getItem("newTransaction")) {
      this.setState({
        transactions: JSON.parse(localStorage.getItem("newTransaction")),
        balance: JSON.parse(localStorage.getItem("newBalance")),
        deposit: JSON.parse(localStorage.getItem("newDeposit")),
        withdraw: JSON.parse(localStorage.getItem("newWithdraw"))
      });
    }
  }

  handleTakeAmount = e => {
    this.setState({
      amount: e.target.value
    });
  };

  handleDeposit = e => {
    const { balance, amount, deposit } = this.state;

    if (amount === "0" || amount === "") {
      notifyA();
      this.cleanInputAmount();
    } else {
      const step = balance + Number(amount);
      this.setState(state => ({
        balance: step,
        transactions: [...state.transactions, itemTransaction],
        deposit: deposit + Number(itemTransaction.amount)
      }));

      const itemTransaction = {
        type: "DEPOSIT",
        id: shortid.generate(),
        amount: amount,
        date: new Date().toLocaleString("en-US", { hour12: false })
      };
      this.cleanInputAmount();
    }
  };

  handleWithdraw = e => {
    const { balance, amount, withdraw } = this.state;

    if (amount > balance) {
      notifyB();
      this.cleanInputAmount();
    } else if (amount === "0" || amount === "") {
      notifyA();
      this.cleanInputAmount();
    } else {
      const step = balance - Number(amount);
      this.setState(state => ({
        balance: step,
        transactions: [...state.transactions, itemTransaction],
        withdraw: withdraw + Number(itemTransaction.amount)
      }));

      const itemTransaction = {
        type: "WITHDRAW",
        id: shortid.generate(),
        amount: amount,
        date: new Date().toLocaleString("en-US", { hour12: false })
      };
      this.cleanInputAmount();
    }
  };

  cleanInputAmount = () => {
    this.setState(state => ({
      amount: ""
    }));
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.transactions !== this.state.transactions) {
      localStorage.setItem(
        "newTransaction",
        JSON.stringify(this.state.transactions)
      );
    }
    if (prevState.balance !== this.state.balance) {
      localStorage.setItem("newBalance", JSON.stringify(this.state.balance));
    }
    if (prevState.deposit !== this.state.deposit) {
      localStorage.setItem("newDeposit", JSON.stringify(this.state.deposit));
    }
    if (prevState.withdraw !== this.state.withdraw) {
      localStorage.setItem("newWithdraw", JSON.stringify(this.state.withdraw));
    }
  }

  render() {
    const { amount, transactions, balance, deposit, withdraw } = this.state;
    const deposit1 = transactions.reduce((acc, el) => {
      if (el.type === "DEPOSIT") {
        return acc + Number(el.amount);
      }
      return acc;
    }, 0);

    const withdraw1 = transactions.reduce((acc, el) => {
      if (el.type === "WITHDRAW") {
        return acc + +el.amount;
      }
      return acc;
    }, 0);

    console.log("deposit1", deposit1);
    console.log("withdraw1", withdraw1);

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
          amountDeposit={deposit1}
          amoutntWithdraw={withdraw1}
        />
        <TransactionHistory transactions={transactions} />
      </div>
    );
  }
}
