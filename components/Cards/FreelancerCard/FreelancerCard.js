import PropTypes from 'prop-types';

import { PreTitle } from '@/components/global/Text';
import {
  CardContainer,
  CardImage,
  Name,
  FlexContainer,
  ImageContainer,
  ImageOverlay,
} from './FreelancerCardStyles';

import YellowStar from '../../../public/icons/yellow-star.svg';
import WhiteStar from '../../../public/icons/white-star.svg';

import { Flex } from '../../../styles/reusableStyles';

const FreelancerCard = ({
  fullWidth,
  first_name,
  last_name,
  avatar,
  address,
  redirect,
}) => {
  return (
    <CardContainer fullWidth={fullWidth} onClick={() => redirect()}>
      <ImageContainer>
        <CardImage
          src={avatar ? avatar : `/images/profile.png`}
          width="127px"
          height="127px"
        />
        <ImageOverlay />
      </ImageContainer>
      <Name>
        {first_name} {last_name}
      </Name>
      <PreTitle>{address ? address : 'No Address'}</PreTitle>
      <Flex gap="8px">
        <Flex gap="5px">
          <WhiteStar width={24} height={24} />
          <WhiteStar width={24} height={24} />
          <WhiteStar width={24} height={24} />
          <WhiteStar width={24} height={24} />
          <WhiteStar width={24} height={24} />
        </Flex>
        <PreTitle>0</PreTitle>
      </Flex>
    </CardContainer>
  );
};

FreelancerCard.propTypes = {};

export default FreelancerCard;
