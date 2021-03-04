import styled from 'styled-components';
import { HeaderThree, Body } from '@/components/global/Text';

export const PaymentContainer = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
`;

export const PaymentHeader = styled(HeaderThree)`
  margin-bottom: 57px;
`;

export const PaymentBody = styled(Body)`
  margin-bottom: 40px;
`;
