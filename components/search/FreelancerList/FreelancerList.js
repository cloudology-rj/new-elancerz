import Router from 'next/router';
import PropTypes from 'prop-types';

import FreelancerCard from '../../Cards/FreelancerCard/FreelancerCard';

import { ListContainer } from './FreelancerListStyles';

import { useAuth } from '../../../context/AuthProvider';

const FreelancerList = ({ list, openAuthModal }) => {
  const { isLogin } = useAuth();

  const redirect = (id) => {
    console.log('RUNNING');

    if (!isLogin) {
      openAuthModal(true);
    } else {
      Router.push(`/profile/view/${id}`);
    }
  };

  return (
    <ListContainer>
      {list !== [] &&
        list.map((freelancer) => (

          <FreelancerCard
          redirect={() => redirect(freelancer.id)}
            key={freelancer.id}
            {...freelancer}
            fullWidth={false}
          />
        ))}
    </ListContainer>
  );
};

FreelancerList.propTypes = {
  list: PropTypes.array,
};

export default FreelancerList;
