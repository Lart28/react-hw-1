import PropTypes from 'prop-types';
import { Container, Title,  Stats, StatItem, StatLabel, StatValue} from './Statistics.styled';

export const Statistic = ({ title, stats }) => {
  return (
    <Container>
      <Title>{title}</Title>
      <Stats>
    {
      stats.map(({ id, label, percentage }) => (
        <StatItem statType={label} key={id}>
              <StatLabel>{label}</StatLabel>
              <StatValue>{percentage}%</StatValue>
            </StatItem>
      ))
    }
    </Stats>
  </Container>
  )
}

Statistic.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.arrayOf(
    PropTypes.exact({
      id: PropTypes.string.isRequired,
      label: PropTypes.string.isRequired,
      percentage: PropTypes.number.isRequired
    })
  )
}