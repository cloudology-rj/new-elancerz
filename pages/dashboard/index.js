import { useState } from 'react';

import DashBoardLayout from '../../components/dashboard/DashboardLayout/DashBoardLayout';
import TopBar from 'components/dashboard/TopBar';

import { VIEW } from '../../components/dashboard/DashboardLayout/Constant';

import CurrentView from '../../components/dashboard/index';

const Dashboard = () => {
  const [currentView, setCurrentView] = useState(VIEW.FREELANCER);

  return (
    <DashBoardLayout>
      <TopBar currentView={currentView} setCurrentView={setCurrentView} />
      <CurrentView view={currentView} />
    </DashBoardLayout>
  );
};

export default Dashboard;
