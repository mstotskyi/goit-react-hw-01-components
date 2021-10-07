import PropTypes from 'prop-types';

import styles from 'components/FriendList/FriendList.module.css';

export default function FriendListItem({ id, name, isOnline, avatar }) {
  return (
    <li className={styles.item} key={id}>
      <span
        className={styles.status}
        style={
          isOnline ? { backgroundColor: 'green' } : { backgroundColor: 'red' }
        }
      ></span>
      <img className={styles.avatar} src={avatar} alt="avatar" width="48" />
      <p className={styles.name}>{name}</p>
    </li>
  );
}

FriendListItem.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};
