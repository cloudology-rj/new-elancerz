import { useRouter } from 'next/router';
import { useState } from 'react';
import styled from 'styled-components';
import { useInfiniteQuery } from 'react-query';

import { HeaderTwo } from '@/components/global/Text';

import Layout from '../../components/Base/Layout/Layout';

import SearchView from '../../components/search/SearchView/SearchView';

import WithLoadingAndError from '../../HOC/WithLoadingAndError';

import { optionsList } from '../../components/search/data';

import { fetchFreelancers } from '../../api/queries';

const SearchViewWithHOC = WithLoadingAndError(SearchView);

const SearchPage = (props) => {
  const router = useRouter();

  const { query } = router.query;

  const [options, setOptions] = useState(optionsList);
  const [selected, setSelected] = useState('');

  const queryIsAvailable = query !== undefined;

  const { data, error, isLoading } = useInfiniteQuery(
    `freelancers-${query}`,
    async (key, page) => await fetchFreelancers(query, page),
    { enabled: queryIsAvailable }
  );

  return (
    <CategoryContainer>
      <Layout>
        <SearchViewWithHOC
          error={error}
          errorComponent={
            <NotFound>
              <HeaderTwo>
                Sorry, something went wrong with your requess
              </HeaderTwo>
            </NotFound>
          }
          isLoading={isLoading}
          setSelected={setSelected}
          setOptions={setOptions}
          options={options}
          data={data}
          query={query}
        />
      </Layout>
    </CategoryContainer>
  );
};

export default SearchPage;

const CategoryContainer = styled.div`
  background: ${(props) => props.theme.colors.accent};
  position: relative;
  z-index: 50;
`;

export const NotFound = styled.div`
  width: 100%;
  height: 100%;
  display: grid;
  place-items: center;
`;
