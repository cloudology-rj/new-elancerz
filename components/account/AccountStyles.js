import styled from 'styled-components';
import { ButtonPrimary } from '@/components/global/Button';
import { Body } from '@/components/global/Text';

export const AccoutContainer = styled.main`
  display: grid;
  place-items: center;
  text-align: center;
  gap: 2em;
`;
export const ButtonStepper = styled(ButtonPrimary)`
  margin-top: 20px;
`;

export const FormGroup = styled.div`
  display: grid;
  gap: 15px;
`;

export const BodyLight = styled.span`
  font-family: 'Open sans', sans-serif;
  font-size: ${(props) => props.theme.fontSizes.s4};
  font-weight: 600;
  line-height: 22.4px;
  color: ${(props) => props.theme.colors.subtleText};
  font-size: 12px;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    font-size: ${(props) => props.theme.fontSizes.s4};
  }
`;
