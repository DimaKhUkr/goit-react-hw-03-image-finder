import { FriendListItem } from './FriendListItem';
import PropTypes from 'prop-types';
import css from './Friend.module.css';

export const FriendList = ({ prop }) => {
  return (
    <ul className={css.friendList}>
      {prop.map(({ isOnline, name, avatar, id }) => (
        <li key={id}>
          <FriendListItem isOnline={isOnline} name={name} avatar={avatar} />
        </li>
      ))}
    </ul>
  );
};

FriendList.propTypes = {
  prop: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
    })
  ).isRequired,
};
