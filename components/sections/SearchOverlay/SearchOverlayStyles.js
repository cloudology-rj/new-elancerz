import styled from 'styled-components';

export const SearchOverlayContainer = styled.div`
  position: fixed;
  z-index: 200;
  top: 0;
  left: 0;
  bottom: 0;
width:100%;
  background: white;
  height: 100vh;

  @media ${props => props.theme.mediaQueries.laptop}{
        width:30%;
        overflow:hidden;
}
`;

export const HeaderSearch = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
`;

export const CategoriesContainer = styled.div`
  display: grid;
  gap: 20px;
`;

export const SearchContainer = styled.div`
  padding: 24px;
`;
