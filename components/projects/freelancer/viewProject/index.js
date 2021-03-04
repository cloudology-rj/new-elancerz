import { useRouter } from 'next/router';
import PropTypes from 'prop-types';
import { useContext } from 'react';



import { Subtitle } from '@/components/global/Text';
import { ButtonPrimary } from '@/components/global/Button';

import ProgressBar from '@/components/global/ProgressBar';


import MileStone from '../../Milestone/MilestoneAccordion';
import HeaderProject from '../../headerProject';

import EditPrimary from '../../../../public/icons/edit-primary.svg';
import { RoleContext } from '../../../../context/RoleProvider';

import {
  ProjectContainer,
  MilestoneText,
  MilestoneDescription,
  ButtonFooterContainer,
} from './viewProjectStyles';
import { Flex } from '../../../../styles/reusableStyles';

const ViewProject = (props) => {
  const router = useRouter();

  const role = useContext(RoleContext);

  return (
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
        <ButtonPrimary onClick={() => router.push('/projects/freelancer/edit/1')}>
          <Flex gap="5px">
            <EditPrimary />
            Edit milestones
          </Flex>
        </ButtonPrimary>
      </ButtonFooterContainer>
    </ProjectContainer>
  );
};

ViewProject.propTypes = {};

export default ViewProject;
