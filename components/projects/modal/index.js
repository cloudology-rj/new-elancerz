import { PaymentContainer, PaymentBody, PaymentHeader } from './modalStyles';

import {
  ButtonPill,
  ButtonSecondary,
  ButtonPrimary,
  ButtonDanger,
  ButtonTertiary,
} from '@/components/global/Button';

import { HeaderThree, Body } from '@/components/global/Text';

export const ModalPayment = ({ switchPage }) => {
  return (
    <PaymentContainer>
      <PaymentHeader>Add a payment method</PaymentHeader>
      <PaymentBody>
        Eget nunc eget sodales mauris dui ultrices purus quis suspendisse.
        Cursus enim non sed purus at.
      </PaymentBody>
      <ButtonPrimary fullWidth>Go to settings</ButtonPrimary>
      <ButtonTertiary gray onClick={() => switchPage()}>
        Back
      </ButtonTertiary>
    </PaymentContainer>
  );
};
