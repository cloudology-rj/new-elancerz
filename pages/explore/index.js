import styled from 'styled-components';

import Container from '@/components/global/Container';

import Layout from '../../components/Base/Layout/Layout';
import ExploreCategories from '../../components/sections/ExploreCategories/ExploreCategories';

const ExploreContainer = styled.main`
  background-color: ${(props) => props.theme.colors.turqoise};
`;

const Explore = (props) => {
  return (
    <ExploreContainer>
      <Layout>
        <Container>
          <ExploreCategories />
        </Container>
      </Layout>
    </ExploreContainer>
  );
};

export default Explore;
