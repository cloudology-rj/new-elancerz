import PropTypes from 'prop-types';
import { useState } from 'react';
import { PreTitle, Bold, HeaderTwo } from '@/components/global/Text';

import FreelancerList from './FreelancerList/FreelancerList';
import FreelancerListView from './FreelancerListView/FreelancerListView';
import { useAuth } from '../../context/AuthProvider';

import AuthModal from '../../HOC/AuthModal';
const FreelancerListCard = AuthModal(FreelancerList);
const FreelancerDefault = AuthModal(FreelancerListView);

const viewFreelancers = ({ freelancers, view }) => {
  const { user } = useAuth();

  return view ? (
    <FreelancerDefault list={freelancers} />
  ) : (
    <FreelancerListCard list={freelancers} />
  );
};

viewFreelancers.propTypes = {
  freelancers: PropTypes.array,
  view: PropTypes.bool,
};

export default viewFreelancers;
