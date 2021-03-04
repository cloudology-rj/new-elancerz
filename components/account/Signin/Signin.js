import Image from 'next/image';
import Router from 'next/router';
import { useContext, useState } from 'react';
import { Formik, Form } from 'formik';
import apiCall from '../../../helpers/fetch';
import { fetchMe } from '../../../api/queries';

import { useAuth } from '../../../context/AuthProvider';
import { useToast } from '../../../context/ToastProvider';
import { IsMobileContext } from '../../../context/IsMobile';

import {
  HeaderThree,
  HighlightColor,
  Body,
  ErrorMessage,
  Divider,
} from '@/components/global/Text';
import { ButtonPrimary } from '@/components/global/Button';
import Input from '@/components/global/Input';
import Checkbox from '@/components/global/Checkbox';
import SocialMediaButtons from '../SocialMedia/';
import {Loader} from '../../global/Loader';

import {
  FlexContainer,
  InputGroup,
  SigninForm,
  SigninContainer,
  ButtonForgotPassword,
} from './SigninStyles';
import { BodyLight } from '../AccountStyles';

import { Flex } from '../../../styles/reusableStyles';

const SignIn = ({ isModal, onSwitch, onPasswordReset, redirect }) => {
  const { setIsLogin, setToken, isLogin } = useAuth();
  const [isMobile] = useContext(IsMobileContext);


  const { reset } = useToast();
  const [isLoading, setIsLoading] = useState(false);
  const [isFinish, setIsFinish] = useState(false);

  return (
    <SigninContainer>
      <HeaderThree>Log in to your account</HeaderThree>
      <br />
      <SocialMediaButtons redirect={redirect} />
      <Divider>or</Divider>

      <Formik
        initialValues={{
          email: '',
          password: '',
        }}
        onSubmit={async (values, helpers) => {
          helpers.setStatus();
          setIsLoading(true);
          setIsFinish(false);
          const { email, password } = values;

          const data = {
            email,
            password,
          };

          // AFTER SIGNING IN IT CAUSE BROWSER TO CRASH
          apiCall('/user/login', 'POST', '', data)
            .then((res) => {
              //   setIsLogin(true);

              fetchMe(res.access_token).then((data) => {
                console.log(data);

                if (data.email_verified_at) {
                  helpers.setStatus({ success: 'signed in' });
                  setToken(res.access_token);
                  reset();
                  redirect && redirect();
                } else {
                  helpers.setStatus({
                    verify: 'Please verify your email before proceeding',
                  });
                }
              });
            })
            .catch((err) => {
              helpers.setStatus({ error: 'User does not exist' });
            });
        }}
      >
        {({ values, errors, touched, handleChange, handleBlur, status }) => (
          <SigninForm autoComplete="off">
            <Input
              success={status && status.success}
              error={status && status.error}
              name="email"
              type="email"
              values={values.email}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your email address"
            />
            <Input
              success={status && status.success}
              error={status && status.error}
              name="password"
              type="password"
              values={values.passowrd}
              onChange={handleChange}
              onBlur={handleBlur}
              placeholder="Enter your password"
            />

            {errors && errors.username && (
              <ErrorMessage>{errors.username}</ErrorMessage>
            )}

            {errors && errors.password && (
              <ErrorMessage>{errors.password}</ErrorMessage>
            )}

            {status && status.error && (
              <ErrorMessage>{status.error}</ErrorMessage>
            )}
            {status && status.verify && (
              <ErrorMessage>{status.verify}</ErrorMessage>
            )}

            <ButtonPrimary type="submit" fullWidth>
              {isFinish ? (
                'Signed  in  successfully'
              ) : isLoading ? (
                <Flex gap="5px" align="center">
                  Signing in <Loader />{' '}
                </Flex>
              ) : (
                ' Sign in'
              )}
            </ButtonPrimary>
          </SigninForm>
        )}
      </Formik>
      <FlexContainer>
        <InputGroup>
          <Checkbox />

          <BodyLight>Remember me</BodyLight>
        </InputGroup>

        {isModal ? (
          <ButtonForgotPassword onClick={() => onPasswordReset()}>
            Forgot Password
          </ButtonForgotPassword>
        ) : (
          <ButtonForgotPassword
            onClick={() => Router.push('/account/forgot-password')}
          >
            Forgot password
          </ButtonForgotPassword>
        )}
      </FlexContainer>
      <BodyLight>
        Not yet a member?{' '}
        {isModal ? (
          <HighlightColor onClick={() => onSwitch()}>sign up</HighlightColor>
        ) : (
          <HighlightColor onClick={() => Router.push('/account/sign-up')}>
            sign up
          </HighlightColor>
        )}
      </BodyLight>
    </SigninContainer>
  );
};

SignIn.propTypes = {};

export default React.memo(SignIn);
