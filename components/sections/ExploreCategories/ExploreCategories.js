import PropTypes from 'prop-types';
import { useContext } from 'react';
import { ButtonPrimary } from '@/components/global/Button';
import Container from '@/components/global/Button';
import { HeaderThree, HeaderTwo } from '@/components/global/Text';

import CategoryCard from '../../Cards/CategoryCard/CategoryCard';

import { CategoriesContainer, ExploreHeader } from './ExploreCategoriesStyles';
import { Flex } from '../../../styles/reusableStyles';
import { IsMobileContext } from '../../../context/IsMobile';

import ArrowLeft from '../../../public/icons/ArrowPointLeftWhite.svg';

import categories from './categories';

// List Out the Categories on  /explore endpoint

const ExploreCategories = (props) => {
  const [isMobile] = useContext(IsMobileContext);

  return (
    <>
      <ExploreHeader>
        {isMobile ? (
          <>
            {' '}
            <ButtonPrimary>Back</ButtonPrimary>
            <HeaderTwo>Explore</HeaderTwo>{' '}
          </>
        ) : (
          <>
            {' '}
            <HeaderTwo>Explore</HeaderTwo>
            <ButtonPrimary>
              <Flex gap="5px">
                <ArrowLeft />
                Back to home
              </Flex>
            </ButtonPrimary>{' '}
          </>
        )}
      </ExploreHeader>
      <div>
        <HeaderThree>Select a Category</HeaderThree>
        <CategoriesContainer>
          {categories.map((category, i) =>
            i < 3 ? (
              <CategoryCard key={i} size="big" name={category} />
            ) : (
              <CategoryCard  key={i}size="small" name={category} />
            )
          )}
        </CategoriesContainer>
      </div>
    </>
  );
};

ExploreCategories.propTypes = {};

export default ExploreCategories;
