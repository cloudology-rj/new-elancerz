import styled, { css } from 'styled-components';



import {

  ButtonOpacity,
} from '@/components/global/Button';


export const FilterOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgb(22 28 51 / 84%);
  opacity: 0;
  pointer-events: none;

  ${(props) =>
    props.show &&
    css`
      position: fixed;
      width: 100%;
      height: 100%;
      top: 0;
      left: 0;
      background-color: rgb(22 28 51 / 84%);
      opacity: 1;
      pointer-events: unset;
      display: grid;
      place-items: center;
      overflow: hidden;
      z-index: 100;
    `}
`;



export const FilterContainer = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;

  transition: 0.5s width;
  right: 0;
  height: 100vh;
  width: 0;
  padding: 32px;
  z-index: 1000;
  background: #fff;

  display: grid;
  grid-column-gap: 12px;

  ${(props) =>
    !props.show
      ? css`
          opacity: 0;
          visibility: hidden;
        `
      : css`
          opacity: 1;
          visibility: visible;

          @media ${(props) => props.theme.mediaQueries.mobile} {
            width: 100%;
          }

          @media ${(props) => props.theme.mediaQueries.laptop} {
            width: 40%;
          }
          @media ${(props) => props.theme.mediaQueries.largeScreen} {
            width: 25%;
          }
        `}

  ${(props) => props.show && css``}
`;

export const FilterHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const FlexCenter = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  column-gap: 16px;
`;


export const FilterButton = styled(ButtonOpacity)`
@media ${props => props.theme.mediaQueries.tablet}{
  display:none;
}
`