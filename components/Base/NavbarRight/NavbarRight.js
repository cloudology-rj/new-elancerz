import { useContext, useState, useReducer } from 'react';
import PropTypes from 'prop-types';

import { IsMobileContext } from '../../../context/IsMobile';

import { ButtonPrimary, ButtonTertiary } from '@/components/global/Button';
import NotificationBar from '@/components/global/Notification';

import AuthModal from '../../../HOC/AuthModal';

import Chat from '../../../public/icons/chat.svg';
import Notification from '../../../public/icons/Bell.svg';
import { NotificationContainer, Badge } from './NavbarRightStyles';

const switchReducer = (state, action) => {
  switch (action) {
    case 'open-notification':
      return { ...state, notification: !state.notification, messages: false };

    case 'open-messages':
      return { ...state, messages: !state.messages, notification: false };

    case 'clear-all':
      return { ...state, notification: false, messages: false };
    default:
      return state;
  }
};

const INITIAL_STATE = {
  messages: false,
  notification: false,
};

const NavbarRight = ({ isLogin, signin, signup }) => {
  const [state, dispatch] = useReducer(switchReducer, INITIAL_STATE);
  const { messages, notification } = state;

  const [isMobile] = useContext(IsMobileContext);

  return isLogin ? (
    <>
      <NotificationContainer>
        <Notification onClick={() => dispatch('open-notification')} />
        {/* <Badge></Badge> */}
        <NotificationBar
          name="updates"
          isOpen={notification}
          onOpen={() => dispatch('clear-all')}
          options={[
            {
              message: 'your profile is updated,',
            },
            {
              message: 'Go to your profile',
            },
            {
              message: 'You received a rating from John Doe',
            },
            {
              message: 'You just completed a project',
            },
          ]}
        />
      </NotificationContainer>

      <NotificationContainer>
        <Chat onClick={() => dispatch('open-messages')} />
        {/* <Badge></Badge> */}
        <NotificationBar
          name="messages"
          onOpen={() => dispatch('clear-all')}
          isOpen={messages}
          options={[
            {
              message: 'John Messaged you',
            },
            {
              message: 'Ken message you',
            },
            {
              message: 'Lets do this john ',
            },
            {
              message: 'John are you there?',
            },
          ]}
        />
      </NotificationContainer>
    </>
  ) : isMobile ? (
    <>
      <ButtonPrimary onClick={() => router.push('/account/sign-in')}>
        sign in
      </ButtonPrimary>
    </>
  ) : (
    <>
      <ButtonPrimary onClick={() => signup(true)}>sign up</ButtonPrimary>

      <ButtonTertiary onClick={() => signin(true)}>sign in</ButtonTertiary>
    </>
  );
};

NavbarRight.propTypes = {
  isLogin: PropTypes.bool,
};

export default AuthModal(NavbarRight);
