import styled from 'styled-components';
import mixins from '../../../../styles/mixins';

import { PreTitle } from '@/components/global/Text';

export const ProjectContainer = styled.div`
  padding: 24px;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    padding: 24px 114.56px 64px 114.56px;
  }

`;

export const MilestoneDescription = styled.div`
  @media ${(props) => props.theme.mediaQueries.laptop} {
    ${mixins.flexBetween}
  }
`;

export const MilestoneText = styled(PreTitle)`
  color: ${(props) => props.theme.colors.text};
`;

export const ButtonFooterContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  width: 100%;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    justify-content: flex-end;
  }
`;


export const FlexLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: static;
  width: 100%;
  height: 1px;
  background: #EEFBFB;
`


export const Paragraphs = styled.p`
  font-family: 'Open sans', sans-serif;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.s4};
  color: ${(props) => props.theme.colors.subtleText};
  margin-bottom: 10px;
  line-height: 22.4px;
  text-align: justify;
  text-justify: inter-word;
`;


export const Bolder = styled.p`
  font-family: 'Open sans', sans-serif;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.s4};
  color: ${(props) => props.theme.colors.darker};
  margin-bottom: 10px;
  line-height: 22.4px;
  text-align: justify;
  text-justify: inter-word;
`;



export const Label = styled.p`
/* Small */

font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 14px;
line-height: 140%;
/* identical to box height, or 20px */


/* Subtle Text */

color: #8C91A2;
margin-bottom: .5em;
`;
