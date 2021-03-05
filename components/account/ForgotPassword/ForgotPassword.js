import { useRouter } from 'next/router';
import { useState } from 'react';

import { HeaderThree, Body, ErrorMessage } from '@/components/global/Text';
import { ButtonPrimary, ButtonTertiary } from '@/components/global/Button';
import Input from '@/components/global/Input';
import MultiStep from '@/components/global/MultiStep';

import schemas from './schema';

import {
  FormGroup,
  ButtonStepper,
  AccoutContainer,
  BodyLight,
} from '../AccountStyles';

const FormikStep = (
  currentStep,
  values,
  errors,
  touched,
  handleChange,
  handleBlur
) => {
  switch (currentStep) {
    case 0:
      return (
        <FormGroup>
          <BodyLight>
            Please enter your email address and we’ll send you a link to reset
            your password.
          </BodyLight>

          <Input
            errors={errors.email}
            onBlur={handleBlur}
            type="email"
            name="email"
            value={values.email}
            placeholder="enter your email address"
            onChange={handleChange}
          />
          {errors.email && touched.email && (
            <ErrorMessage>{errors.email}</ErrorMessage>
          )}

          {
            // handles switching the steps
            <ButtonStepper fullWidth type="submit">
              Submit
            </ButtonStepper>
          }
        </FormGroup>
      );
    case 1:
      return (
        <FormGroup>
          <Input
            onBlur={handleBlur}
            type="password"
            name="password"
            value={values.password}
            placeholder="New password"
            onChange={handleChange}
          />
          {errors.password && touched.password && (
            <ErrorMessage>{errors.password}</ErrorMessage>
          )}

          <Input
            onBlur={handleBlur}
            type="password"
            value={values.passwordConfirmation}
            name="passwordConfirmation"
            placeholder="Confirm password"
            onChange={handleChange}
          />
          {errors.passwordConfirmation && touched.passwordConfirmation && (
            <ErrorMessage>{errors.passwordConfirmation}</ErrorMessage>
          )}

          {
            // handles switching the steps
            <ButtonStepper fullWidth type="submit">
              Change Password
            </ButtonStepper>
          }
        </FormGroup>
      );

    case 2:
      return <h1>Link is on the way!</h1>;
  }
};

const ForgotPassword = ({ onSwitch, isModal }) => {
  const [step, setStep] = useState(0);

  const router = useRouter();
  return (
    <AccoutContainer>
      <HeaderThree>Reset your password</HeaderThree>
      <br />

      <MultiStep
        renderItems={FormikStep}
        currentStep={step}
        onSetStep={setStep}
        validationSchema={schemas[step]}
        initialValues={{
          email: '',
          password: '',
          passwordConfirmation: '',
        }}
        onSubmit={async (values, helpers) => {
          // not running
          // validationSchema={testSchema2}

          if (step === 1) {
          } else {
            setStep(step + 1);
          }
        }}
      />

      {isModal ? (
        <ButtonTertiary isCenter fullWidth onClick={() => onSwitch()}>
          Back to login
        </ButtonTertiary>
      ) : (
        <ButtonTertiary
          isCenter
          fullWidth
          onClick={() => router.push('/account/sign-in')}
        >
          Back to login
        </ButtonTertiary>
      )}
    </AccoutContainer>
  );
};

export default ForgotPassword;
