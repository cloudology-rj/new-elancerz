import Router from 'next/router';

import Signup from './Signup/Signup';

import Signin from './Signin/Signin';
import ForgotPassword from './ForgotPassword/ForgotPassword';

import { useAuth } from '../../context/AuthProvider';

import {withAuthComponent} from '../../HOC/withAuth';

const SigninWithAuth = withAuthComponent(Signin);
const SignupWithAuth = withAuthComponent(Signup);

import { AccoutContainer } from './AccountStyles';

const Account = ({ section }) => {
  const { isLogin } = useAuth();



  return (
    <AccoutContainer>
      {section === 'sign-up' && <SignupWithAuth isLogin={isLogin} />}
      {section === 'sign-in' && <SigninWithAuth isLogin={isLogin} redirect={() => Router.push('/dashboard')} />}
      {section === 'forgot-password' && <ForgotPassword />}
    </AccoutContainer>
  );
};

export default Account;
