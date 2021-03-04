import Router from 'next/router';

import { HeaderThree, PreTitle } from '@/components/global/Text';

import { ButtonPill } from '@/components/global/Button';

import { categories } from '../data';

import {CategoriesListContainer, CategoriesList} from './CategoriesListStyles';

const Categories = (props) => {
  return (
    <CategoriesListContainer>
      <PreTitle>Top Categories</PreTitle>
      <CategoriesList>
        {categories.map((category) => (
          <ButtonPill onClick={() => Router.push(`/search/${category}`)}>
            {category}
          </ButtonPill>
        ))}
      </CategoriesList>
    </CategoriesListContainer>
  );
};

Categories.propTypes = {};

export default Categories;
