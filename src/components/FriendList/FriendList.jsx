import { Friend, Status, Friends, Avatar, Name} from "./FriendList.styled"
import PropTypes from 'prop-types';

export const FriendList = ({ friends }) => {
  return (
    <Friends>
      {
        friends.map(({ avatar, name, isOnline, id }) => (
          <Friend key={id}>
            <Status status={isOnline}></Status>
            <Avatar src={avatar} alt="User avatar" width="48" />
            <Name>{name}</Name>
          </Friend>
          ))
      }
</Friends>
  )
}

FriendList.propTypes = {
  friends: PropTypes.arrayOf(
    PropTypes.exact({
      avatar: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      isOnline: PropTypes.bool.isRequired,
      id: PropTypes.number.isRequired,
    })
  )
}