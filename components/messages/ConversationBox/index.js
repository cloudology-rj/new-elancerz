import PropTypes from 'prop-types';
import { useState, useEffect } from 'react';
import Input from '@/components/global/Input';
import { HeaderTwo, HeaderThree, Bold, PreTitle, Paragraph } from '@/components/global/Text';
import styled from 'styled-components';
import ServiceCard from '../../Cards/MessagesServicesCard/MessagesServicesCard';
import HiEmote from '../../../public/icons/waving-hand.svg';
import HiEmoteWhite from '../../../public/icons/waving-hand-white.svg';
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

import {
  ButtonPrimary,
  ButtonTertiary,
  ButtonSecondary,
  ButtonIcon,
  ButtonDanger,
  ButtonTransparent
} from '@/components/global/Button';

import { Flex } from '../../../styles/reusableStyles';
import { HeaderContainer, Job } from '../MessageHeader/MessageHeaderStyles';

import { Column } from 'components/settings/payment-details/paymentStyles';


import { useQuery, useQueryClient } from "react-query";
import { useAuth } from "../../../context/AuthProvider";
import Modal from '@/components/global/Modal';

import Loader from "react-loader-spinner";

import { createChat, counterProposal, getsingleProject, startProject, submitProposal } from "../../../api/queries";
import apiCall from '../../../helpers/fetch';




// import for milestones modal
import {
  FlexForm,
  FlexIconR,
  Flex50L,
  Flex50R,
  FlexTotal,
  Paragraphs,
  FlexRow
} from '../ProjectDropdown/MilestonesStyles';

import Image from 'next/image';
import { useRouter } from 'next/router';

import ProjectDropDown from '../../messages/ProjectDropdown';


const ConversationBox = ({ token, getconvo, id, route, isLoading }) => {

  const roomID = getconvo?.id
  const [convo, setconvo] = useState(getconvo)
  const querClient = useQueryClient()
  const { user } = useAuth()
  const [toglleModal, settoglleModal] = useState(false)
  const [orderID, setOrderID] = useState(false);
  const roomCreator = getconvo?.created_by_user?.id
  const roomReciever = getconvo?.received_by_user?.id

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
  const regexProj = /\[elance-project](.*)\[\/elance-project]/
  const regexStart = /\[elance-start](.*)\[\/elance-start]/
  const regexCounter = /\[elance-counterBy](.*)\[\/elance-counterBy]/
  const regexHi = "[elance-emote]wave[/elance-emote]"

  if (user == null) {
    return null
  } else {

    const [toglleModal, settoglleModal] = useState(false)
    const [orderID, setOrderID] = useState(false);
    const [SelectedProj, setSelectedProj] = useState();
    const [milestoneTotal, setmilestoneTotal] = useState(0)
    const [Total, setTotal] = useState()
    const [isLessThan, setisLessThan] = useState(false)
    const [isCounter, setisCounter] = useState(false)




    let firstMsg
    let currentServiceID

    let firstMsgProj
    let currentProjID

    let firstMsgStart

    let counterBy = []


    const [canStart, setcanStart] = useState(true)






    // modal
    const ModalContent = () => {

      try {

        // project details
        let prj = SelectedProj?.project_details
        // project milestones
        const ThisMilestones = SelectedProj?.milestones
        // project status
        let isStarted = prj?.status == 'pending' ? false : true


        let priceCounter = 0



        // func coun total on change
        const countTotal = (val) => {

          var prices = new Array(
            ThisMilestones?.map((e, index) => { return e?.price })
          );

          var newPrices = new Array(
            ThisMilestones?.map((e) => { return document.getElementById('fee-' + e.id).value })
          );

          const totalx = newPrices[0]?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
          const totalorig = prices[0]?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
          document.getElementById('total').innerHTML = "$ " + totalx

          let res = true

          for (let index = 0; index < ThisMilestones.length; index++) {
            if (document.getElementById('fee-' + ThisMilestones[index].id).value != ThisMilestones[index].price) {
              res = false
              break
            }
          }

          if (res) {
            console.info('start project')
            document.getElementById('customBtn').innerHTML = 'START PROJECT'
            // setisLessThan(false)
            // setisCounter(false)
          } else {


            // check if orig price is less than current price
            if (totalorig > totalx) {
              // setisLessThan(true)
              // setisCounter(false)              
              // show your danger submit proposal btn with message that it is less than the orig proposal
              document.getElementById('msgRed').innerHTML = `Total amount to be paid ($${totalx}) will be less than the initial proposal ($${totalorig})`
              document.getElementById('customBtn').innerHTML = 'SUBMIT PROPOSAL'
              document.getElementById('customBtn').style.background = '#D03131'

            } else {
              // counter offer
              // setisLessThan(false)
              // setisCounter(true)
              // console.info('submit proposal')
              document.getElementById('customBtn').innerHTML = 'SUBMIT PROPOSAL'
              document.getElementById('customBtn').style.background = '#4CD7D0'
            }
          }

        }


        // func send
        // check what to do on submit
        const arraysMatch = async (id) => {

          // start a project?
          if (document.getElementById('customBtn').innerHTML.toUpperCase() == 'START PROJECT') {

            await startProject(token, prj?.id)
            const startdefaultMessage = `NEW PROJECT (${prj?.name} $${prj?.price}) HAS STARTED [elance-start]${prj?.id}[/elance-start]`
            const cleanMsg = {
              "message": startdefaultMessage,
              "message_id": roomID
            }
            await createChat({ token, cleanMsg })
            await querClient.invalidateQueries('messagesQuery')
            await querClient.invalidateQueries('getInvolvedProjects')
            settoglleModal(false)

          }
          // submit proposal counter offer
          else if (document.getElementById('customBtn').innerHTML.toUpperCase() == 'SUBMIT PROPOSAL') {


            // check if who where to send
            const toChat = roomCreator == user?.id ? getconvo?.received_by_user?.first_name : getconvo?.created_by_user?.first_name
            const defaultMessage = `Hi ${toChat && !null}! I changed some details on the proposal. Let me know what you think.
                [elance-project]${prj?.id}[/elance-project] [elance-counterBy]${user?.id}[/elance-counterBy]`

            var newPrices = await
              ThisMilestones?.map((e) => {
                let obj = {}
                obj['id'] = e?.id
                obj['price'] = document.getElementById('fee-' + e.id).value
                return obj
              })

            const data = {
              token: token,
              defaultMessage: defaultMessage,
              creator: roomCreator,
              receiver: roomReciever,
              milestones: newPrices,
              room: roomID
            }

            await submitProposal(data)
            await querClient.invalidateQueries('messagesQuery')
            settoglleModal(false)

          }

        };


        // loop card milestones
        return (
          <>
            <HeaderThree className="card-header" style={{ textAlign: 'center' }}>Create a project</HeaderThree>
            <br />
            <FlexLine />
            <br></br>
            <HeaderThree>{prj.name} (${parseFloat(Total)})</HeaderThree>
            <br />
            <div style={{ overflowY: ThisMilestones.length > 2 ? 'scroll' : 'none', padding: 12, height: 470 }}>
              {


                ThisMilestones?.map((e, index) => {


                  priceCounter = priceCounter + 1

                  // if (priceCounter == ThisMilestones.length) { setmilestoneTotal(prices[0]?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)) }

                  return (

                    <FlexForm key={index} id={'milestone-' + e.id}>
                      <br />
                      <Input disabled={true} name={`name-${e.id}`} id={`name-${e.id}`} defaultValue={e.name} />
                      <div style={{ display: 'flex', width: '100%' }}>
                        <Flex50L>
                          <Input disabled={true} name={`date-${e.id}`} id={`date-${e.id}`} defaultValue={new Date(e.created_at).toLocaleDateString('en-US').toString()} />
                          &emsp;
                          <ButtonIcon>
                            <Image src={'/icons/calendar-primary.svg'} width={20} height={20} />
                          </ButtonIcon>
                        </Flex50L>
                        {
                          !isStarted ?
                            <Flex50R>
                              <Image src={'/icons/dollar-gray.svg'} width={16} height={30} />
                              &emsp;
                              <Input className="FeeMilestone" type="number" name={`fee-${e.id}`} id={`fee-${e.id}`} defaultValue={e.price} onChange={e => countTotal(e.target.value)} />
                            </Flex50R>
                            :
                            <Flex50R>
                              <Image src={'/icons/dollar-gray.svg'} width={16} height={30} />
                              &emsp;
                              <Input disabled={true} type="number" name={`Rfee-${e.id}`} id={`Rfee-${e.id}`} defaultValue={e.price} />
                            </Flex50R>
                        }
                      </div>
                      {
                        !isStarted &&
                        <FlexIconR>
                          <ButtonIcon onClick={(e) => { }}>
                            <Image src={'/icons/bin-primary.svg'} width={20} height={20} />
                          </ButtonIcon>
                        </FlexIconR>
                      }
                      <br />
                      <br />
                      <FlexLine />
                    </FlexForm>

                  )

                })
              }
              <br />
              <br />
              {
                !isStarted &&
                <div style={{ display: 'grid', gap: 12 }}>
                  <ButtonPrimary>+ Add new milestone</ButtonPrimary>
                </div>
              }

            </div>
            <br />
            <br />
            <FlexLine />
            <br />
            <FlexRow>
              <FlexTotal>
                <Paragraph>Total</Paragraph>
              </FlexTotal>
              <FlexTotal>
                <HeaderThree id="total">${parseFloat(milestoneTotal)}</HeaderThree>
              </FlexTotal>
            </FlexRow>
            <br />
            {
              !isStarted &&
              <div style={{ display: 'grid', gap: 12 }}>
                <Paragraphs id="msgRed"></Paragraphs>
                {
                  canStart &&
                  <>
                    <ButtonPrimary disabled={isStarted} id="customBtn" onClick={arraysMatch}>Start Project</ButtonPrimary>
                    <ButtonTertiary>Cancel</ButtonTertiary>
                  </>
                }
              </div>
            }

          </>
        )

      } catch (error) {
        // console.info(error)
        return null
      }

    }



    // open modalllllllll
    const viewProposal = async (proj, direction) => {


      const p = await getsingleProject(token, proj)
      await setTotal(p?.project_details?.price)
      setSelectedProj(p)

      console.info('can start:', canStart)
      // get who is current login
      let login = user?.id

      if (login == roomReciever && direction == "Right") {
        console.info('you click from ', direction, 'you are reciver')
        setcanStart(false)
      }
      else if (login == roomReciever && direction == "Left") {
        console.info('you click from ', direction, 'you are reciver')
        setcanStart(true)
      }
      else if (login == roomCreator && direction == "Right") {
        console.info('you click from ', direction, 'you are creator')
        setcanStart(false)
      }
      else if (login == roomCreator && direction == "Left") {
        console.info('you click from ', direction, 'you are creator')
        setcanStart(true)
      }


      let isStarted = await p?.project_details?.status == 'pending' ? false : true

      // if pending open the modal
      !isStarted && settoglleModal(true)
    }


    if (isLoading) {
      return (
        <div style={{ height: '50%', display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
          <Loader type="ThreeDots" color="#4CD7D0" height={50} width={50} /*timeout={3000}*/ />
        </div>
      )
    } else {


      return (
        <>

          {
            getconvo?.chats?.length > 0 ?


              <>
                <ProjectDropDown isLoading={isLoading} token={token} getconvo={getconvo} id={id} route={route} />
                <MessagesConvo className="elancerz-convoBox">
                  {/* <Conversation /> */}
                  <Messages>
                    {getconvo?.chats.map((e, key) => {

                      // let firstMsg
                      // let currentServiceID

                      // let firstMsgProj
                      // let currentProjID

                      // let firstMsgStart

                      // interested service
                      if (e?.message?.match(regexElance)?.length > 0) {
                        currentServiceID = e?.message?.match(/\[elance-service](.*)\[\/elance-service]/)[1]
                        firstMsg = e?.message?.replace(/\[elance-service].*/gi, '')
                      }


                      // project start send proposal
                      if (e?.message?.match(regexProj)?.length > 0) {

                        if (e?.message?.match(regexCounter)?.length > 0) {
                          counterBy.push(e?.message?.match(regexCounter)[1])
                          console.info('counter')
                        } else {
                          currentProjID = e?.message?.match(regexProj)[1]
                          firstMsgProj = e?.message?.replace(/\[elance-project].*/gi, '')
                          console.info('first send')
                        }
                      }


                      // const regexCounter = /\[elance-counterBy](.*)\[\/elance-counterBy]/



                      // started project
                      if (e?.message?.match(regexStart)?.length > 0) {
                        // currentServiceID = e?.message?.match(/\[elance-service](.*)\[\/elance-service]/)[1]
                        firstMsgStart = e?.message?.replace(/\[elance-start].*/gi, '')
                      }



                      return (

                        // started project
                        e?.message?.match(regexStart)?.length > 0 ?
                          (
                            <div key={key + '-Start'} style={{ paddingTop: 32, borderBottom: "1px solid #4CD7D0" }}>
                              <Paragraphs style={{ color: "#4CD7D0" }}>{firstMsgStart.toUpperCase()}</Paragraphs>
                            </div>
                          )
                          :

                          // message left
                          (e.user_id != user.id ?
                            <MessageLeftWrapper key={key}>
                              {

                                e?.message?.match(regexElance)?.length > 0 ?
                                  <MessageLeft key={key + '-Lscard'}>
                                    {firstMsg}<br /><br />
                                    <div>
                                      <ServiceCard id={currentServiceID} />
                                    </div>
                                  </MessageLeft>
                                  :

                                  e?.message?.match(regexProj)?.length > 0 ?
                                    <MessageLeft key={key + '-LProjbtn'}>
                                      {firstMsgProj}<br /><br />
                                      <div>
                                        <ButtonPrimary className="ProposalBtn" onClick={() => viewProposal(currentProjID, 'Left')}>View Proposal</ButtonPrimary>
                                      </div>
                                    </MessageLeft>
                                    :

                                    e?.message == regexHi ?
                                      <MessageLeft>
                                        <HiEmote height={50} width={50} />
                                      </MessageLeft>
                                      :
                                      <MessageLeft>{e?.message}</MessageLeft>

                              }

                            </MessageLeftWrapper>
                            :

                            // message right
                            <MessageRightWrapper key={key}>
                              {

                                e?.message?.match(regexElance)?.length > 0 ?
                                  <MessageRight key={key + '-Lscard'}>
                                    {firstMsg}<br /><br />
                                    <div>
                                      <ServiceCard id={currentServiceID} />
                                    </div>
                                  </MessageRight>
                                  :

                                  e?.message?.match(regexProj)?.length > 0 ?
                                    <MessageRight key={key + '-LProjbtn'}>
                                      {firstMsgProj}<br /><br />
                                      <div>
                                        <ButtonSecondary onClick={() => viewProposal(currentProjID, 'Right')} style={{ background: '#fff', textTransform: 'uppercase' }}>View Proposal</ButtonSecondary>
                                      </div>
                                    </MessageRight>
                                    :

                                    e?.message == regexHi ?
                                      <MessageRight>
                                        <HiEmoteWhite height={50} width={50} />
                                      </MessageRight>
                                      :
                                      <MessageRight>{e?.message}</MessageRight>

                              }
                            </MessageRightWrapper>
                          )
                      )

                    })}



                    {orderID ?
                      <div style={{ marginTop: 32, marginBottom: 32 }}>
                        <Bold style={{ color: '#4CD7D0' }}>New project (Website Build $100) has started</Bold>
                        <FlexLine style={{ background: '#4CD7D0' }} />
                      </div>
                      :
                      ""
                    }

                  </Messages>

                </MessagesConvo>

                <Modal modalActive={toglleModal} setModalActive={settoglleModal} content={<ModalContent />} />

              </>
              :
              <></>
          }

          <BottomSearchbar onClick={sendMessage} />

        </>
      );

    }

  }

}

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
