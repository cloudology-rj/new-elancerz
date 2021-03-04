import styled from 'styled-components';

export const CategoriesListContainer = styled.div`
  margin-top: 32px;

  h5 {
    margin-bottom: 12px;
  }
`;

export const CategoriesList = styled.div`
  display: flex;
  overflow-x: auto;
  align-items: center;
  gap: 10px;

  scroll-snap-type: x;

  button {
    scroll-snap-align: start;
    scroll-snap-stop: always;
  }

  @media ${(props) => props.theme.mediaQueries.tablet} {
    flex-wrap: wrap;
  }
`;
