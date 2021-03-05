import React from 'react';
import PropTypes from 'prop-types';

import { ButtonTertiary, ButtonFacebook } from '@/components/global/Button';

import { useAuth } from '../../../context/AuthProvider';

import Facebook from '../../../public/icons/facebook-icon.svg';
import Google from '../../../public/icons/google-icon.svg';

import { Flex } from '../../../styles/reusableStyles';

const socialMediaButtons = ({redirect}) => {
  const { signInWithGoogle } = useAuth();

  return (
    <>
      <ButtonFacebook fullWidth>
        <Flex gap='8px' direction="row">
          <Facebook />
          Continue with Facebook
        </Flex>
      </ButtonFacebook>

      <ButtonTertiary isCenter fullWidth onClick={() => signInWithGoogle(redirect)}>
        <Flex gap="8px" direction="row">
          <Google />
          Continue with google
        </Flex>
      </ButtonTertiary>
    </>
  );
};

socialMediaButtons.propTypes = {};

export default socialMediaButtons;