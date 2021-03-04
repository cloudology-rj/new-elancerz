import { useState, useContext } from 'react';
import { useRouter } from 'next/router';
import PropTypes from 'prop-types';

import { Subtitle, HeaderThree } from '@/components/global/Text';
import TextArea from '@/components/global/TextArea';
import {
  ButtonPrimary,
  ButtonDanger,
  ButtonTransparent,
} from '@/components/global/Button';
import Modal from '@/components/global/Modal';

// import Alert from '@/components/global/Alert';
import ProgressBar from '@/components/global/ProgressBar';
import MileStone from '../../Milestone/MilestoneAccordion';
import MileStoneReview from '../../Milestone/MileStoneEmployer';

import HeaderProject from '../../headerProject';

import { RoleContext } from '../../../../context/RoleProvider';

import {
  ProjectContainer,
  MilestoneText,
  MilestoneDescription,
  ButtonFooterContainer,
  FlexLine,
  Paragraphs,
  Label,
} from './EmployerStyles';
import { Flex } from '../../../../styles/reusableStyles';

const ViewProject = ({ id }) => {
  const router = useRouter();

  const role = useContext(RoleContext);

  // Modal

  const [modalDangerActive, setModalDangerActive] = useState(false);
  const [modalAcceptActive, setModalAcceptActive] = useState(false);

  const toggleModalDanger = (id) => {
    setModalDangerActive(!modalDangerActive);
  };

  const toggleModalAccept = (id) => {
    setModalAcceptActive(!modalAcceptActive);
  };

  const ModalContentDanger = () => {
    return (
      <>
        <HeaderThree className="card-header">Reject edit request</HeaderThree>
        <br />
        <FlexLine />
        <br />
        <br />
        <Paragraphs>
          Are you sure you want to reject changes to this project?
        </Paragraphs>
        <br />
        <br />
        <Label>Message</Label>
        <TextArea
          placeholder={
            'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh dui, mattis odio sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh dui, mattis odio sit.'
          }
        ></TextArea>

        <br />
        <br />
        <ButtonDanger onClick={() => router.push('/project/employer/view/1')}>
          REJECT
        </ButtonDanger>
        <ButtonTransparent onClick={toggleModalDanger}>
          CANCEL
        </ButtonTransparent>
      </>
    );
  };

  const ModalContentAccept = () => {
    return (
      <>
        <HeaderThree className="card-header">Accept edit request</HeaderThree>
        <br />
        <FlexLine />
        <br />
        <Paragraphs>
          Total amount to be paid ($550) will be more than the initial budget
          ($450)
        </Paragraphs>
        <br />
        <br />
        <Paragraphs>
          Are you sure you want to save changes to this project?
        </Paragraphs>
        <br />
        <br />
        <ButtonPrimary onClick={() => router.push('/project/employer/view/1')}>
          ACCEPT
        </ButtonPrimary>
        <ButtonTransparent onClick={toggleModalAccept}>
          CANCEL
        </ButtonTransparent>
      </>
    );
  };

  return (
    <>
      <ProjectContainer>
        <HeaderProject
          mainTitle="Review Edit Request"
          projectTitle="Back-end Development"
          projectPrice={550}
          date="Started Sep 9, 2020"
          freelancerName="Giana Schleifer"
          freelancerPhoto="/images/person.svg"
        />

        <MilestoneDescription>
          <ProgressBar />

          <Flex gap="8px">
            <MilestoneText>Milestones paid</MilestoneText>
            <Subtitle> $350</Subtitle>
          </Flex>
        </MilestoneDescription>

        {mileStoneData.map((milestone) =>
          milestone.newUpdate ? (
            <MileStoneReview key={milestone.id} {...milestone} />
          ) : (
              <MileStone key={milestone.id} {...milestone} role={role} />
            )
        )}

        <br />

        <ButtonFooterContainer>
          <ButtonDanger onClick={toggleModalDanger}>
            <Flex gap="5px">
              {/* <EditPrimary /> */}
              REJECT CHANGES
            </Flex>
          </ButtonDanger>
          &emsp;
          <ButtonPrimary onClick={toggleModalAccept}>
            <Flex gap="5px">
              {/* <EditPrimary /> */}
              Accept Changes
            </Flex>
          </ButtonPrimary>
        </ButtonFooterContainer>
      </ProjectContainer>

      <Modal
        modalActive={modalAcceptActive}
        setModalActive={setModalAcceptActive}
        content={<ModalContentAccept />}
      />
      <Modal
        modalActive={modalDangerActive}
        setModalActive={setModalDangerActive}
        content={<ModalContentDanger />}
      />
    </>
  );
};

ViewProject.propTypes = {};

export default ViewProject;

const mileStoneData = [
  {
    name: 'Color palette',
    price: 30,
    id: 1,
    status: 'finished',
    date: 'Dec 8,2020',
  },
  {
    name: 'Logo draft',
    id: 2,
    status: 'notify',
    newUpdate: {
      previousMileStone: {
        price: 50,
        date: 'jan 5, 2021',
      },
      updatedMileStone: {
        price: 75,
        date: 'Jan 7,2021',
      },
    },
  },
  {
    price: 100,
    name: 'Final Logo draft',
    id: 3,
    status: 'notify',
    date: 'jan 8,2021',
  },
];
