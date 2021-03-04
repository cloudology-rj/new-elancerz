import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';

import MessageHeader from '../MessageHeader/';

import Sidebar from '../Sidebar/';

import { MainContainer, MessagesContainer } from './ConversationMainStyles';
import { Column } from 'components/settings/payment-details/paymentStyles';

import ConversationBox from '../ProjectDropdown';

const peopleList = [
  {
    name: 'Brandon Kenter',
    job: 'Graphic Designer',
    message: 'Quam Fermentum tellus.',
    unread: true,
    selected: false,
    id: 1,
  },

  {
    name: 'Craig Lubin',
    job: 'Front End Developer',
    message: 'Elit maecenas arcu netus nisl.',
    unread: false,
    selected: false,
    id: 2,
  },
];

const sampleconvo = [
  {
    message:
      'Nec scelerisque enim faucibus aliquam cursus consequat tortor donec imperdiet. Elementum vel arcu blandit euismod. Tellus sed ultrices ultrices amet in scelerisque eu. Pellentesque arcu rhoncus ante congue lorem aliquam egestas. Hac vulputate sed dictum gravida. Bibendum nunc scelerisque est, laoreet venenatis aenean erat. Faucibus adipiscing fusce tristique curabitur dignissim. Ac viverra imperdiet duis quis. Ullamcorper morbi ut consequat, feugiat tortor magna odio pulvinar. Ipsum aliquam arcu a cursus nisl. Nunc scelerisque elit quam est imperdiet morbi lacus. Amet scelerisque at lectus tellus risus ac. Ullamcorper libero nec in faucibus gravida lectus quis odio. Vestibulum dui gravida quis tellus varius purus urna. Velit eget ut consectetur ac nibh fames. Libero magna vestibulum nec sagittis.',
    fromId: 1,
    fromName: 'Brandon Kenter',
    toId: 3,
    roomId: 1,
  },
  {
    message:
      'Aliquam est vitae integer mi nibh dui lorem blandit tempor. Diam nisl pretium ut sed. Sit eget mollis ac vel, enim.',
    fromId: 3,
    fromName: 'Charlie Levin',
    toId: 1,
    roomId: 1,
  },

  {
    message: 'Nibh magnis vivamus morbi dolor.',
    fromId: 1,
    fromName: 'Brandon Kenter',
    toId: 3,
    roomId: 1,
  },
];

const ConversationMain = ({ id }) => {
  const [peoples, setPeoples] = useState(peopleList);
  const [person, setPerson] = useState(null);

  useEffect(() => {
    const selected = peoples.filter((person) => person.id === parseInt(id));

    setPerson(selected[0]);
  }, [id]);

  return (
    <MainContainer>
      <Sidebar peoples={peoples} />

      {id ? (
        <MessagesContainer>
          <MessageHeader {...person} />
          <ConversationBox getconvo={sampleconvo} id={id} />
        </MessagesContainer>
      ) : (
          <h1>Go and talk with the people</h1>
        )}
    </MainContainer>
  );
};

ConversationMain.propTypes = {};

export default ConversationMain;
