import styled from 'styled-components';
import { Body, HeaderThree } from '@/components/global/Text';
import mixins from '../../../styles/mixins';


export const FlexForm = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
`;


export const FlexIconR = styled.div`
  display: flex;
  width: 100%;
  padding: 12px;
  flex-direction: row-reverse;
`;



export const Flex50L = styled.div`
  display: flex;  
  width: 100%;
  align-items: center;
  justify-content: center;
  padding: 12px 18px 12px 0;
  min-width: 200px;
`;


export const Flex50R = styled.div`
  display: flex;  
  width: auto;
  align-items: center;
  justify-content: center;
  padding: 12px 0;
`;


export const FlexTotal = styled.div`
  display: flex;  
  margin-right:1em;
  align-items: baseline;
  justify-content:left;
`;

export const HeaderContainer = styled.div`
  position: sticky;
  top: -8px;
  z-index: 2;
  background: ${(props) => props.theme.colors.cloud};

  ${mixins.flexBetween};
  padding: 0 15px 18px 15px;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    padding: 0 32px 18px 32px;
  }

`;

export const Paragraphs = styled.p`
font-family: 'Open sans', sans-serif;
font-weight: 600;
font-style: 'normal';
font-size: ${(props) => props.theme.fontSizes.s5};
color: ${(props) => props.theme.colors.subtleText};
margin-bottom .5em;
line-height: 140%;
text-align: justify;
text-justify: inter-word;
`;

export const FlexRow = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
  justify-content: space-between;
`;
