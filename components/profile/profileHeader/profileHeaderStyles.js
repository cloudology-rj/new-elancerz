import styled from 'styled-components';


export const FlexCenter = styled.div`
  @media ${(props) => props.theme.mediaQueries.mobile} {
    margin-top: 2em;
  }
  @media ${(props) => props.theme.mediaQueries.desktop} {
    margin-top: 4em;
  }
  display: flex;
  justify-content: center;
`;


export const HeroImage = styled.div`
  background-image: linear-gradient(rgba(0, 0, 0, 0), rgba(0, 0, 0, 0.5)),
    url('/images/banner.png');
  height: 480px;
  width: 100%;
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  position: relative;
  padding:1.5em;


  @media ${(props) => props.theme.mediaQueries.mobile} {
    margin: 0 1.5em 9em 1.5em;
  }
  @media ${(props) => props.theme.mediaQueries.desktop} {
    margin: 0 1.5em 12em 1.5em;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    margin: 0 1.5em 12em 1.5em;
  }
`;
