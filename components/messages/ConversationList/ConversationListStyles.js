import styled, { css } from 'styled-components';
import { PreTitle } from '@/components/global/Text';

export const UnreadTitle = styled(PreTitle)`
  margin-top: 16px;
  margin-bottom: 32px;
`;

export const ConversationContainer = styled.div`
  @media ${(props) => props.theme.mediaQueries.laptop} {
    margin-bottom: 8rem;
  }

  .people-selected{
    backround: ${(props) => props.theme.colors.turqoise};
  }


`;
