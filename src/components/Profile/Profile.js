import PropTypes from 'prop-types';
import defaultImage from '../../images/default.jpg'

export function Profile ({name, tag, location, avatar, stats}){
    return (
            <div >
              <div >
                <img
                  src={avatar}
                  alt="Аватар пользователя"
                  
                />
                <p >{name}</p>
                <p >@{tag}</p>
                <p >{location}</p>
              </div>
            
              <ul >
                <li>
                  <span >Followers</span>
                  <span >{stats.followers}</span>
                </li>
                <li>
                  <span >Views</span>
                  <span >{stats.views}</span>
                </li>
                <li>
                  <span >Likes</span>
                  <span >{stats.likes}</span>
                </li>
              </ul>
            </div>
    )
}

Profile.defaultProps = {
name: "Unknown",
avatar: defaultImage,

}



Profile.propTypes = {
    name: PropTypes.string,
     tag: PropTypes.string,
     location: PropTypes.string,
     avatar: PropTypes.string,
     stats: PropTypes.shape({
      followers: PropTypes.number,
      views: PropTypes.number,
      likes: PropTypes.number,
    }),
}