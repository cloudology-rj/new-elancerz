import styled from 'styled-components';

import SendIcon from '../../../public/icons/send.svg';

export const SendQuote = styled(SendIcon)`
  & path {
    stroke: ${(props) => props.white && 'white'};
  }
`;
