import { useState } from 'react';
import { Header } from '../reusables/Header'
import Modal from '@/components/global/Modal'
import { ButtonPrimary } from '@/components/global/Button'
import Input from '@/components/global/Input'
import Dropdown from '../reusables/Dropdown';
import { HeaderThree, Bold } from '@/components/global/Text'
import { StyledSecurity, FlexLine, Paragraphs, Column, Baseline } from './securityStyles'
import Image from 'next/image';

const Security = () => {

    const [modalActive, setModalActive] = useState(false)

    const toggle = () => setModalActive(!modalActive)


    const ChangePassword = () => {
        return (
            <Column>
                <HeaderThree className="card-header">Reset your password</HeaderThree>
                <FlexLine />
                <Paragraphs>Please enter your email address and we’ll send you a link to reset your password.</Paragraphs>
                <Input placeholder="Email Address" type="email" />
                <ButtonPrimary onClick={() => setModalActive(false)}>SUBMIT</ButtonPrimary>
            </Column>
        )
    }

    const SecurityQuestion = () => {
        return (

            <Column>
                <HeaderThree className="card-header">Setup Two-step verification</HeaderThree>
                <FlexLine />
                {/* <Paragraphs>Please enter your email address and we’ll send you a link to reset your password.</Paragraphs> */}
                {/* <Input placeholder="Email Address" /> */}
                <ButtonPrimary onClick={() => setModalActive(false)}>SAVE</ButtonPrimary>
            </Column>
        )
    }


    const TwostepVerification = () => {

        const options = [
            {
                id: 1,
                name: "What is your mother's maiden name?"
            }
        ]


        return (
            <Column>
                <HeaderThree className="card-header">Setup security question</HeaderThree>
                <FlexLine />
                <Dropdown title={"What is your mother's maiden name?"} resetThenSet={() => { }} list={options} />
                <Input placeholder="Enter security answer" />
                <ButtonPrimary onClick={() => setModalActive(false)}>SAVE</ButtonPrimary>
            </Column>
        )
    }

    const [contentActive, setContentActive] = useState(<ChangePassword />)

    const first = () => {
        setContentActive(<ChangePassword />)
        toggle()
    }

    const second = () => {
        setContentActive(<SecurityQuestion />)
        toggle()
    }

    const third = () => {
        setContentActive(<TwostepVerification />)
        toggle()
    }

    return (
        <StyledSecurity>
            <Header headerText="Password and Security" />

            <div>
                <Baseline>
                    <Image src={'/icons/success-check.svg'} width={24} height={24} />
                    &emsp;
                    <Bold>Account password has been set</Bold>
                </Baseline>
                <br /><br />
                <ButtonPrimary onClick={first}>
                    <Baseline>
                        <Image src={'/icons/edit-white.svg'} width={16.5} height={16.5} />
                        &nbsp;
                        CHANGE
                    </Baseline>
                </ButtonPrimary>
            </div>

            <div>
                <Baseline>
                    <Image src={'/icons/info-warning.svg'} width={24} height={24} />
                    &emsp;
                    <Bold>Two-step verifiation have not been set up</Bold>
                </Baseline>
                <br /><br />
                <ButtonPrimary onClick={second}>SETUP</ButtonPrimary>
            </div>

            <div>
                <Baseline>
                    <Image src={'/icons/info-warning.svg'} width={24} height={24} />
                    &emsp;
                    <Bold>Security questions have not been set up</Bold>
                </Baseline>
                <br /><br />
                <ButtonPrimary onClick={third}>SETUP</ButtonPrimary>
            </div>


            <Modal modalActive={modalActive} setModalActive={setModalActive} content={contentActive}>
            </Modal>
        </StyledSecurity>
    )
}

export default Security
