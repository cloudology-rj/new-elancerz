import { useState, useRef } from 'react';
import PropTypes from 'prop-types';

import { Bold, HeaderThree, Body } from '@/components/global/Text';
import {
  ButtonPill,
  ButtonSecondary,
  ButtonPrimary,
  ButtonDanger,
  ButtonTertiary,
} from '@/components/global/Button';
import Modal from '@/components/global/Modal';
import SubmitForm from '../submitForm/';
import ViewWork from '../viewWork/index';
import { ModalPayment } from '../modal/index';

import ChevronDown from '../../../public/icons/ChevronDown.svg';
import ChevronUp from '../../../public/icons/ChevronUp.svg';

import {
  AccordionHeader,
  AccordionContainer,
  AccordionDescription,
  Flex,
  ComparePrices,
} from './MilestoneStyles';

import { SwitchIconStatus, SwitchDateStatus, SwitchStatus } from './status';

const MileStone = ({ name, price, status, date, role }) => {
  const description = useRef(null);
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState('0px');

  const [showModal, setShowModal] = useState(false);
  const [showViewWork, setShowViewWork] = useState(false);
  const [showPayment, setShowPayment] = useState(false);

  // const [modalPayment, setModalPayment] = useState(false);

  const toggleAccordion = () => {
    setIsOpen(!isOpen);
    setHeight(!isOpen ? `${description.current.scrollHeight}px` : '0px');
  };

  // const toggleModal = (whatModal) => {
  //   whatModal == 'submitwork' ? setShowModal(!showModal) : setModalPayment(!modalPayment)
  // }

  const switchToPayment = () => {
    console.log('running');
    setShowViewWork(!showViewWork);
    setShowPayment(!showPayment);
  };

  const reset = () => {
    setShowViewWork(false);
    setShowPayment(false);
  };

  return (
    <>
      <AccordionContainer>
        <AccordionHeader>
          <Flex>
            {SwitchIconStatus(status)}
            <HeaderThree>
              {!name ? 'Lorem ipsum dolor' : name}{' '}
              {!price ? '$(10)' : `$${price}`}
            </HeaderThree>
            <ButtonPill>{SwitchStatus(status)}</ButtonPill>
          </Flex>

          <ButtonSecondary onClick={() => toggleAccordion()}>
            {!isOpen ? <ChevronDown /> : <ChevronUp />}
          </ButtonSecondary>
        </AccordionHeader>

        <AccordionDescription height={height} ref={description} open={isOpen}>
          {SwitchDateStatus(
            status,
            date,
            () => setShowModal(true),
            role,
            () => setShowViewWork(true)
          )}
        </AccordionDescription>
      </AccordionContainer>
   
      {role === 'freelancer' ? (
        <Modal
          modalActive={showModal}
          setModalActive={setShowModal}
          content={<SubmitForm />}
        />
      ) : (
        <>
          <Modal
            modalActive={showViewWork}
            setModalActive={setShowViewWork}
            content={<ViewWork switchPage={switchToPayment} />}
          />

          <Modal
            modalActive={showPayment}
            setModalActive={setShowPayment}
            content={<ModalPayment switchPage={reset} />}
          />
        </>
      )}
    </>
  );
};

MileStone.propTypes = {
  status: PropTypes.string.isRequired,
  date: PropTypes.string.isRequired,
  role: PropTypes.string,
};

export default MileStone;
