import React from "react";
import PropTypes from 'prop-types';
import s from "./TransactionHistory.module.css";

const TransactionHistory = ({ transactions }) => {
  return (
  <table className={s.history}>
    <thead className={s.thead}>
      <tr>
        <th className={s.th}>Transaction</th>
        <th className={s.th}>Amount</th>
        <th className={s.th}>Date</th>
      </tr>
    </thead>
    <tbody>
      {transactions.map(item => (
        <tr key={item.id}>
          <td className={s.td}>{item.type}</td>
          <td className={s.td}>{item.amount}$</td>
          <td className={s.td}>{item.date}</td>
        </tr>
      ))}
    </tbody>
  </table>
)};

TransactionHistory.propTypes = {
  transactions: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      date: PropTypes.date,
    }),
  ).isRequired
}
export default TransactionHistory;
