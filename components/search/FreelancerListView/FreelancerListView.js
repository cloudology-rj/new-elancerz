import PropTypes from 'prop-types';

import FreelancerCardLarge from '../../Cards/FreelancerCardLarge/FreelancerCardLarge';

import { ListViewContainer } from './FreelancerListViewStyles';

const FreelancerListView = ({ list }) => {
  return (
    <ListViewContainer>
      {list !== [] &&
        list.map((freelancer) => (
          <FreelancerCardLarge key={freelancer.id} {...freelancer} />
        ))}
    </ListViewContainer>
  );
};

FreelancerListView.propTypes = {
  list: PropTypes.array,
};

export default FreelancerListView;
