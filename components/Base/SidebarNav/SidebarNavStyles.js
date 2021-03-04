import styled, { css } from 'styled-components';
import mixins from '../../../styles/mixins';
import { HeaderThree } from '@/components/global/Text';

export const SidebarContainer = styled.div`
  height: 100%;
  width: 100%;
  position: fixed;
  z-index: 1000;
  top: 0;
  left: 0;
  bottom: 0;

  background-color: ${(props) => props.theme.colors.white};
  transition: 0.2s;

  width: 0;
  overflow-x: hidden;

  ${(props) =>
    props.toggle &&
    css`
      width: 100%;

      @media ${(props) => props.theme.mediaQueries.laptop} {
        width: 30%;

        overflow-y: scroll;
      }
    `}

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const SidebarOverlay = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 0;
  left: 0;
  background-color: rgb(22 28 51 / 84%);
  opacity: 0;
  pointer-events: none;

  ${(props) =>
    props.toggle &&
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

export const SidebarUl = styled.ul`
  margin-top: 50px;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    align-items: flex-end;
    margin-right: 10px;
  }

  & > * {
    margin-bottom: 32px;
  }
`;

export const SidebarLink = styled(HeaderThree)`
  position: relative;
  transition: 0.3s;

  &::after {
    position: absolute;
    content: '';
    top: 100%;
    right: 0;
    width: 100%;
    background: red;
    height: 3px;
    background: ${(props) => props.theme.colors.primaryBrand};
    transform: scaleX(0);
    transform-origin: right;
    transition: transform 0.5s;
  }

  &:hover::after {
    transform: scaleX(1);
    transform-origin: left;
  }
`;

export const SidebarFlex = styled.div`
  display: flex;
  flex-direction: column;
  min-height: 90vh;
  padding: 24px;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    align-items: flex-end;
  }
`;

export const SidebarHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 23px;
`;
export const SidebarFooter = styled.footer`
  text-align: center;
  width: 100%;
  padding-top: 20px;

  & > * {
    margin: 0 auto;
  }
  button {
    margin-bottom: 15px;
  }

  @media ${(props) => props.theme.mediaQueries.tablet} {
    text-align: right;
  }
`;

export const SidebarContent = styled.div`
  flex-grow: 1;
`;

export const SidebarButton = styled.button`
  border: none;
  background: none;
`;

export const SidebarButtons = styled.div`
  ${mixins.flex}
  flex-direction:column;
  gap: 7px;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    align-items: flex-end;
  }
`;
