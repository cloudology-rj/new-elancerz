import { useContext } from 'react';
import styled from 'styled-components';

import TopOptions from 'components/projects/TopOptions';
import Eproject from 'components/projects/employer/project';

import { StatusContext } from '../../context/StatusProvider';

const Employeer = () => {
  const { employer } = useContext(StatusContext);
  const [status, setStatus] = employer;

  return (
    <Boxes>
      <TopOptions status={status} setIsActive={setStatus} />
      <ProjectsWrapper>
        <Eproject isActive={status} />
      </ProjectsWrapper>
    </Boxes>
  );
};

export default Employeer;

export const Boxes = styled.div`
  display:grid;
  grid-template-columns: repeat(1, 1fr);
  grid-column-gap:16px;
  @media (max-width:991px) {
      grid-template-columns: repeat(1, 1fr);
  }
`;
export const ProjectsWrapper = styled.div``;
