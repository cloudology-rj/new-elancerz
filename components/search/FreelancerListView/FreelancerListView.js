import PropTypes from 'prop-types';
import Router from 'next/router';

import FreelancerCardLarge from '../../Cards/FreelancerCardLarge/FreelancerCardLarge';

import { ListViewContainer } from './FreelancerListViewStyles';
import { useAuth } from '../../../context/AuthProvider';

const FreelancerListView = ({ list, openAuthModal, setUser }) => {
  const { isLogin } = useAuth();

  const redirect = (id) => {
    if (!isLogin) {
      openAuthModal(true);
      setUser(id);
    } else {
      Router.push(`/profile/view/${id}`);
    }
  };

  return (
    <ListViewContainer>
      {list !== [] &&
        list.map((freelancer) => (
          <FreelancerCardLarge
            redirect={() => redirect(freelancer.id)}
            key={freelancer.id}
            {...freelancer}
          />
        ))}
    </ListViewContainer>
  );
};

FreelancerListView.propTypes = {
  list: PropTypes.array,
  openAuthModal: PropTypes.func,
  setUser: PropTypes.func
};

export default FreelancerListView;
