import { ProfileCard, Avatar, Description, Name, Info, Stats, StatItem, StatItemName, StatItemValue} from "./Profile.styled"
import PropTypes from 'prop-types';

export const Profile = ({ username, tag, location, avatar, stats}) => {
  return (
    <ProfileCard>
  <Description>
    <Avatar
      src={avatar}
      alt="User avatar"
    />
        <Name>{username}</Name>
        <Info> @{tag}</Info>
    <Info>{location}</Info>
  </Description>
  <Stats>
    <StatItem>
      <StatItemName>Followers</StatItemName>
      <StatItemValue>{stats.followers}</StatItemValue>
    </StatItem>
    <StatItem>
      <StatItemName>Views</StatItemName>
      <StatItemValue>{stats.views}</StatItemValue>
    </StatItem>
    <StatItem>
      <StatItemName>Likes</StatItemName>
      <StatItemValue>{stats.likes}</StatItemValue>
    </StatItem>
  </Stats>
</ProfileCard>
  )
}

Profile.propTypes = {
  username: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  location: PropTypes.string.isRequired,
  avatar: PropTypes.string.isRequired,
  stats: PropTypes.exact({
    followers: PropTypes.number.isRequired,
    views: PropTypes.number.isRequired,
    likes: PropTypes.number.isRequired,
  })
}