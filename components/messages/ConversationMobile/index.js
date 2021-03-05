import { useState } from 'react';
import PropTypes from 'prop-types';

import { HeaderTwo } from '@/components/global/Text';
import Input from '@/components/global/Input';

import ConversationList from '../ConversationList/';


import { useQuery } from "react-query";
import { getMessages } from '../../../api/queries';
import styled from 'styled-components';

const ConversationMobile = ({ token }) => {


  const { isLoading, isError, error, data: srv } = useQuery(
    'messagesQuery', () => getMessages(token)
  );

  if (isError)
    return (
      <NotFound>
        <HeaderTwo>Sorry, something went wrong with your request</HeaderTwo>
      </NotFound>
    )
  else {

    return (
      <div style={{ paddingLeft: 32, paddingRight: 32 }}>
        <HeaderTwo>Messages</HeaderTwo>
        <br />
        <Input type="text" placeholder="Search..." search={true} />
        <ConversationList list={srv?.data} />
        {/* <Sidebar peoples={srv?.data} /> */}
      </div>
    );

  }


};

ConversationMobile.propTypes = {};

export default ConversationMobile;

export const NotFound = styled.div`
  width: 100%;
  height: 50vh;
  display: grid;
  align-items:center;
  justify-content:center;
  place-items: center;
`;