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
  justify-content: flex-start;
  width: 100%;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    justify-content: flex-end;
  }
`;
