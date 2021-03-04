import styled from 'styled-components'

export const StyledPayment = styled.div`
    margin-bottom: 5rem;
    display:grid;
    gap: 2rem;
`

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
  font-weight: 400;
  font-size: 14px;
  color: ${(props) => props.theme.colors.subtleText};
  text-align: left;
  text-justify: inter-word;
`;


export const Column = styled.div`
  display:  grid;
  gap:  1rem;
`

export const SmallColumn = styled.div`
  display:  grid;
  gap:  .5rem;
  width:100%;
  margin: 0 .1rem  0 .1rem;
  @media ${(props) => props.theme.mediaQueries.laptop} {
  margin: 0 1rem  0 .2rem;
  }
`

export const Baseline = styled.div`
display: flex;
justify-content:left;
align-items:center;
`;

export const Flex50 = styled.div`
display: flex;
justify-content: space-between;
align-items:left;
width:100%;
`;

export const Flex30 = styled.div`
display: flex;
justify-content: space-around;
align-items:left;
width:100%;
padding-right:1rem;
`;


