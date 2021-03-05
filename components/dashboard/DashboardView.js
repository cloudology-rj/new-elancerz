import Router from 'next/router';
import PropTypes from 'prop-types';

import Freelancer from './DashboardLayout/Freelancer';
import Employeer from './DashboardLayout/Employeer';

import { useAuth } from '../../context/AuthProvider';

import { VIEW } from './DashboardLayout/Constant';

const CurrentView = ({ view }) => {

  return view === VIEW.FREELANCER ? <Freelancer /> : <Employeer />;
};

CurrentView.propTypes = {
  view: PropTypes.string,
};

export default CurrentView;
