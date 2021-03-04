import Image from 'next/image';

import PropTypes from 'prop-types';

import { PreTitle, Bold } from '@/components/global/Text';
import { CardContainer, FlexBottom, CardImage, FlexContainer, GrabContainer } from './ProfileServicesCardStyles';


const ProfileServicesCard = ({ serviceImage, serviceName, serviceFee, serviceCompleted, serviceCategory, toggle }) => {
  return (
    <GrabContainer id="grabDiv">
      <CardContainer>
        <CardImage
          src={serviceImage}
          width="240px"
          height="210px"
        />
        <FlexContainer>
          <Bold>{serviceName}</Bold>
          <Bold>{serviceFee}</Bold>
        </FlexContainer>
        <FlexContainer>
          <PreTitle>{serviceCategory}</PreTitle>
        </FlexContainer>
        <FlexBottom onClick={toggle}>
          <PreTitle>{serviceCompleted}  Services Completed</PreTitle>
        </FlexBottom>
        <br />
      </CardContainer>
    </GrabContainer>

  );
};

ProfileServicesCard.propTypes = {};

export default ProfileServicesCard;
