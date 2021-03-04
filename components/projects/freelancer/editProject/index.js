import { useRouter } from 'next/router';
import { useState } from 'react';
import PropTypes from 'prop-types';


import { Subtitle, HeaderThree, Body } from '@/components/global/Text';
import { ButtonPrimary, ButtonTertiary } from '@/components/global/Button';
import ProgressBar from '@/components/global/ProgressBar';
import MileStoneLabel from '../../Milestone/MileStonelabel';
import HeaderProject from '../../headerProject';
import EditForm from '../../editForm/';

import Plus from '../../../../public/icons/plus.svg';

import {
  ProjectContainer,
  MilestoneText,
  MilestoneDescription,
  ButtonFooterContainer,
  EditFormContainer,
  TotalContainer,
} from './editProjectStyles';
import { Flex } from '../../../../styles/reusableStyles';

const EditProject = (props) => {
  const router = useRouter();
  const [milestones, setMilestones] = useState([
    {
      id: '1',
      price: 20,
      task: 'Color Design',
      date: '8/1/2021',
      status: 'finished',
    },
    {
      id: '2',
      price: 20,
      task: 'Colored Logo Proposal',
      date: '8/1/2021',
      status: 'notify',
    },
    {
      id: '3',
      price: 20,
      task: 'Final Logo',
      date: '8/1/2021',
      status: 'ongoing',
    },
  ]);



  const addMileStone = () => {
    const newMilestone = {
      id: milestones.length - 1,
      price: 0,
      task: '',
      date: '',
      status: '',
    };

    setMilestones([...milestones, newMilestone]);
  };

  return (
    <ProjectContainer>
      <HeaderProject
        mainTitle="Edit Project"
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
      <EditFormContainer>
        {milestones.map((milestone) =>
          milestone.status === 'finished' ? (
            <MileStoneLabel  key={milestone.id} {...milestone} />
          ) : (
            <EditForm  key={milestone.id} {...milestone} />
          )
        )}
      </EditFormContainer>

      <br />

      <TotalContainer>
        <Flex gap="12px">
          <Body>Total</Body>
          <HeaderThree>$50</HeaderThree>
        </Flex>

        <ButtonPrimary onClick={() => addMileStone()}>
          <Flex gap="5px">
            <Plus />
            add new milestone
          </Flex>
        </ButtonPrimary>
      </TotalContainer>

      <ButtonFooterContainer>
        <ButtonTertiary>Cancel</ButtonTertiary>
        <ButtonPrimary>Save Changes</ButtonPrimary>
      </ButtonFooterContainer>
    </ProjectContainer>
  );
};

EditProject.propTypes = {};

export default EditProject;
