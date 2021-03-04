import { useContext } from 'react';
import styled from 'styled-components';

import TopOptions from 'components/projects/TopOptions';
import Project from 'components/projects/freelancer/Project';

import { StatusContext } from '../../context/StatusProvider';

const Freelancer = () => {
  const { freelancer } = useContext(StatusContext);
  const [status, setStatus] = freelancer;

  return (
    <Boxes>
      <TopOptions status={status} setIsActive={setStatus} />
      <ProjectsWrapper>
        <Project isActive={status} />
      </ProjectsWrapper>
    </Boxes>
  );
};

export default Freelancer;

export const Boxes = styled.div`
  display:grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap:16px;
  @media (max-width:991px) {
    grid-template-columns: repeat(1, 1fr);
  }
  @media (max-width:320px) {
    width: 290px;
    margin-left: -14px;
  }
  
`;

export const ProjectsWrapper = styled.div``;
