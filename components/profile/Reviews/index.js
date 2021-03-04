import React from 'react';
import PropTypes from 'prop-types';

import { HeaderThree } from '@/components/global/Text';

import ReviewCard from '../../Cards/ReviewCard/ReviewCard';

import { FlexBaseline, FlexBaselineMobile } from './ReviewsStyles';

import { Flex } from '../../../styles/reusableStyles';

const Reviews = ({ list }) => {
  return (
    <>
      <HeaderThree>Reviews (7)</HeaderThree>
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />
      <ReviewCard />

      <Flex align="center">
        <FlexBaselineMobile>MORE</FlexBaselineMobile>
      </Flex>
    </>
  );
};

Reviews.propTypes = {
  list: PropTypes.array,
};

export default Reviews;
