import styled, { css } from 'styled-components';
import mixins from '../../../styles/mixins';

export const AccordionHeader = styled.div`
  ${mixins.flex}
  gap:10px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    justify-content: space-between;
  }
`;

export const AccordionContainer = styled.div`
  border-bottom: 1px solid #eceff4;
  margin-top: 20px;
  padding: 12px 0;
`;

export const AccordionDescription = styled.div`
  margin-top: 12px;
  overflow: hidden;
  max-height: 0;
  opacity: 0;
  transition: 300ms max-height, 600ms opacity;

  ${(props) =>
    props.open &&
    css`
      max-height: ${(props) => props.height};
      opacity: 1;
    `}
`;

export const Flex = styled.div`
  ${mixins.flex};
  gap: 8px;
`;

export const ComparePrices = styled.div`
  ${mixins.flexBetween};
  width: 70%;
`;

export const CompareBottomContent = styled(ComparePrices)`
  width: 56%;
`;
