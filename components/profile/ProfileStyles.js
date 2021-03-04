import styled from 'styled-components';
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTransparent,
  ButtonIcon
} from '@/components/global/Button';

export const HeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)), url("${props => props.bg}");
  height: 480px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  // padding:1.5em;
  padding: 32px 12px;
  margin: 0 1.5em 9em 1.5em;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    margin: 0 1.5em 9em 1.5em;
    padding: 32px 64px;
  }
`


export const ProfileContainer = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: left;
padding-bottom:2em;
`;

export const BodyContainer = styled.div`
padding: 32px;
display: grid;
place-items: left;
text-align: left;
gap: 32px;
width: 100%;

@media ${(props) => props.theme.mediaQueries.tablet} {
  width: 40%;
  min-width: 631px;
  gap: 64px;
}
`;

export const FlexNav = styled.div`
  display: none;
  justify-content: flex-end;
  width: 40%;
  @media ${(props) => props.theme.mediaQueries.laptop} {
    display: flex;
  }
  @media ${(props) => props.theme.mediaQueries.desktop} {
    display: flex;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    display: flex;
  }
`;

export const FlexLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: static;
  width: 100%;
  height: 1px;
  background: #EEFBFB;
`


export const Paragraphs = styled.p`
  font-family: 'Open sans', sans-serif;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.s4};
  color: ${(props) => props.theme.colors.subtleText};
  margin-bottom: 10px;
  line-height: 22.4px;
  text-align: justify;
  text-justify: inter-word;
`;

export const ProfileServices = styled.div`
  cursor:grab;
  width:100%;
  display: flex;
  justify-content:left;
  overflow-x: auto;
  &::-webkit-scrollbar {    display: none;}
  @media ${(props) => props.theme.mediaQueries.mobile} {
    padding: 0 1.5em 1em 1.5em;
  }
  @media ${(props) => props.theme.mediaQueries.laptop} {
    padding: 0 1.5em 1em 1.5em;
  }
  @media ${(props) => props.theme.mediaQueries.desktop} {
    padding: 0 1.5em 1em 31.2%;
  }
`;


export const FlexBetween = styled.div`
display: flex;
justify-content:space-between;
`;


export const FlexBaseline = styled.div`
display: flex;
justify-content:center;
align-items:center;
`;


export const FlexBaselineMobile = styled(ButtonPrimary)`
display: flex;
justify-content:center;
align-items:center;
width: 100%;
@media ${(props) => props.theme.mediaQueries.laptop} {
  width: 20%;
}
`;


export const FlexCenter = styled.div`
  @media ${(props) => props.theme.mediaQueries.mobile} {
    margin-top: 2em;
  }
  @media ${(props) => props.theme.mediaQueries.desktop} {
    margin-top: 4em;
  }
  display: flex;
  justify-content:center;
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
