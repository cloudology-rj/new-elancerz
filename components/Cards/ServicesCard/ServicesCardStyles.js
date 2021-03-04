import styled from 'styled-components';

export const CardContainer = styled.div`
  display: flex;
  padding-top: 1em;
  padding-bottom: 1em;
  align-items: left;
  justify-content: left;
  // background: white;
  border-bottom: 1px solid #ECEFF4;
  flex-direction:column;
  @media ${(props) => props.theme.mediaQueries.desktop} {
    flex-direction:row;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    flex-direction:row;
  }

`;


export const FlexNav = styled.div`
  display: flex;
  justify-content: space-between;
  top: -74px;
  position: relative;
`;



export const FlexColumn = styled.div`
  display: flex;
  flex-direction:column;
`;

export const FlexRow = styled.div`
  display: flex;
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: left;
  flex-direction:column;
  @media ${(props) => props.theme.mediaQueries.desktop} {
    flex-direction:row;
    justify-content: space-between;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    flex-direction:row;
    justify-content: space-between;
  }
`;

export const FlexEnd = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1em 0 1em 0;
`;



export const FlexLeft = styled.div`
  display: flex; 
  @media ${(props) => props.theme.mediaQueries.desktop} {
    flex:.3;
    margin: .5em 2em 2.5em 0;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    flex:.3;
    margin: .5em 2em 2.5em 0;
  }
  justify-content: center;
  margin: 0 0 -2.5em 0;
  
`;

export const FlexRight = styled.div`
  display: flex;
  flex-direction:column;
  @media ${(props) => props.theme.mediaQueries.desktop} {
    flex:2;
  }
`;

export const Paragraphs = styled.p`
margin-top: 1em;
font-family: 'Open sans', sans-serif;
font-weight: 600;
font-size: ${(props) => props.theme.fontSizes.s4};
color: ${(props) => props.theme.colors.subtleText};
margin-bottom: 10px;
line-height: 22.4px;
text-align: justify;
text-justify: inter-word;
`;