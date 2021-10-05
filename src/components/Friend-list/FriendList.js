import PropTypes from 'prop-types';
import styles from 'components/Friend-list/FriendList.module.css';

export function FriendList({ friends }) {
  return (
    <ul className={styles.friend__list}>
      {friends.map(friend => (
        <li className={styles.item} key={friend.id}>
          {friend.isOnline ? (
            <span
              className={styles.status}
              style={{ backgroundColor: 'green' }}
            ></span>
          ) : (
            <span
              className={styles.status}
              style={{ backgroundColor: 'red' }}
            ></span>
          )}

          <img
            className={styles.avatar}
            src={friend.avatar}
            alt="avatar"
            width="48"
          />
          <p className={styles.name}>{friend.name}</p>
        </li>
      ))}
    </ul>
  );
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      avatar: PropTypes.string,
      name: PropTypes.string,
    }),
  ),
};

// {/* <ul class="friend-list">
//   <li class="item">
//   <span class="status"></span>
//   <img class="avatar" src="" alt="" width="48" />
//   <p class="name"></p>
// </li>
// </ul> */}
