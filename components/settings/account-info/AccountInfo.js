import { useState } from 'react';
import { ButtonPrimary, ButtonTransparent, ButtonSecondary } from '@/components/global/Button'
import { HeaderThree, Body } from '@/components/global/Text'
import { Header } from '../reusables/Header'
import Modal from '@/components/global/Modal'
import Image from 'next/image';
import {
    StyledAccountInfo, StyledPretitle, StyledBold,
    StyledSmallText, ButtonError, EditButton,
    FlexLine, Baseline, EditIcon,
    FlexAuto, EditFormButtons,
    Flex30, Flex40, Flex50, RowBaseline, FlexName
} from './AccountInfoStyles'
import Input from '@/components/global/Input'
import TextArea from '@/components/global/TextArea'
import Dropdown from '@/components/global/Dropdown'

// username: "JohnnyWeek"
// first_name: "Johnny"
// last_name: "Weeks"
// email: "test@email.com"
// timezone: null
// address: null
// phone: null

const AccountInfo = ({ isMobile }) => {

    const [modalActive, setModalActive] = useState(false)

    const ModalContent = () => {
        return (
            <>
                <HeaderThree className="card-header">Close Account</HeaderThree>
                <br />
                <FlexLine />
                <Body className='card-body'>Are you sure you want to close your account?</Body>
                <ButtonError className="close-account-btn" onClick={() => setModalActive(!modalActive)}> CLOSE ACCOUNT</ButtonError>
                <ButtonTransparent onClick={() => setModalActive(!modalActive)}>CANCEL</ButtonTransparent>
            </>
        )
    }

    const options = [
        {
            id: 1,
            name: "UTC + 08:00 (Philippines)"
        }
    ]

    const editToggle = () => {
        console.log('toggle');

        const x = document.getElementById('info');
        const y = document.getElementById('editInfo');
        if (x.style.display === "block") {
            x.style.display = "none";
            y.style.display = "block";
        } else {
            x.style.display = "block";
            y.style.display = "none";
        }
    }

    return (
        <StyledAccountInfo>
            <div id="info" style={{ display: "block" }}>
                <EditButton onClick={editToggle} className="edit-btn" isMobile={isMobile}>
                    <Baseline>
                        <Image src={'/icons/edit-white.svg'} width={16.5} height={16.5} />
                        &nbsp;
                        EDIT
                    </Baseline>
                </EditButton>

                <EditIcon onClick={editToggle} className="edit-btn" isMobile={isMobile}>
                    <Baseline>
                        <Image src={'/icons/edit-primary.svg'} width={16.5} height={16.5} />
                    </Baseline>
                </EditIcon>

                <Header headerText="Account Information" />
                <div className="info container">
                    <div className="username">
                        <StyledPretitle>Username</StyledPretitle>
                        <StyledBold>johndoe23</StyledBold>
                    </div>
                    <div className="name container">
                        <StyledPretitle>name</StyledPretitle>
                        <StyledBold>John Doe</StyledBold>
                    </div>
                    <div className="email container">
                        <StyledPretitle>Email</StyledPretitle>
                        <StyledBold>joh******doe@email.com</StyledBold>
                    </div>
                    <div className="timezone container">
                        <StyledPretitle>Timezone</StyledPretitle>
                        <StyledBold>UTC + 08:00 (Philippines)</StyledBold>
                    </div>
                    <div className="address container">
                        <StyledPretitle>Address</StyledPretitle>
                        <StyledBold>Vel pharetra, vivamus id egestas est mauris. Vel justo commodo auctor est nec augue at elit, nunc. Augue eu diam magna ac ut viverra elit, aliquet vestibulum. At pharetra feugiat amet convallis.</StyledBold>
                    </div>
                    <div className="phone container">
                        <StyledPretitle>Phone</StyledPretitle>
                        <StyledBold>+63**********890</StyledBold>
                    </div>

                    <ButtonPrimary>
                        <Baseline>
                            <Image src={'/icons/calendar-white.svg'} width={16.5} height={16.5} />
                            &nbsp;
                            Connect Calendly
                        </Baseline>
                    </ButtonPrimary>
                    <StyledSmallText>Sync your Calendly account to Elancerz calendar</StyledSmallText>
                    <ButtonError onClick={() => setModalActive(!modalActive)}>
                        <Baseline>
                            <Image src={'/icons/bin-white.svg'} width={16.5} height={16.5} />
                            &nbsp;
                            Close Account
                        </Baseline>
                    </ButtonError>
                </div>
            </div>
            <div id="editInfo" style={{ display: "none" }}>
                <FlexAuto>
                    <Flex40>
                        <StyledPretitle>Username</StyledPretitle><br />
                        <Input defaultValue="johndoe23" success />
                    </Flex40>

                    <FlexName>
                        <RowBaseline>
                            <StyledPretitle>First name</StyledPretitle><br />
                            <Input defaultValue="John" />
                        </RowBaseline>
                        <br />
                        <RowBaseline>
                            <StyledPretitle>Last name</StyledPretitle><br />
                            <Input defaultValue="Doe" />
                        </RowBaseline>
                    </FlexName>

                    <Flex30>
                        <StyledPretitle>Email</StyledPretitle><br />
                        <Input defaultValue="joh******doe@email.com" type="email" />
                    </Flex30>

                    <Flex30>
                        <StyledPretitle>Timezone</StyledPretitle><br />
                        <Dropdown title={'UTC + 08:00 (Philippines)'} onSetOptions={() => { }} onSetSelected={() => { }} options={options} />
                    </Flex30>

                    <Flex50>
                        <StyledPretitle>Address</StyledPretitle><br />
                        <TextArea defaultValue="Vel pharetra, vivamus id egestas est mauris. Vel justo commodo auctor est nec augue at elit, nunc. Augue eu diam magna ac ut viverra elit, aliquet vestibulum. At pharetra feugiat amet convallis." />
                    </Flex50>

                    <Flex30>
                        <StyledPretitle>Phone</StyledPretitle><br />
                        <Input defaultValue="+63901234567890" />
                    </Flex30>

                    <EditFormButtons>
                        <ButtonSecondary onClick={editToggle}>CANCEL</ButtonSecondary>
                        &emsp;
                        <ButtonPrimary onClick={editToggle}>SAVE</ButtonPrimary>
                    </EditFormButtons>

                </FlexAuto>
            </div>
            <Modal modalActive={modalActive} setModalActive={setModalActive} content={<ModalContent />}>

            </Modal>
        </StyledAccountInfo >
    )
}

export default AccountInfo
