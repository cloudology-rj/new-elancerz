import { useState, useEffect } from 'react';
import PropTypes from 'prop-types';

import Person from '../Person/';

import { UnreadTitle } from './ConversationListStyles';
import { ConversationContainer } from '././ConversationListStyles';
import { useRouter } from 'next/router';
import Loader from "react-loader-spinner";

const ConversationList = ({ list, id, login, isLoading }) => {

  const router = useRouter();

  const togglePerson = (id) => {
    router.push(`/messages/${id}`)
  };

  if (isLoading) {
    return (
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
      }}>
        <Loader
          type="ThreeDots"
          color="#4CD7D0"
          height={50}
          width={50}
        // timeout={3000}
        />
      </div>
    )
  } else {


    return (
      <ConversationContainer>
        <UnreadTitle>Unread ({list?.length > 0 ? list?.length : 0})</UnreadTitle>
        <div>
          {list ? (
            list.map((person) => (
              <div
                onClick={() => togglePerson(person?.id)}
                key={person?.created_by_user?.id}
              >
                <Person data={person} id={id} login={login} />
              </div>
            ))
          ) : (
            <h1>No Freelancers Found</h1>
          )}
        </div>
      </ConversationContainer >
    );
  }

};

ConversationList.propTypes = {
  list: PropTypes.array,
};

export default ConversationList;
