import styled from 'styled-components';
import { Body, HeaderThree } from '@/components/global/Text';
import mixins from '../../../styles/mixins';

import ArrowBack from '../../../public/icons/ArrowPointLeft.svg';

export const ArrowLeft = styled(ArrowBack)`
  & path {
    stroke: #8c91a1;
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
  background: #eefbfb;
`;

export const Name = styled(HeaderThree)`
  font-size: ${(props) => props.theme.fontSizes.s5};
  border-right: 1px solid #eceff4;
  padding-right:8px;


  @media ${(props) => props.theme.mediaQueries.tablet} {
    font-size: ${(props) => props.theme.fontSizes.s3};
  }
`;

export const Paragraphs = styled.p`
  font-family: 'Open sans', sans-serif;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.s4};
  color: ${(props) => props.theme.colors.subtleText};
  margin-bottom: 10px;
  line-height: 22.4px;
  text-align: center;
  text-justify: inter-word;
`;

export const Job = styled(Body)`
  color: ${(props) => props.theme.colors.subtleText};
  font-size: ${(props) => props.theme.fontSizes.s5};
  @media ${(props) => props.theme.mediaQueries.laptop} {
    font-size: ${(props) => props.theme.fontSizes.s4};
  }
  text-transform: capitalize;
`;
export const HeaderContainer = styled.div`
  // position: sticky;
  top: -8px;
  // z-index: 2;
  background: ${(props) => props.theme.colors.cloud};

  ${mixins.flexBetween};
  padding: 24px 15px;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    padding: 24px 32px;
  }
`;

export const Status = styled.div`
  border-radius: 50%;
  width: 8px;
  height: 8px;
  background: ${(props) => props.theme.colors.accent};
`;
