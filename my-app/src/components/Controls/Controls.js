import React from 'react';
import PropTypes from 'prop-types';
import s from './Controls.module.css';

const Controls = ({handleWithdraw,  handleDeposit, amount,  handleTakeValue}) => (

  <section className={s.controls}>
  <input className={s.input} type="number" name="amount" value={amount} onChange={handleTakeValue}/>
  <button className={s.button} type="button" name="Deposit" onClick={handleDeposit}>Deposit</button>
  <button className={s.button} type="button" name="Withdrow" onClick={handleWithdraw}>Withdraw</button>
</section>

);

Controls.propTypes = {
  handleDeposit: PropTypes.func.isRequired,
  handleWithdraw: PropTypes.func.isRequired,
  handleTakeValue: PropTypes.func.isRequired,
  amount: PropTypes.any.isRequired
}
export default Controls;