import styled from 'styled-components';
import mixins from '../../../../styles/mixins';

import { PreTitle } from '@/components/global/Text';

export const ProjectContainer = styled.div`
  padding: 24px;
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
  justify-content: center;
  width: 100%;
  flex-direction: column-reverse;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    justify-content: flex-end;
    flex-direction: row;
  }
`;

export const EditFormContainer = styled.div`
  @media ${(props) => props.theme.mediaQueries.laptop} {
    padding: 0 160px;
  }
`;

export const TotalContainer = styled.div`
  ${mixins.flexCenter};
  flex-direction: column;
  margin: 32px 0;

  & button {
    margin-top: 20px;
  }
`;
