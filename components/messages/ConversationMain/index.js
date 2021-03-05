import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import {
  HeaderThree,
  HeaderTwo,
  Bold,
  PreTitle,
} from '@/components/global/Text';

import MessageHeader from '../MessageHeader/';
import ProjectDropDown from '../ProjectDropdown';
import ConversationBox from '../ConversationBox';
import Sidebar from '../Sidebar/';

import { MainContainer, MessagesContainer } from './ConversationMainStyles';
import { Column } from 'components/settings/payment-details/paymentStyles';


import { useQuery } from 'react-query';
import { getMessages } from '../../../api/queries';
import styled from 'styled-components';


import { useAuth } from "../../../context/AuthProvider";



const ConversationMain = ({ token, id, route }) => {

  const { user } = useAuth()

  // console.log('token:', token);

  if (user == null) {
    return null
  }
  else {



    const { isLoading, isError, error, data: srv } = useQuery(
      'messagesQuery', () => getMessages(token)
    );



    if (isError) {
      return (
        <NotFound>
          <HeaderTwo>Sorry, something went wrong with your request</HeaderTwo>
        </NotFound>
      )
    }

    else {

      console.log(route)

      const specificConvo = srv?.data?.find(x => x.id == id)

      return (

        <MainContainer>
          <Sidebar peoples={srv?.data} id={id} login={user.id} isLoading={isLoading} />
          <MessagesContainer>
            <MessageHeader isLoading={isLoading} data={specificConvo} id={id} login={user.id} />
            {/* <ProjectDropDown isLoading={isLoading} token={token} getconvo={specificConvo} id={id} route={route} /> */}
            <ConversationBox isLoading={isLoading} token={token} getconvo={specificConvo} id={id} route={route} />
          </MessagesContainer>
        </MainContainer>
      );
    }
  }
};

ConversationMain.propTypes = {};

export default ConversationMain;

export const NotFound = styled.div`
  width: 100%;
  height: 50vh;
  display: grid;
  align-items: center;
  justify-content: center;
  place-items: center;
`;
