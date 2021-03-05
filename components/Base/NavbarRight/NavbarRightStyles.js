import styled from 'styled-components';




export const NotificationContainer = styled.div`
  position: relative;
`;

export const Badge = styled.span`
  position: absolute;
  top: -12px;
  right: -10px;
  border-radius: 50%;
  background: ${(props) => props.theme.colors.error};
  color: white;
  padding: 1px 2px;
  width: 19px;
  height: 19px;
  display: flex;
  justify-content: center;
  align-content: center;
`;
