import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Input from '@/components/global/Input';
import { HeaderTwo, HeaderThree, Bold } from '@/components/global/Text';
import styled from 'styled-components';

import ServiceCard from '../../Cards/MessagesServicesCard/MessagesServicesCard';


import ConversationList from '../ConversationList';
import MessageHeader from '../MessageHeader';
import BottomSearchbar from '../BottomSearchbar';


import {
  MainContainer,
  MessagesContainer,
  SidebarContainer,
  StickyContainer,
  MessagesConvo,
  MessageLeft,
  MessageLeftWrapper,
  MessageRight,
  MessageRightWrapper,
  Messages,
} from './ConversationMainStyles';
import { Column } from 'components/settings/payment-details/paymentStyles';


import { createChat } from "../../../api/queries";
import { useQuery, useQueryClient } from "react-query";
import { useAuth } from "../../../context/AuthProvider";

import Modal from '@/components/global/Modal';
import { PayPalScriptProvider, PayPalButtons } from "@paypal/react-paypal-js";


const ConversationBox = ({ token, getconvo, id, route }) => {

  const roomID = getconvo?.id
  const [convo, setconvo] = useState(getconvo)

  const querClient = useQueryClient()


  const { user } = useAuth()

  // return null
  const sendMessage = async () => {

    let element = document.querySelector(".elancerz-convoBox")
    let msg = document.getElementById("msg-input").value
    let cleanMsg = {
      "received_by": id,
      "message": msg.toString(),
      "message_id": roomID
    }
    if (msg != "") {
      await createChat({ cleanMsg, token })
      querClient.invalidateQueries('messagesQuery')
      document.getElementById("msg-input").value = ""
      element.scrollTop = element.scrollHeight;
    }

  }


  const regexElance = /\[elance-service](.*)\[\/elance-service]/



  if (user == null) {
    return null
  } else {




    const [toglleModal, settoglleModal] = useState(false)
    const [orderID, setOrderID] = useState(false);

    useEffect(() => {
      if (route.includes('?quote')) {
        setTimeout(() => {
          settoglleModal(true)
        }, 1000);
      }
    }, [])


    // checkOut()
    function createOrder(data, actions) {
      return actions.order
        .create({
          purchase_units: [
            {
              amount: {
                value: 100,
              },
            },
          ],
        })
        .then((orderID) => {
          setOrderID(orderID);
          settoglleModal(false)
          return orderID;
        });
    }



    const ModalContent = () => {
      try {
        return (
          <>
            <HeaderThree className="card-header">{'Payment Options'}</HeaderThree>
            <br />
            <FlexLine />
            <br />
            <HeaderThree className="card-header">Website Build : $100</HeaderThree>
            <br />
            <PayPalScriptProvider options={{ "client-id": "AR2Xb9zqz1Mo-Ig5ir6HMlJH0cij2j9u_3V8YECWty29XU4Qg7TvHVwPK2-GR8yDnCtNVwClw2a441hK" }}>
              <PayPalButtons createOrder={createOrder} forceReRender={100} style={{ color: "blue", shape: "pill", label: "pay", height: 40 }} />
            </PayPalScriptProvider>
          </>

        )
      } catch (error) {
        return null
      }

    }



    return (
      <>
        {
          getconvo?.chats?.length > 0 ?
            <MessagesConvo className="elancerz-convoBox">
              {/* <Conversation /> */}
              <Messages>
                {getconvo?.chats.map((e, key) => {


                  return (
                    e.user_id != user.id ?
                      <MessageLeftWrapper key={key}>
                        {e?.message?.match(regexElance)?.length > 0 ?

                          <MessageLeft>
                            {e?.message?.replace(/\[elance-service].*/gi, '')}
                            <br />
                            <br />
                            <div onClick={() => settoglleModal(true)}>
                              <ServiceCard id={e?.message?.match(/\[elance-service](.*)\[\/elance-service]/)[1]} />
                            </div>
                          </MessageLeft>
                          :
                          <MessageLeft>{e?.message}</MessageLeft>

                        }

                      </MessageLeftWrapper>
                      :
                      <MessageRightWrapper key={key}>
                        {e?.message?.match(regexElance)?.length > 0 ?
                          <MessageRight>
                            {e?.message?.replace(/\[elance-service].*/gi, '')}
                            <br />
                            <br />
                            <div onClick={() => settoglleModal(true)}>
                              <ServiceCard id={e?.message?.match(/\[elance-service](.*)\[\/elance-service]/)[1]} />
                            </div>
                          </MessageRight>
                          :
                          <MessageRight>{e?.message}</MessageRight>
                        }
                      </MessageRightWrapper>
                  )

                })}



                {orderID ?
                  <>
                    <br></br>
                    <br></br>
                    <Bold style={{ color: '#4CD7D0' }}>New project (Website Build $100) has started</Bold>
                    <FlexLine style={{ background: '#4CD7D0' }} />
                  </>
                  :
                  ""
                }

              </Messages>


              <Modal modalActive={toglleModal} setModalActive={settoglleModal} content={<ModalContent />} />

            </MessagesConvo>
            :
            <></>
        }

        <BottomSearchbar onClick={sendMessage} />

      </>
    );

  }



};

ConversationBox.propTypes = {};

export default ConversationBox;


export const FlexLine = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 0px;
  position: static;
  width: 100%;
  height: 1px;
  background: #EEFBFB;
`