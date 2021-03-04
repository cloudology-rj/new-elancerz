import Image from 'next/image';
import PropTypes from 'prop-types';

import { ButtonIcon } from '@/components/global/Button';
import Input from '@/components/global/Input';

import Navbar from '../../Base/Navbar/Navbar';
import CategoryList from '../CategoryList/CategoryList';

import {
  SearchOverlayContainer,
  HeaderSearch,
  CategoriesContainer,
  SearchContainer,
} from './SearchOverlayStyles';

const SearchOverlay = ({ show, onToggleSearch }) => {
  return (
    <SearchOverlayContainer show={show}>
      <Navbar />

      <SearchContainer>
        <HeaderSearch>
          <ButtonIcon onClick={() => onToggleSearch(false)}>
            <Image src="/icons/arrowPointLeft.svg" width={24} height={24} />
          </ButtonIcon>
          <Input type="text" placeholder='Try "Logo Design" ' />
        </HeaderSearch>

        <CategoriesContainer>
          <CategoryList title="Search History" searchHistory />
          <CategoryList title="Categories" />
        </CategoriesContainer>
      </SearchContainer>
    </SearchOverlayContainer>
  );
};

export default SearchOverlay;
