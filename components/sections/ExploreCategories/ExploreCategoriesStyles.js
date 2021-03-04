import styled from 'styled-components';

export const CategoriesContainer = styled.div`
  margin-top: 20px;
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content:center;
  gap: 20px;
  margin: 15px 0;
`;

export const ExploreHeader = styled.header`
  display: flex;
  align-items: center;
  margin-bottom: 15px;
  gap: 7px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    justify-content: space-between;
  }
`;
