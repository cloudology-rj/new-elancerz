import styled from 'styled-components';

import { ButtonPrimary } from '@/components/global/Button';

export const FlexBaselineMobile = styled(ButtonPrimary)`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  @media ${(props) => props.theme.mediaQueries.laptop} {
    width: 20%;
  }
`;
