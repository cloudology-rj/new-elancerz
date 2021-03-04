import { useRouter } from 'next/router';
import { useContext } from 'react';

import { Subtitle, HeaderThree } from '@/components/global/Text';
import { ButtonPrimary } from '@/components/global/Button';
import Modal from '@/components/global/Modal';
import Alert from '@/components/global/Alert';
import ProgressBar from '@/components/global/ProgressBar';
import MileStone from '../../Milestone/MilestoneAccordion';
import HeaderProject from '../../headerProject';

import { RoleContext } from '../../../../context/RoleProvider';

import {
  ProjectContainer,
  MilestoneText,
  MilestoneDescription,
  ButtonFooterContainer,
} from './EmployerStyles';
import { Flex } from '../../../../styles/reusableStyles';

const ViewProject = (props) => {
  const router = useRouter();

  const role = useContext(RoleContext);

  console.log(role);

  // Modal

  return (
    <>
      {/* <FlexMsg> */}
      <Alert
        icon={'/icons/info-gray.svg'}
        size={24}
        msg={
          'A request to edit milestones in this project is currently pending for your approval.'
        }
        title={'REVIEW'}
        action={() => router.push('/project/employer/edit/1')}
      />
      {/* </FlexMsg> */}

      <ProjectContainer>
        <HeaderProject
          mainTitle="View Project"
          projectTitle="Logo Design"
          projectPrice={50}
          date="Dec 12,2020"
          freelancerName="Marilyn Calzoni"
          freelancerPhoto="/images/person.svg"
        />

        <MilestoneDescription>
          <ProgressBar />

          <Flex gap="8px">
            <MilestoneText>Milestones paid</MilestoneText>
            <Subtitle> $30</Subtitle>
          </Flex>
        </MilestoneDescription>

        <MileStone status="finished" date="Dec 28,2020" role={role} />
        <MileStone status="notify" date="Dec 30,2020" role={role} />
        <MileStone status="ongoing" date="Jan 8, 2021" role={role} />

        <br />

        <ButtonFooterContainer>
          <ButtonPrimary
            onClick={() => router.push('/project/employer/edit/1')}
          >
            <Flex gap="5px">
              {/* <EditPrimary /> */}
              Edit milestones
            </Flex>
          </ButtonPrimary>
        </ButtonFooterContainer>
      </ProjectContainer>
    </>
  );
};

ViewProject.propTypes = {};

export default ViewProject;
