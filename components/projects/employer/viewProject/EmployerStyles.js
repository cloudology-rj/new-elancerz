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


export const FlexMsg = styled.div`
  display: flex;
  flex-direction: row;
  margin-top: 85px;
  
  @media ${(props) => props.theme.mediaQueries.tablet} {
    margin-top: 96px;
  }
`