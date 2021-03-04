import styled from 'styled-components';

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


export const GridContainer = styled.div`
display: grid;
@media ${(props) => props.theme.mediaQueries.mobile} {
  padding-top: 2em;
}
@media ${(props) => props.theme.mediaQueries.desktop} {
  padding: 2em;
}

gap: 1.5em;
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const FlexRow = styled.div`
  display: flex;
`;

export const ModalContainer = styled.div`
  display: flex;
  justify-content: center;
  padding: 2em 0 2em 0;
`;



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