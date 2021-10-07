import styles from 'components/FriendList/FriendList.module.css';
import FriendListItem from 'components/FriendList/FriendListItem';

export default function FriendList({ friends }) {
  return (
    <ul className={styles.friend__list}>
      {friends.map(friend => (
        <FriendListItem
          name={friend.name}
          id={friend.id}
          avatar={friend.avatar}
          isOnline={friend.isOnline}
        />
      ))}
    </ul>
  );
}
