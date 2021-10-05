import PropTypes from 'prop-types';


export function FriendList ({friends}){

    return (
        <ul>
{friends.map(friend => 
    <li  key={friend.id}>
    <span  ></span>
    <img  src={friend.avatar} alt="avatar" width="48" />
    <p >{friend.name}</p>
  </li>)}

        </ul>
    )

}



FriendList.propTypes = {
    friends: PropTypes.arrayOf(PropTypes.shape({

        id: PropTypes.number,
        avatar: PropTypes.string,
        name: PropTypes.string,
    }))
}








// {/* <ul class="friend-list">
//   <li class="item">
//   <span class="status"></span>
//   <img class="avatar" src="" alt="" width="48" />
//   <p class="name"></p>
// </li>
// </ul> */}

