import PropTypes from 'prop-types';
import css from './Friend.module.css';
export const FriendListItem = ({ isOnline, name, avatar }) => {
  const status = isOnline ? 'isOnline' : 'isOfline';
  return (
    <div className={css.item}>
      <span className={css[status]}></span>
      <img className={css.avatar} src={avatar} alt="User avatar" width="48" />
      <p className={css.name}>{name}</p>
    </div>
  );
};

FriendListItem.propTypes = {
  name: PropTypes.string.isRequired,
  isOnline: PropTypes.bool.isRequired,
  avatar: PropTypes.string.isRequired,
};
