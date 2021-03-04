import { useState, useContext } from 'react';
import PropTypes from 'prop-types';
import { useRouter } from 'next/router';

import { HeaderThree, PreTitle } from '@/components/global/Text';
import { ButtonDanger, ButtonTransparent } from '@/components/global/Button';
import Modal from '@/components/global/Modal';
import SettingsDropdown from '@/components/global/SettingsDropdown';

import { Flex } from '../../../styles/reusableStyles';
import { IsMobileContext } from '../../../context/IsMobile';

import {
  Job,
  HeaderContainer,
  Status,
  FlexLine,
  Paragraphs,
  Name,
  ArrowLeft,
} from './MessageHeaderStyles';

const options = [
  // {
  //   id: 1,
  //   name: 'View Projects',
  // },
  {
    id: 2,
    name: 'Delete Conversation',
  },
];


import { deleteConvo } from "../../../api/queries";
import { useLocalStorage } from '../../../hooks/useLocalStorage';
// import { useQueryClient } from "react-query";


import Loader from "react-loader-spinner";

const MessageHeader = ({ data, id, login, isLoading }) => {

  const [token, setToken] = useLocalStorage('elancerztoken', null);
  const [modalActive, setModalActive] = useState(false);
  const [isMobile] = useContext(IsMobileContext);
  // const queryClient = useQueryClient()
  const router = useRouter();


  const cfname = data?.created_by_user.first_name == null ? 'First Name' : data?.created_by_user.first_name
  const clname = data?.created_by_user.last_name == null ? 'Last Name' : data?.created_by_user.last_name

  const rfname = data?.received_by_user.first_name == null ? 'First Name' : data?.received_by_user.first_name
  const rlname = data?.received_by_user.last_name == null ? 'Last Name' : data?.received_by_user.last_name



  const creator = cfname + ' ' + clname
  const receiver = rfname + ' ' + rlname

  // console.warn(reciever);

  const toggleModal = () => {
    setModalActive(!modalActive);
  };


  const deleteConversation = async () => {
    await deleteConvo(token, data.id)
    setModalActive(false)
    // queryClient.invalidateQueries('messagesQuery')
    router.push('/messages')
  }

  const ModalContent = () => {
    return (
      <>
        <HeaderThree className="card-header">Delete conversation</HeaderThree>
        <br />
        <FlexLine />
        <br />
        <br />
        <Paragraphs>
          Are you sure you want to delete this conversation?
        </Paragraphs>
        <br />
        <br />
        <ButtonDanger
          className="close-account-btn"
          onClick={deleteConversation}
        >
          {' '}
          DELETE
        </ButtonDanger>
        <ButtonTransparent onClick={() => setModalActive(!modalActive)}>
          CANCEL
        </ButtonTransparent>
      </>
    );
  };

  // return null

  if (isLoading) {
    return null
  } else {
    {
      if (data?.length > 0 || data != undefined) {
        return (
          <>
            <HeaderContainer>
              {isMobile ? (
                <>
                  <ArrowLeft onClick={() => router.push('/messages')} />

                  <div>
                    <Flex gap="7px">
                      <Status />
                      <Name>{login == data?.received_by_user?.id ? creator : receiver}</Name>
                      <Job>{'Job title'}</Job>
                    </Flex>
                    <PreTitle>6:29 PM (UTC + 07:30)</PreTitle>
                  </div>
                </>
              ) : (
                  <Flex
                    gap="20px"
                    style={{ justifyContent: 'space-between', display: 'flex' }}
                  >
                    <>
                      <Flex gap="7px">
                        <Status />
                        <Name>{login == data?.received_by_user?.id ? creator : receiver}</Name>
                      </Flex>
                      <Job>{'Job Title'}</Job>
                    </>
                  </Flex>
                )}


              <Modal
                modalActive={modalActive}
                setModalActive={setModalActive}
                content={<ModalContent />}
              />

              <Flex gap="20px">
                {!isMobile && <PreTitle>6:29 PM (UTC + 07:30)</PreTitle>}

                <SettingsDropdown options={options} onSetOptions={toggleModal} />
              </Flex>
            </HeaderContainer>
          </>
        );
      } else {
        return null
      }
    }
  };
}

// MessageHeader.propTypes = {
//   status: PropTypes.bool,
//   job: PropTypes.string,
//   name: PropTypes.string,
//   time: PropTypes.string,
// };

export default MessageHeader;
