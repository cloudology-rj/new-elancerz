import styled from 'styled-components';

import { ButtonPrimary } from '@/components/global/Button';
import { HeaderThree, PreTitle, Body } from '@/components/global/Text';
import Chat from '../../../public/icons/chat.svg';


export const ServiceTitle = styled(HeaderThree)`
  margin-bottom: 4px;
  margin-top: 40px;
`;

export const ServiceImage = styled.div`
  border-radius: 8px;
  height: 200px;
  margin-bottom: 16px;

  div {
    width: 100%;
  }
`;

export const FlexLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: static;
  width: 100%;
  height: 1px;
  background: #eefbfb;
`;

export const ServicesContent = styled.div`
  display: grid;
  place-items: center;
  width: 100%;
`;

export const ButtonSubmit = styled(ButtonPrimary)`
  display: flex;
  justify-content: center;
  width: 100%;
`;

export const ChatIcon = styled(Chat)`
  & path {
    stroke: white;
  }
`;
