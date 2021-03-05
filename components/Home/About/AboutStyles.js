import styled from 'styled-components';
import { HeaderTwo } from '@/components/global/Text';

export const AboutContainer = styled.div`
  background: ${(props) => props.theme.colors.turqoise};
  padding: 64px 0;
`;

export const AboutHeading = styled(HeaderTwo)`
  margin-top: 64px;
  margin-bottom: 32px;
  text-align: center;
`;

export const VideoSample = styled.div`
  width: 100%;
  height: 300px;
  background: ${(props) => props.theme.colors.secondaryBrand};
  margin-bottom: 32px;
  @media ${(props) => props.theme.mediaQueries.laptop} {
    margin-bottom: 0;
  }
`;

export const AboutContent = styled.div`
  @media ${(props) => props.theme.mediaQueries.laptop} {
    display: grid;
    grid-template-columns: 1fr 1fr;
    grid-column-gap: 25px;
  }
`;
