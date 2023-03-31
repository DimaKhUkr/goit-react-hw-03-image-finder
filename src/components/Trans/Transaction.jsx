import PropTypes from 'prop-types';
import css from './Transaction.module.css';

export const Transaction = ({ transaction: { type, amount, currency } }) => {
  return (
    <>
      <td className={css.type}>{type}</td>
      <td className={css.amount}>{amount}</td>
      <td>{currency}</td>
    </>
  );
};

Transaction.propTypes = {
  transaction: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.string.isRequired,
    currency: PropTypes.string.isRequired,
  }),
};
