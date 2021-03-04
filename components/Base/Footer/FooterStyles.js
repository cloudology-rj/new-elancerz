import styled from 'styled-components';


export const FooterContainer = styled.footer`
  background: ${(props) => props.theme.colors.text};
  text-align: center;
  padding: 60px 0;
  text-align: center;
`;

export const FooterFlex = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 12px;
`;