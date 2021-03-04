import styled, { css } from 'styled-components';
import mixins from './mixins';

export const Flex = styled.div`
  ${mixins.flex};
  gap: ${(props) => props.gap};
  flex-direction: ${(props) => props.direction};
  justify-content: ${(props) => props.align};
`;
