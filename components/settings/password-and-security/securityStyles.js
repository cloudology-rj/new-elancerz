import styled from 'styled-components'

export const StyledSecurity = styled.div`
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
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.s4};
  color: ${(props) => props.theme.colors.subtleText};
  margin-bottom: 10px;
  line-height: 22.4px;
  text-align: center;
  text-justify: inter-word;
`;


export const Column = styled.div`
  display:  grid;
  gap:  2.5rem;
`

export const Baseline = styled.div`
display: flex;
justify-content:left;
align-items:center;
`;
