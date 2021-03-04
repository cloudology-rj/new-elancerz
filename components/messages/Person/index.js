import Image from 'next/image';
import PropTypes from 'prop-types';

import { Flex } from '../../../styles/reusableStyles';

import {
  PersonImage,
  PersonContainer,
  PersonName,
  PersonSubName,
  Message,
  Job,
} from './PersonStyles';

const Person = ({ data, id, login }) => {

  // console.log('compoennt list ', props);

  const cfname = data?.created_by_user.first_name == null ? 'First Name' : data?.created_by_user.first_name
  const clname = data?.created_by_user.last_name == null ? 'Last Name' : data?.created_by_user.last_name

  const rfname = data?.received_by_user.first_name == null ? 'First Name' : data?.received_by_user.first_name
  const rlname = data?.received_by_user.last_name == null ? 'Last Name' : data?.received_by_user.last_name

  const creator = cfname + ' ' + clname
  const receiver = rfname + ' ' + rlname

  const lastMsg = data?.chats.slice(-1).pop()
  const lastSender = (lastMsg.user_id == data?.created_by_user.id) ? creator : receiver

  const regexHi = "[elance-emote]wave[/elance-emote]"
  // console.log(login, data?.created_by_user?.id, data?.received_by_user?.id);

  // return null
  return (
    <PersonContainer
      unread={false}
      selected={false}
    >
      <PersonImage src="/images/sample.jpg" width="48px" height="48px" />

      <div>
        <Flex gap="5px">
          <PersonName>{login == data?.received_by_user?.id ? creator : receiver}</PersonName>
          <Job>'Job title'</Job>
        </Flex>
        <Flex gap="5px">
          <PersonSubName selected={false}>{lastSender}:</PersonSubName>
          <Message selected={false}>
            {lastMsg?.message == regexHi ? 'Hi' : lastMsg.message}
          </Message>
        </Flex>
      </div>
    </PersonContainer>
  );
};

// Person.propTypes = {
//   image: PropTypes.string,
//   name: PropTypes.string,
//   job: PropTypes.string,
//   message: PropTypes.string,
//   unread: PropTypes.bool,
//   selected: PropTypes.bool,
// };

export default Person;
