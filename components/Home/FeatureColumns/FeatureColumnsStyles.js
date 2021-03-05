import styled from 'styled-components';

import { Subtitle, HeaderTwo } from '@/components/global/Text';

export const FeatureTitle = styled(HeaderTwo)`
  color: ${(props) => props.theme.colors.primaryBrand} !important;
  margin-top:40px;
  margin-bottom: 10px;
  text-align: center;
`;

export const FeatureContainer = styled.div`
  padding: 64px 0;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    display: flex;
  }
`;

export const FeatureRow = styled.div`
  margin-top: 40px;

  & div {
    width: 100%;
  }

  @media ${(props) => props.theme.mediaQueries.laptop} {
    margin-top: 0px;
  }
`;

export const FeatureSubtitle = styled(Subtitle)`
  text-align: center;
`;
