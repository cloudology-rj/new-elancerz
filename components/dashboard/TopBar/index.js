import { useState } from 'react';

import { TopBarWrapper, Heading, Tab } from './TopBarStyles';

import { Button } from '../DasboardStyles';

import { VIEW } from '../DashboardLayout/Constant';

const TopBar = ({ currentView, setCurrentView }) => {
  return (
    <TopBarWrapper>
      <Heading>Dashboard</Heading>
      <Tab>
        <Button
          active={currentView === VIEW.FREELANCER ? true : false}
          onClick={() => setCurrentView(VIEW.FREELANCER)}
        >
          Freelancer
        </Button>
        <Button
          active={currentView === VIEW.EMPLOYER ? true : false}
          onClick={() => setCurrentView(VIEW.EMPLOYER)}
        >
          Employeer
        </Button>
      </Tab>
    </TopBarWrapper>
  );
};

export default TopBar;
