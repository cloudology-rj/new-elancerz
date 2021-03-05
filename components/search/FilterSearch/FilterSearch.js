import { useState, useEffect,useRef } from 'react';
import Image from 'next/image';
import PropTypes from 'prop-types';

import { HeaderThree, PreTitle } from '@/components/global/Text';
import Input from '@/components/global/Input';
import {
  ButtonTertiary,
  ButtonPrimary,
  ButtonOpacity,
} from '@/components/global/Button';

import CategoryListToggle from '../../sections/CategoryList/CategoryListToggle';

import data from './data';

import useOutsideClick from '../../../hooks/useOutsideClick'

import {
  FilterContainer,
  FilterHeader,
  FlexContainer,
  FlexCenter,
  FilterOverlay,
  FilterButton,
} from './FilterSearchStyles';

import Filter from '../../../public/icons/Filter.svg';
import ArrowPointLeft from '../../../public/icons/ArrowPointLeft.svg';

const FilterSearch = ({ show, onToggleFilter,onHide }) => {
  const [filters, setFilters] = useState(data);
  const filter = useRef(null)



useOutsideClick(filter,onHide)


  //toggle all selected to be false
  const resetSelection = (data) =>
    data.map((item) => ({ ...item, selected: false }));

  const resetPresets = () => {
    const { locations, categories } = filters;

    const newLocations = resetSelection(locations);
    const newCategories = resetSelection(categories);

    setFilters({
      ...filters,
      locations: newLocations,
      categories: newCategories,
    });
  };

  const toggleSelected = (id, title) => {
    // get the data object
    const target = filters[title];

    target.filter((item) =>
      item.id === id ? (item.selected = !item.selected) : item
    );

    setFilters({ ...filters, [title]: target });
  };

  const { locations, categories } = filters;
  return (
    <FilterOverlay  show={show}>
      <FilterContainer ref={filter} show={show}>
        <FilterHeader>
          <FlexContainer>
            <Filter alt="Filter Icon" />
            <HeaderThree>Filters</HeaderThree>
          </FlexContainer>
          <FilterButton onClick={() => onToggleFilter(false)}>
            <ArrowPointLeft width={24} height={24} />
          </FilterButton>
        </FilterHeader>

        <CategoryListToggle
          title="categories"
          list={categories}
          onToggleSelected={toggleSelected}
        />

        <CategoryListToggle
          title="locations"
          list={locations}
          onToggleSelected={toggleSelected}
        />

        <div>
          <PreTitle>Price</PreTitle>
          <FlexContainer>
            <Input type="number" placeholder="min" />
            <span>-</span>
            <Input type="number" placeholder="max" />
          </FlexContainer>
        </div>

        <FlexCenter>
          <ButtonTertiary onClick={() => resetPresets()}>Reset</ButtonTertiary>
          <ButtonPrimary>Apply filters</ButtonPrimary>
        </FlexCenter>
      </FilterContainer>
    </FilterOverlay>
  );
};

FilterSearch.propTypes = {};

export default FilterSearch;
