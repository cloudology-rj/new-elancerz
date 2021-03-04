import { useState } from 'react';
import PropTypes from 'prop-types';

import { HeaderTwo } from '@/components/global/Text';
import Input from '@/components/global/Input';

import ConversationList from '../ConversationList/';


import { useQuery } from "react-query";
import { getMessages } from '../../../api/queries';
import styled from 'styled-components';

const ConversationMobile = ({ token }) => {


  const { isLoading, error, data: srv } = useQuery(
    'messagesQuery', () => getMessages(token)
  );

  if (error)
    return (
      <NotFound>
        <HeaderTwo>Sorry, something went wrong with your request</HeaderTwo>
      </NotFound>
    );

  // return null
  // const [peoples, setPeoples] = useState(peopleList);


  return (
    <div>
      <HeaderTwo>Messages</HeaderTwo>
      <br />
      <Input type="text" placeholder="enter a message" search={true} />
      <ConversationList list={srv?.data} />
      {/* <Sidebar peoples={srv?.data} /> */}

    </div>
  );
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