import { useState, useCallback } from 'react';
import Router from 'next/router';

import Modal from '@/components/global/Modal';
import Signin from '../components/account/Signin/Signin';
import ForgotPassword from '../components/account/ForgotPassword/ForgotPassword';
import Signup from '../components/account/Signup/Signup';

const withAuthModal = (Component) => (props) => {
  const [showSignin, setShowSignin] = useState(false);
  const [showSignup, setShowSignup] = useState(false);
  const [showForgotPassword, setShowForgotPassword] = useState(false);

 

  const switchToSignin = useCallback(() => {
    setShowSignup(!showSignup);
    setShowSignin(!showSignin);
  }, [showSignup, showSignin]);
  const switchToSignup = useCallback(() => {
    setShowSignin(!showSignin);
    setShowSignup(!showSignup);
  }, [showSignin, showSignup]);

  const SwitchToForgotPassword = useCallback(() => {
    setShowSignin(!showSignin);
    setShowForgotPassword(!showForgotPassword);
  }, [showSignin, showForgotPassword]);

  const switchToSignfromPassword = useCallback(() => {
    setShowForgotPassword(false);
    setShowSignin(!showSignin);
  }, [showSignin]);

  const goToUser = () => {
    console.log('running');
    const { id } = props;
    // if no id was found redirect to dashboard after signing in
    id ? Router.push(`/profile/view/${props}`) : Router.push('/dashboard');
  };

  return (
    <>
      <Modal
        modalActive={showSignin}
        setModalActive={setShowSignin}
        content={
          <Signin
            onPasswordReset={SwitchToForgotPassword}
            onSwitch={switchToSignin}
            isModal={true}
            redirect={() => goToUser()}
          />
        }
      />
      <Modal
        modalActive={showSignup}
        setModalActive={setShowSignup}
        content={
          <Signup
            onSwitch={switchToSignup}
            isModal={true}
            redirect={() => goToUser()}
            toggleSignup={setShowSignup}
          />
        }
      />
      <Modal
        modalActive={showForgotPassword}
        setModalActive={setShowForgotPassword}
        content={
          <ForgotPassword onSwitch={switchToSignfromPassword} isModal={true} />
        }
      />
      <Component
        openAuthModal={setShowSignin}
        signin={setShowSignin}
        signup={setShowSignup}
        {...props}
      />
    </>
  );
};

export default withAuthModal;
