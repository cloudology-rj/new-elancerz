import styled from 'styled-components';
import { HeaderThree, HeaderTwo } from '@/components/global/Text';

export const FlexAlignCenter = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 15px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
  }
`;

export const ButtonFilter = styled.span`
  display: none;
  @media ${(props) => props.theme.mediaQueries.tablet} {
    display: block;
  }
`;

export const SearchQueryTitle = styled(HeaderThree)`
  margin: 32px 0;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    font-size: ${(props) => props.theme.fontSizes.s2};
  }
`;

export const MobileInput = styled.div`
  @media ${(props) => props.theme.mediaQueries.laptop} {
    display: none;
  }
`;
