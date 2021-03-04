import styled from 'styled-components';
import { ButtonPrimary } from '@/components/global/Button';
import { BodyLight } from '../AccountStyles';

export const FormGroup = styled.div`
  display: grid;
  gap: 15px;
`;

export const SignupContainer = styled.div`
  display: grid;
  place-items: center;
  text-align: center;
  gap: 2em;
`;

export const ButtonStepper = styled(ButtonPrimary)`
  margin-top: 20px;
`;

export const BottomText = styled.span`
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.primaryBrand};
`;
