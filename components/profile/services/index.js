import { useState } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';
import Modal from '@/components/global/Modal';
import { HeaderThree, PreTitle } from '@/components/global/Text';
import ProfileServicesCard from '../../Cards/ProfileServicesCard/ProfileServicesCard';
import { ButtonPrimary, ButtonIcon } from '@/components/global/Button';
import ServiceContent from '../ServiceContent/';

import PrevGray from '../../../public/icons/prev-gray.svg';
import NextGray from '../../../public/icons/next-gray.svg';
import NextPrimary from '../../../public/icons/next-primary.svg';
import PrevPrimary from '../../../public/icons/prev-primary.svg';

import {
  FlexLine,
  FlexBetween,
  FlexNav,
  Paragraphs,
  ProfileServices,
  BodyContainer,
} from '../ProfileStyles';

const Services = ({ services, user, loginUserID }) => {
  const [modalActive, setModalActive] = useState(false);

  const [selectedService, setSelectedService] = useState(null);

  if (!services || services.length === undefined) {
    <h1>Freelancer has not set any services</h1>;
  }

  const toggleModal = (id) => {
    setSelectedService(id);
    setModalActive(!modalActive);
  };

  const prev = () => {
    const DivServ = document.getElementById('servicesScroll');

    DivServ.scrollBy({
      top: 0,
      left: -(DivServ.offsetWidth / 3 + DivServ.offsetWidth / 3),
      behavior: 'smooth',
    });
  };

  const next = () => {
    const DivServ = document.getElementById('servicesScroll');

    DivServ.scrollBy({
      top: 0,
      left: DivServ.offsetWidth / 3 + DivServ.offsetWidth / 3,
      behavior: 'smooth',
    });
  };

  const scroll = () => {
    const slider = document.getElementById('servicesScroll');
    let isDown = false;
    let startX;
    let scrollLeft;

    slider.addEventListener('mousedown', (e) => {
      isDown = true;
      slider.classList.add('active');
      startX = e.pageX - slider.offsetLeft;
      scrollLeft = slider.scrollLeft;
    });
    slider.addEventListener('mouseleave', () => {
      isDown = false;
    });
    slider.addEventListener('mouseup', () => {
      isDown = false;
    });
    slider.addEventListener('mousemove', (e) => {
      if (!isDown) return;
      e.preventDefault();
      const x = e.pageX - slider.offsetLeft;
      const walk = (x - startX) * 1.6; //scroll-fast
      slider.scrollLeft = scrollLeft - walk;
    });
  };

  const getaQuote = () => { };

  const ModalContent = () => {
    if (!selectedService) {
      return null;
      setModalActive(false);
    }

    const service = services.find((x) => x.id === selectedService);

    return <ServiceContent service={service} user={user} login={loginUserID} close={() => setModalActive(false)} />;
  };

  return (
    <>
      <BodyContainer>
        <FlexBetween>
          <HeaderThree>
            Services ({services ? services.length : '0'})
          </HeaderThree>
          {/* <HeaderThree>Services ({services.length})</HeaderThree> */}
          <FlexNav>
            {services.length !== undefined && services.length > 4 ? (
              <ButtonIcon onClick={prev}>
                <PrevPrimary width={12} height={14} />
              </ButtonIcon>
            ) : (
                <ButtonIcon style={{ cursor: 'not-allowed' }}>
                  <PrevGray width={12} height={14} />
                </ButtonIcon>
              )}
            &emsp;
            {services.length !== undefined && services.length > 4 ? (
              <ButtonIcon onClick={next}>
                <NextPrimary width={12} height={14} />
              </ButtonIcon>
            ) : (
                <ButtonIcon style={{ cursor: 'not-allowed' }}>
                  <NextGray width={12} height={14} />
                </ButtonIcon>
              )}
          </FlexNav>
        </FlexBetween>
      </BodyContainer>

      <ProfileServices id="servicesScroll" onMouseEnter={scroll}>
        {/* {services.map((data, index) => ( */}

        {services.map(({ name, price, id, num, img }, index) => (
          <ProfileServicesCard
            key={index}
            serviceImage={
              img
                ? img
                : 'https://via.placeholder.com/500x500.png?text=Service+Image'
            }
            serviceName={name}
            serviceCategory={'Category Name'}
            serviceFee={'$' + price}
            // serviceCompleted={data.num}
            serviceCompleted={num ? num : 0}
            toggle={() => toggleModal(id)}
          />
        ))}
      </ProfileServices>

      <Modal
        modalActive={modalActive}
        setModalActive={setModalActive}
        content={<ModalContent />}
      />
    </>
  );
};

Services.propTypes = {};

export default Services;
