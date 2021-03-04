import styled from 'styled-components';

import Calendar from '../../../public/icons/calendar-white.svg';
import Plus from '../../../public/icons/plus.svg';
import Cube from '../../../public/icons/cube.svg';
import Image from '../../../public/icons/image.svg';
import Submit from '../../../public/icons/submit.svg';

import mixins from '../../../styles/mixins';

export const ConversationBar = styled.div`
  position: fixed;
  bottom: 0;
  width: 100%;
  background: white;
  padding: 0.7rem 2rem;

  ${mixins.flex};
  gap: 1rem;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    width: 75%;
  }
`;

export const SearchbarContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 100%;
`;

export const CalendarIcon = styled(Calendar)`
  & path {
    stroke: #8c91a1;
  }
  display: none;
  @media ${(props) => props.theme.mediaQueries.tablet} {
    display: block;
  }
`;

export const SubmitIcon = styled(Submit)`
  & path {
    stroke: ${(props) => props.theme.colors.accent};
  }
  transition: 0.5s;

  & :hover {
    & path {
      stroke: ${(props) => props.theme.colors.primaryBrand};
    }
    -o-transform: rotate(10deg);
    -ms-transform: rotate(10deg);
    -moz-transform: rotate(10deg);
    -webkit-transform: rotate(10deg);
    transform: rotate(10deg);
  }
`;

export const PlusIcon = styled(Plus)`
  & path {
    stroke: #8c91a1;
  }
  display: block;
  @media ${(props) => props.theme.mediaQueries.tablet} {
    display: none;
  }
`;

export const CubeIcon = styled(Cube)`
  & path {
    stroke: #8c91a1;
  }
  display: none;
  @media ${(props) => props.theme.mediaQueries.tablet} {
    display: block;
  }
`;

export const ImageIcon = styled(Image)`
  & path {
    stroke: #8c91a1;
  }
  display: none;
  @media ${(props) => props.theme.mediaQueries.tablet} {
    display: block;
  }
`;
