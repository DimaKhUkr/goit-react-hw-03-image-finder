import { Transaction } from './Transaction';
import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const TransactionHistory = ({ prop }) => {
  return (
    <table className={css.transactionHistory}>
      <thead className={css.head}>
        <tr>
          <th>Type</th>
          <th className={css.amount}>Amount</th>
          <th>Currency</th>
        </tr>
      </thead>
      <tbody>
        {prop.map(transaction => (
          <tr key={transaction.id} className={css.str}>
            <Transaction transaction={transaction} />
          </tr>
        ))}
      </tbody>
    </table>
  );
};

TransactionHistory.propTypes = {
  prop: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.string.isRequired,
      type: PropTypes.string.isRequired,
      amount: PropTypes.string.isRequired,
      currency: PropTypes.string.isRequired,
    })
  ),
};
