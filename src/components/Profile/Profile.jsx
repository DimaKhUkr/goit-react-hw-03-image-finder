import PropTypes from 'prop-types';
import css from './Profile.module.css';
import { WiAlien } from 'react-icons/wi';
import { GrFormViewHide } from 'react-icons/gr';
import { FcLike } from 'react-icons/fc';

export const Profile = ({
  username,
  tag,
  location,
  avatar,
  stats: { followers, views, likes },
}) => {
  return (
    <div className={css.profile}>
      <div className={css.description}>
        <img src={avatar} alt="User avatar" className={css.avatar} />
        <p className={css.name}>{username}</p>
        <p className={css.tag}>@{tag}</p>
        <p className={css.location}>{location}</p>
      </div>

      <ul className={css.stats}>
        <li className={css.statsList}>
          <span className={css.label}>
            <WiAlien />
          </span>
          <span className={css.quantity}>{followers}</span>
        </li>
        <li className={css.statsList}>
          <span className={css.label}>
            <GrFormViewHide />
          </span>
          <span className={css.quantity}>{views}</span>
        </li>
        <li className={css.statsList}>
          <span className={css.label}>
            <FcLike />
          </span>
          <span className={css.quantity}>{likes}</span>
        </li>
      </ul>
    </div>
  );
};

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.shape({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  }),
};
