import { useState } from 'react';
import Router from 'next/router';
import styled from 'styled-components';

import TopBar from '../../components/projects/TopBar/';
import Freelancer from '../../components/projects/Freelancer';
import Employeer from '../../components/projects/Employeer';
import { VIEW } from '../../components/projects/Constant';
import Layout from '../../components/Base/Layout/Layout';

import Container from '@/components/global/Container';

import { useAuth } from '../../context/AuthProvider';

import { StatusContextProvider } from '../../context/StatusProvider';

const Dashboard = () => {
  const [currentView, setCurrentView] = useState(VIEW.FREELANCER);
  const { isLogin } = useAuth();

  if (!isLogin) {
    typeof window !== 'undefined' && Router.push('/');
  }

  return (
    <StatusContextProvider>
      <Layout>
        <Container>
          {/* <ProjectContainer> */}
          <TopBar currentView={currentView} setCurrentView={setCurrentView} />
          {currentView === VIEW.FREELANCER ? <Freelancer /> : <Employeer />}
          {/* </ProjectContainer> */}
        </Container>
      </Layout>
    </StatusContextProvider>
  );
};

export default Dashboard;

const ProjectContainer = styled.div`
  margin: 20px 40px;
`;
