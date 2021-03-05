import Router from 'next/router';


import apiCall from '../../../helpers/fetch';

import { useState, useContext, useEffect } from 'react';

import { useAuth } from '../../../context/AuthProvider';
import { IsMobileContext } from '../../../context/IsMobile';
import { useToast } from '../../../context/ToastProvider';

import signupSchema from './signupSchema';

import { Loader } from '../../global/Loader';
import MultiStep from '@/components/global/MultiStep';
import SocialMediaButtons from '../SocialMedia/';
import { HeaderThree, ErrorMessage, Divider } from '@/components/global/Text';
import Input from '@/components/global/Input';

import {
  FormGroup,
  SignupContainer,
  ButtonStepper,
  BottomText,
} from './SignupStyles';
import { Flex } from '../../../styles/reusableStyles';

import { BodyLight } from '../AccountStyles';

const Signup = ({ isModal, onSwitch, redirect, toggleSignup }) => {
  const [signupSuccess, setSignupSuccess] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [step, setStep] = useState(0);
  // const [isMobile] = useContext(IsMobileContext);




  const { showToast, setToastData } = useToast();








  return (
    <>
      <SignupContainer>
        <HeaderThree>Sign up</HeaderThree>
        <br />

        <MultiStep
          isFinish={signupSuccess}
          isLoading={isLoading}
          redirect={redirect}
          renderItems={FormikStep}
          currentStep={step}
          onSetStep={setStep}
          validationSchema={signupSchema[step]}
          initialValues={{
            email: '',
            username: '',
            password: '',
          }}
          onSubmit={async (values, helpers) => {
            // not running
            // validationSchema={testSchema2}

            if (step === 1) {
              const { email, username, password } = values;

              if (!username || !password) {
                return helpers.status({ message: 'Please enter all fields' });
              }

              setIsLoading(true);
              helpers.setStatus();

              apiCall('/user/register', 'POST', '', {
                email,
                username,
                password,
              })
                .then((res) => {
                  helpers.resetForm({ values: '' });
                  setIsLoading(false);
                  setSignupSuccess(true);
                  helpers.setStatus({ success: 'Email sent !' });

                  //show the toast data
                  showToast(true);
                  setToastData({
                    size: '24px',
                    msg: 'An Email verification has been sent at your email',
                    icon: '/icons/warning.svg',
                  });

                  isMobile
                    ? Router.push('/account/sign-in')
                    : toggleSignup(false);
                })
                .catch(function (error) {
                  setIsLoading(false);
                  console.log(error.response.data.errors)
                  helpers.setStatus({
                    username: error.response?.data?.errors?.username,
                    password:
                      error.response?.data?.errors?.password,
                  });
                });
            } else {
              setStep(step + 1);
            }
          }}
        />
        <BodyLight>
          By joining, you agree to our Terms of Service, as well as to receive
          occasional emails from us.
        </BodyLight>

        <BodyLight>
          <Flex gap="5px">
            Already a member?
            {isModal ? (
              <BottomText onClick={() => onSwitch()}>Login</BottomText>
            ) : (
              <BottomText onClick={() => Router.push('/account/sign-in')}>
                Login
              </BottomText>
            )}
          </Flex>
        </BodyLight>

        <br />
      </SignupContainer>
    </>
  );
};

// display the step
const FormikStep = (
  currentStep,
  values,
  errors,
  touched,
  handleChange,
  handleBlur,
  status = 'test',
  redirect,
  isFinish,
  isLoading
) => {
  switch (currentStep) {
    case 0:
      return (
        <FormGroup>
          <SocialMediaButtons />
          <Divider>or</Divider>

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
              Continue
            </ButtonStepper>
          }
        </FormGroup>
      );
    case 1:
      return (
        <FormGroup>
          <Input
            success={status && status.success}
            error={status && status.error}
            onBlur={handleBlur}
            type="text"
            name="username"
            values={values.username}
            placeholder="enter your username"
            onChange={handleChange}
          />

          <Input
            success={status && status.success}
            onBlur={handleBlur}
            type="password"
            name="password"
            value={values.password}
            placeholder="enter your password address"
            onChange={handleChange}
          />

          {status.message && <ErrorMessage>{status.message}</ErrorMessage>}
          {status.password && <ErrorMessage>{status.password}</ErrorMessage>}

          {status.username && <ErrorMessage>{status.username}</ErrorMessage>}

          {
            // handles switching the steps
            <ButtonStepper fullWidth type="submit">
              {isFinish ? (
                'Signed up successfully'
              ) : isLoading ? (
                <Flex gap="5px" align="center">
                  Signing up <Loader />{' '}
                </Flex>
              ) : (
                ' Sign up'
              )}
            </ButtonStepper>
          }
        </FormGroup>
      );

    case 2:
      return <h1>Horay! you signed up!</h1>;
  }
};

export default React.memo(Signup);