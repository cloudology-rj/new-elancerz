import { useState, useContext } from 'react';

import { TopBarWrapper, Tab, Button, TopBarTitle } from './TopBarStyles';

import { VIEW } from '../../dashboard/DashboardLayout/Constant';

import { HeaderThree, HeaderTwo } from '@/components/global/Text';
import { ButtonTab } from '@/components/global/Button';

import { StatusContext } from '../../../context/StatusProvider';

const TopBar = ({ currentView, setCurrentView }) => {
  const { employer, freelancer } = useContext(StatusContext);
  const [employerIsActive] = employer;
  const [freelancerIsActive] = freelancer;

  return (
    <TopBarWrapper>
      <TopBarTitle>
        {currentView === VIEW.FREELANCER ? (
          freelancerIsActive
            ? ' Active Projects (2) '
            : ' Completed Projects (1) '
        ) : (
            employerIsActive
              ? ' Active Projects (2) '
              : ' Completed Projects (1) '
          )}
      </TopBarTitle>


      <Tab>
        <ButtonTab
          active={currentView === VIEW.FREELANCER ? true : false}
          onClick={() => setCurrentView(VIEW.FREELANCER)}
        >
          Freelancer
        </ButtonTab>
        <ButtonTab
          active={currentView === VIEW.EMPLOYER ? true : false}
          onClick={() => setCurrentView(VIEW.EMPLOYER)}
        >
          Employeer
        </ButtonTab>
      </Tab>
    </TopBarWrapper>
  );
};

export default TopBar;
