import styled from 'styled-components';

import { Subtitle, HeaderTwo } from '@/components/global/Text';

export const FeatureTitle = styled(HeaderTwo)`
  color: ${(props) => props.theme.colors.primaryBrand} !important;
  margin-bottom: 16px;
  text-align: center;
`;

export const FeatureContainer = styled.div`
  padding: 64px 0;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    display: flex;
  }
`;

export const FeatureRow = styled.div`
  & div {
    width: 100%;
  }
`;

export const FeatureSubtitle = styled(Subtitle)`
  text-align: center;
`;
