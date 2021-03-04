import styled from 'styled-components';

export const FlexIcon = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
  flex:.2;
  order:1;
  flex-direction: row;

`;


export const FlexText = styled.div`
  display: none;

  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    display: flex;
    align-items: baseline;  
}
  @media ${(props) => props.theme.mediaQueries.desktop} {
    display: flex;
    align-items: baseline;  
  }
`;

export const FlexIconOnly = styled.div`
  display: flex;
  align-items: baseline;  
  @media ${(props) => props.theme.mediaQueries.desktop} {
    display: none;
  }
`;


export const FlexIconR = styled.div`
  display: flex;
  width: 18%;
  align-items: baseline;
  right: 1%;
  padding: .5em;
  flex:.4;
  order:2;
  flex-direction: row-reverse;
  position: absolute;
  @media ${(props) => props.theme.mediaQueries.desktop} {
    order:3;
    position: relative;
    top: .3em;
    right: 3%;
  }
  
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    order:3;
    position: relative;
    top: .3em;
    right: 3%;
  }
`;

export const Flex50L = styled.div`
  display: flex;  
  width: 82%;
  align-items: baseline;
  margin:.5em;
  order:2;
  flex:.5
  @media ${(props) => props.theme.mediaQueries.desktop} {
    width: 100%;
    flex:2;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    width: 100%;
    flex:2;
  }
`;

export const Flex50R = styled.div`
  display: flex;  
  width: 90%;
  padding: 0 2em 0 3em;
  order:3;
  align-items: center;
  justify-content: center;
  flex:.5
  @media ${(props) => props.theme.mediaQueries.desktop} {
    flex:2;
    order:2;
    margin:.5em;
    padding: 0 1em 0 .5em;
    align-items: baseline;
}
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    flex:2;
    order:2;
    margin:.5em;
    padding: 0 1em 0 .5em;
    align-items: baseline;
  }
`;



export const GridContainer = styled.div`
display: grid;
@media ${(props) => props.theme.mediaQueries.mobile} {
  padding-top: 2em;
}
@media ${(props) => props.theme.mediaQueries.desktop} {
  padding: 2em;
}

gap: 0;
`;

export const FlexSpaceBetween = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: baseline;  
`;

export const FlexForm = styled.div`
  display: flex;
  align-items: baseline;
  flex-direction: column;
  @media ${(props) => props.theme.mediaQueries.desktop} {
    flex-direction: row;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    flex-direction: row;
  }
  padding-bottom: 1.5em;
`;

export const FlexRow = styled.div`
  display: flex;
  width: 100%;
  align-items: baseline;
`;



export const FlexTotal = styled.div`
  display: flex;  
  margin-right:1em;
  align-items: baseline;
  justify-content:left;
  @media ${(props) => props.theme.mediaQueries.desktop} {
    flex:2;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    flex:2;
  }
`;



export const FlexLeft = styled.div`
  display: flex;  
  width: 100%;
  @media ${(props) => props.theme.mediaQueries.desktop} {
    flex:2;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    flex:2;
  }
  flex-direction: column;
  justify-content: space-around;
`;

export const FlexRight = styled.div`
  display: flex;
  width: 100%;
  flex-direction:column;
  @media ${(props) => props.theme.mediaQueries.desktop} {
    flex:.9;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    flex:.9;
  }
`;

export const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;



export const FlexYT = styled.div`
  display: flex;
  justify-content: flex-end;
  margin: 1em 0 1em 0;
  align-items: baseline;  
  width:100%;
  @media ${(props) => props.theme.mediaQueries.desktop} {
    width:36%;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    width:36%;
  }
`;


export const Flex40 = styled.div`
  display: flex;
  width: 100%;
  @media ${(props) => props.theme.mediaQueries.desktop} {
    width:35vw;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    width:35vw;
  }
  flex-direction: column;
`;

export const FlexEnd = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column-reverse;
  margin: 1em 0 1em 0;
  @media ${(props) => props.theme.mediaQueries.desktop} {
    flex-direction: row;
    justify-content: flex-end;
  }
  @media ${(props) => props.theme.mediaQueries.largeScreen} {
    flex-direction: row;
    justify-content: flex-end;
  }
`;


export const Paragraphs = styled.p`
font-family: 'Open sans', sans-serif;
font-weight: 600;
font-style: 'normal';
font-size: ${(props) => props.theme.fontSizes.s5};
color: ${(props) => props.theme.colors.subtleText};
margin-bottom .5em;
line-height: 140%;
text-align: justify;
text-justify: inter-word;
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

