import styled from 'styled-components';

import ViewPrimary from '../../../public/icons/view-primary.svg';

export const ButtonIcon = styled(ViewPrimary)`
  & path {
    color: ${(props) => props.white && props.theme.colors.white};
  }
`;


export const ProfileBannerButtons = styled.div`
  width:100%;
  display: flex;
  justify-content:space-between;
`;

export const ExitPublicView = styled.div`
  @media ${(props) => props.theme.mediaQueries.mobile} {
    justify-content:center;
  }
  @media ${(props) => props.theme.mediaQueries.laptop} {
    justify-content:center;
  }
  @media ${(props) => props.theme.mediaQueries.desktop} {
    justify-content:left;
  }
  display: flex;
`;
