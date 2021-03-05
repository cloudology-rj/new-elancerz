import styled from 'styled-components';
import { useState, useEffect } from 'react';

import { useAuth } from '../../../context/AuthProvider';

import { HeaderThree, HeaderTwo } from '@/components/global/Text';
import Input from '@/components/global/Input';
import Dropdown from '@/components/global/Dropdown';
import Container from '@/components/global/Container';

import FilterSearch from '../FilterSearch/FilterSearch';
import ViewFreelancers from '../viewFreelancers';
import Categories from '../Categories/index';

import { Flex } from '../../../styles/reusableStyles';

import GridIView from '../../../public/icons/gridView.svg';
import ListView from '../../../public/icons/listView.svg';
import Filter from '../../../public/icons/Filter.svg';

import {
  MobileInput,
  SearchQueryTitle,
  FlexAlignCenter,
  ButtonFilter,
} from './SearchViewStyles';

const SearchPage = ({ setSelected, setOptions, options, query, data }) => {
  const [toggleFilter, setToggleFilter] = useState(false);
  const [view, setView] = useState(false);
  const { user } = useAuth();
  const [freelancer, setFreelancers] = useState(data ? data.pages[0].data : []);

  useEffect(() => {
    if (user && freelancer) {
      const sortedFreelancers = [...freelancer];

      const newFreelancers = sortedFreelancers.filter(
        (freelancer) => freelancer.id !== user.id
      );

      setFreelancers(newFreelancers);
    }
  }, [data, user]);

  if (!freelancer || freelancer.length === 0) {
    return (
      <NotFound>
        <HeaderTwo>No Freelancers found, please try again</HeaderTwo>
      </NotFound>
    );
  }

  return (
    <>
      <Container>
        <MobileInput>
          <Input placeholder="Logo Design" transparent />
        </MobileInput>
        <Categories />

        <div>
          <SearchQueryTitle>Search "{query}"</SearchQueryTitle>
          <FlexAlignCenter>
            <Dropdown
              title="Filter by"
              options={options}
              onSetOptions={setOptions}
              onSetSelected={setSelected}
            />

            <Flex gap="7px">
              <Filter onClick={() => setToggleFilter(!toggleFilter)} />

              <ButtonFilter onClick={() => setView(!view)}>
                {view ? <GridIView /> : <ListView />}
              </ButtonFilter>
            </Flex>
          </FlexAlignCenter>

          <ViewFreelancers view={view} freelancers={freelancer} />
        </div>
      </Container>

//       <FilterSearch show={toggleFilter} onToggleFilter={setToggleFilter} onHide={() =>  setToggleFilter(!toggleFilter)} />
      <FilterSearch show={toggleFilter} onToggleFilter={setToggleFilter} onHide={() => setToggleFilter(false)} />
    </>
  );
};

export default SearchPage;

const NotFound = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;
