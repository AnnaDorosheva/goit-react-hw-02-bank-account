import React from "react";
import PropTypes from "prop-types";
import s from "./Balance.module.css";

const Balance = ({ balance, amountDeposit, amoutntWithdraw }) => (
  <section className={s.balance}>
    <span>
      <span role="img" aria-label="money bag">
      💰
      </span>
      {amountDeposit}$
    </span>
    <span>
    <span role='img' aria-label="loudly crying face">
    😭
    </span>{amoutntWithdraw}$</span>
    <span>Balance: {balance}$</span>
  </section>
);

Balance.propTypes = {
  balance: PropTypes.number.isRequired,
  amountDeposit: PropTypes.any.isRequired,
  amoutntWithdraw: PropTypes.any.isRequired
};
export default Balance;
