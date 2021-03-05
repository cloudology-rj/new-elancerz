import PropTypes from 'prop-types';

import { HeaderThree, Bold, PreTitle } from '@/components/global/Text';

import {
  CardContainer,
  CardImage,
  CardContent,
  FlexBetween,
  FlexCenter,
  CardDescription,
  CardImageContainer,
} from './FreelancerCardLargeStyles';

import YellowStar from '../../../public/icons/yellow-star.svg';
import WhiteStar from '../../../public/icons/white-star.svg';

import { Flex } from '../../../styles/reusableStyles';

const FreelancerCardLarge = ({
  redirect,
  first_name,
  last_name,
  title,
  address,
  about,
  avatar,
  ...props
}) => {
  console.log(props);

  return (
    <CardContainer onClick={() => redirect()}>
      <CardImageContainer>
        <CardImage
          src={avatar ? avatar : `/images/profile.png`}
          width={160}
          height={160}
          alt="Photo of a person"
        />
      </CardImageContainer>

      <CardContent>
        <FlexBetween>
          <div>
            <HeaderThree>
              {first_name ? first_name : 'First Name'}{' '}
              {last_name ? last_name : 'Last Name'}
            </HeaderThree>
            <Bold>{title ? title : 'Job title'}</Bold>
            <PreTitle>{!address ? 'No Address':  address}</PreTitle>
          </div>

          <Flex gap="8px">
            <Flex gap="8px">
              <WhiteStar width={40} height={38} />
              <WhiteStar width={40} height={38} />
              <WhiteStar width={40} height={38} />
              <WhiteStar width={40} height={38} />
              <WhiteStar width={40} height={38} />
            </Flex>
            <PreTitle>4.32</PreTitle>
          </Flex>
        </FlexBetween>
        <div>
          <CardDescription>
            {!about ? 'Freelancer has not yet specified bio' : about}
          </CardDescription>
        </div>
      </CardContent>
    </CardContainer>
  );
};

FreelancerCardLarge.propTypes = {};

export default FreelancerCardLarge;
