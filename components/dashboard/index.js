import { useState } from 'react';

import DashBoardLayout from './DashboardLayout/DashBoardLayout';
import TopBar from './TopBar/';

import { VIEW } from '../../components/dashboard/DashboardLayout/Constant';

import DashboardView from './DashboardView';

const Dashboard = () => {
  const [currentView, setCurrentView] = useState(VIEW.FREELANCER);

  return (
    <DashBoardLayout>
      <TopBar currentView={currentView} setCurrentView={setCurrentView} />
      <DashboardView view={currentView} />
    </DashBoardLayout>
  );
};

export default Dashboard;
