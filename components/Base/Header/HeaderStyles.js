import styled from 'styled-components';
import { ButtonSecondary } from '@/components/global/Button';

export const NavbarContainer = styled.nav`
  display: flex;
  justify-content: space-between;
  padding: 20px 24px;
`;

export const HeroTitle = styled.h1`
  font-family: 'Open sans', sans-serif;
  font-size: ${(props) => props.theme.fontSizes.s3};
  font-weight: 600;
  margin-bottom: 32px;
`;

export const HeaderContent = styled.div`
  @media ${(props) => props.theme.mediaQueries.laptop} {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    width: 427px;
    height: 500px;
  }
`;
export const HeaderContainer = styled.header`
  position: relative;
  width: 100%;
  height: 100vh;
  background-image: url('/illustrations/main-illustration.svg');
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  background-size: 613px 949px;
  background-position: top;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    background-size: 74%;
    background-position: right bottom;
  }
`;

export const NavbarButton = styled.div`
  display: none;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    display: flex;
  }

  & button:not(:last-child) {
    margin-right: 15px;
  }
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: flex-start;

  button:first-child {
    margin: 28px 0;
  }

  @media ${(props) => props.theme.mediaQueries.laptop} {
    display: none;
  }
`;

export const ButtonSecondaryStyle = styled(ButtonSecondary)`
  padding-left: 17px;
`;

export const HeaderForm = styled.form`
  width: 100%;
`;
