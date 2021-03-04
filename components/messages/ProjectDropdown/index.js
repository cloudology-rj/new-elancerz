
import { useState, useEffect } from 'react';
import { HeaderThree, Paragraph, SmallText } from '@/components/global/Text';
import styled from 'styled-components';

import DropToggle from '../../../public/icons/arrowDown.svg';

import { Flex } from '../../../styles/reusableStyles';
import { Job } from '../MessageHeader/MessageHeaderStyles';

import { createProject, getProject } from "../../../api/queries";
import { useQuery, useQueryClient } from "react-query";
import { useAuth } from "../../../context/AuthProvider";

import Modal from '@/components/global/Modal';

import {
  ButtonPrimary,
  ButtonTertiary,
  ButtonSecondary,
  ButtonIcon,
  ButtonDanger,
} from '@/components/global/Button';

// import fro milestones
import Input from '@/components/global/Input';
import {
  FlexForm,
  FlexIconR,
  Flex50L,
  Flex50R,
  FlexTotal,
  Paragraphs,
  FlexRow,
  HeaderContainer
} from './MilestonesStyles';

import Image from 'next/image';

import { useRouter } from 'next/router';
import Loader from "react-loader-spinner";


import { submitProposal } from "../../../api/queries";


const ProjectDropdown = ({ token, getconvo, isLoading }) => {

  const querClient = useQueryClient()
  const { user } = useAuth()
  const [toglleModal, settoglleModal] = useState(false)
  const roomCreator = getconvo?.created_by_user?.id
  const roomReciever = getconvo?.received_by_user?.id
  const [toggleDown, settoggleDown] = useState(false)
  const [Total, setTotal] = useState()
  const [milestoneTotal, setmilestoneTotal] = useState(0)
  const [isSending, setisSending] = useState(false)
  const router = useRouter()


  const [SelectedProjectID, setSelectedProjectID] = useState()

  if (user == null) {
    return null
  } else {


    const { data: prj, isError, error, isLoading: isFetching } = useQuery(
      ['getInvolvedProjects'], () => getProject(token, roomReciever, roomCreator)
    )

    if (isError) {
      return null
    } else {

      if (isFetching) {
        return null
      } else {



        // const toggleMe = () => {
        //   if (user?.id == roomCreator) {
        //     console.info('creator');
        //     const data = {
        //       service: 61
        //     }
        //     console.info('here')
        //     createProject({ token, data })
        //   } else {

        //     settoglleModal(true)
        //   }
        // }




        const ModalContent = () => {


          const ThisMilestones = prj[SelectedProjectID]?.milestones

          // console.log(ThisMilestones)

          let priceCounter = 0

          var prices = new Array(
            ThisMilestones?.map((e, index) => { return e?.price })
          );

          // setmilestoneTotal(prices[0]?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0))

          const countTotal = (val) => {

            var newPrices = new Array(
              ThisMilestones?.map((e) => { return document.getElementById('fee-' + e.id).value })
            );

            const totalx = newPrices[0]?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)
            // console.info('total: ', totalx)
            document.getElementById('total').innerHTML = "$ " + totalx

            // // setmilestoneTotal(total)                

          }

          // --------------------------------------
          // submitproposal
          const sendProposal = async () => {

            // const selectedProfile = service.user_id
            const defaultMessage = `Hi ${getconvo?.created_by_user?.first_name}! Here is the proposal for this project: ${prj[SelectedProjectID]?.name} ($${parseFloat(Total)}).
              [elance-project]${prj[SelectedProjectID]?.id}[/elance-project]`

            var newPrices = await
              ThisMilestones?.map((e) => {
                let obj = {}
                obj['id'] = e?.id
                obj['price'] = document.getElementById('fee-' + e.id).value
                return obj
              })
            // const totalx = newPrices[0]?.reduce((a, b) => parseFloat(a) == NaN ? 0 : parseFloat(a) + parseFloat(b) == NaN ? 0 : parseFloat(b), 0)

            const data = {
              token: token,
              defaultMessage: defaultMessage,
              creator: roomCreator,
              receiver: roomReciever,
              milestones: newPrices,
              room: getconvo?.id
            }

            await submitProposal(data)
            await querClient.invalidateQueries('messagesQuery')
            settoglleModal(false)
            // router.replace(`/messages/${rece}`)

            // var newPrices = new Array(
            //   ThisMilestones?.map((e) => { return document.getElementById('fee-' + e.id).value })
            // );

            // const totalx = newPrices[0]?.reduce((a, b) => parseFloat(a) + parseFloat(b), 0)

            // console.info(defaultMessage, milestoneTotal, totalx)

          }


          return (
            <div>
              <HeaderThree className="card-header" style={{ textAlign: 'center' }}>Create a project</HeaderThree>
              <br />
              <FlexLine />
              <br></br>
              <HeaderThree>{prj[SelectedProjectID]?.name} (${parseFloat(Total)})</HeaderThree>
              <br />
              {/* <div style={{ overflowY: ThisMilestones?.length > 2 ? 'scroll' : 'none', padding: 12, height: 470 }}> */}
              <div style={{ overflowY: 'scroll', padding: 12, height: 470 }}>
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
                          <Flex50R>
                            <Image src={'/icons/dollar-gray.svg'} width={16} height={30} />
                          &emsp;
                          <Input className="FeeMilestone" type="number" name={`fee-${e.id}`} id={`fee-${e.id}`} defaultValue={e.price} onChange={e => countTotal(e.target.value)} />
                          </Flex50R>
                        </div>
                        <FlexIconR>
                          <ButtonIcon onClick={(e) => { }}>
                            <Image src={'/icons/bin-primary.svg'} width={20} height={20} />
                          </ButtonIcon>
                        </FlexIconR>
                        <br />
                        <br />
                        <FlexLine />
                      </FlexForm>

                    )

                  })
                }
                <br />
                <br />
                <div style={{ display: 'grid', gap: 12 }}>
                  <ButtonPrimary>+ Add new milestone</ButtonPrimary>
                </div>

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
              <div style={{ display: 'grid', gap: 12 }}>
                <ButtonPrimary onClick={sendProposal}>Submit Proposal</ButtonPrimary>
                <ButtonTertiary>Cancel</ButtonTertiary>
              </div>

            </div>

          )

        }



        const showProjectMilestones = async (id) => {
          await setTotal(prj[id]?.price)
          await setSelectedProjectID(id)
          settoglleModal(true)
        }



        return (

          <>
            <HeaderContainer>
              <Flex gap="20px" style={{ justifyContent: 'space-between', display: 'flex' }} >
                <Job>{prj?.length} project{prj?.length > 1 ? 's' : ''} </Job>
              </Flex>
              <Flex gap="20px">
                <div style={{ cursor: 'pointer' }} onClick={() => settoggleDown(!toggleDown)}>
                  <DropToggle style={{ transform: toggleDown ? 'rotate(180deg)' : '' }} />
                </div>
              </Flex>
            </HeaderContainer>
            {/* {user?.id != roomCreator ? */}
            {toggleDown ?
              <div style={{ display: 'flex', flexDirection: 'column' }}>
                {
                  roomReciever != user?.id ?
                    prj?.map(e => {
                      return (
                        <HeaderContainer>
                          <Flex gap="20px" style={{ justifyContent: 'space-between', display: 'flex' }} >
                            <SmallText>{e?.name} (${parseFloat(e?.price)})</SmallText>
                          </Flex>
                          <Flex gap="20px">
                            {e?.status != 'pending' ?
                              <ButtonPrimary>View Project</ButtonPrimary>
                              :
                              <SmallText>{e?.status} Request</SmallText>
                            }
                          </Flex>
                        </HeaderContainer>
                      )
                    })
                    :
                    prj?.map((e, index) => {
                      return (
                        <HeaderContainer>
                          <Flex gap="20px" style={{ justifyContent: 'space-between', display: 'flex' }} >
                            <SmallText>{e?.name} (${parseFloat(e?.price)})</SmallText>
                          </Flex>
                          <Flex gap="20px">
                            {e?.status == 'pending' ?
                              <ButtonPrimary onClick={() => showProjectMilestones(index)}>Send Proposal</ButtonPrimary>
                              :
                              <SmallText>{e?.status}</SmallText>
                            }
                          </Flex>
                        </HeaderContainer>
                      )
                    })

                }

                <Modal modalActive={toglleModal} setModalActive={settoglleModal} content={<ModalContent />} />

              </div>

              :
              ''

            }
          </>

        );


      }
    }
  }

};

ProjectDropdown.propTypes = {};

export default ProjectDropdown;


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

