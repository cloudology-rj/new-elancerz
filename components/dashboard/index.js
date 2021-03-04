import Router from 'next/router';
import PropTypes from 'prop-types';

import Freelancer from './DashboardLayout/Freelancer';
import Employeer from './DashboardLayout/Employeer';

import { useAuth } from '../../context/AuthProvider';

import { VIEW } from './DashboardLayout/Constant';

const CurrentView = ({ view }) => {
  const { isLogin } = useAuth();

  if (!isLogin) {
    typeof window !== 'undefined' && Router.push('/');
  }

  return view === VIEW.FREELANCER ? <Freelancer /> : <Employeer />;
};

CurrentView.propTypes = {
  view: PropTypes.string,
};

export default CurrentView;
