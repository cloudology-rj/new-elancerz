import { useState } from 'react';
import Image from 'next/image';
import { Header } from '../reusables/Header'
import { HeaderThree, Bold } from '@/components/global/Text'
import { ButtonPrimary, ButtonTransparent } from '@/components/global/Button'
import Input from '@/components/global/Input'
import Radio from '@/components/global/Radio'
import Modal from '@/components/global/Modal'
import { StyledPayment, FlexLine, Paragraphs, Column, Baseline, SmallColumn, Flex50, Flex30 } from './paymentStyles'

const Payment = () => {
    const [modalActive, setModalActive] = useState(false)

    const [selected, setSelected] = useState(true)

    const [pselected, setPselected] = useState(true)

    const toggleMethod = () => {
        setSelected(!selected)
    }

    const toggleMethodwithPaypal = () => {
        console.log(pselected);
        setPselected(!pselected)
    }


    const ModalContent = () => {
        return (
            <Column>
                <HeaderThree className="card-header">Choose a payment method</HeaderThree>
                <FlexLine />

                <Flex50 style={{ padding: "0 3rem 0 0" }}>
                    <Radio id={"paymentCard"} changed={toggleMethod} value={"paymentCard"} isSelected={selected === true ? "selected" : ""} label={"Payment Card"} />
                    <Image src={'/icons/visa.svg'} width={100} height={24} />
                </Flex50>


                {selected === true ?
                    <>
                        <Flex50>
                            <SmallColumn>
                                <Paragraphs>Card number</Paragraphs>
                                <Input placeholder="Enter card number" />
                            </SmallColumn>
                        </Flex50>

                        <Flex50>

                            <Flex50>
                                <SmallColumn>
                                    <Paragraphs>First name</Paragraphs>
                                    <Input placeholder="Enter first name" />
                                </SmallColumn>
                            </Flex50>
                            <Flex50>
                                <SmallColumn>
                                    <Paragraphs>Last name</Paragraphs>
                                    <Input placeholder="Enter last name" />
                                </SmallColumn>
                            </Flex50>
                        </Flex50>

                        <Flex50>
                            <Flex50>
                                <SmallColumn>
                                    <Paragraphs>Expires on</Paragraphs>
                                    <Flex30>
                                        <Input placeholder="MM" />
                                    &emsp;
                                    <Input placeholder="YY" />
                                    </Flex30>
                                </SmallColumn>
                            </Flex50>
                            <Flex50>

                                <SmallColumn>
                                    <Paragraphs>Security code</Paragraphs>
                                    <Input placeholder="Enter CVV" />
                                </SmallColumn>
                            </Flex50>
                        </Flex50>
                    </>
                    :
                    <></>
                }

                <Flex50 style={{ padding: "0 3rem 0 0" }}>
                    <Radio id={"paypal"} changed={toggleMethod} value={"paypal"} isSelected={selected === false ? "selected" : ""} label={"Paypal"} />
                    <Image src={'/icons/paypal.svg'} width={20} height={24} />
                </Flex50>

                {selected === false ?
                    <ButtonPrimary  onClick={toggle}>LOGIN WITH PAYPAL</ButtonPrimary>
                    :
                    <ButtonPrimary onClick={toggle}>CONTINUE</ButtonPrimary>
                }
                <ButtonTransparent onClick={toggle}>BACK</ButtonTransparent>
            </Column>
        )
    }

    const toggle = () => {
        setModalActive(!modalActive)
    }


    return (
        <StyledPayment>
            <Header headerText="Payment Details" />
            <div>
                {selected === false ?
                    <>
                        <Bold>Choose a default payment method</Bold>

                        <Baseline>
                            <Radio
                                type={"icon"}
                                id={"ppal"}
                                changed={toggleMethodwithPaypal}
                                value={"ppal"}
                                isSelected={pselected === true ? "selected" : ""}
                                label={<Image src={'/icons/paypal.svg'} width={55} height={24} />}
                            />
                            &emsp;
                            <Bold>joh********asd@gmail.com</Bold>
                        </Baseline>

                        <Baseline>
                            <Radio
                                type={"icon"}
                                id={"vcard"}
                                changed={toggleMethodwithPaypal}
                                value={"vcard"}
                                isSelected={pselected === false ? "selected" : ""}
                                label={<Image src={'/icons/visa-icon.svg'} width={55} height={24} />}
                            />
                            &emsp;
                            <Bold>01********15</Bold>
                        </Baseline>


                    </>
                    :
                    <Bold>You have not setup any payment method yet.</Bold>
                }



                <br /><br />
                <ButtonPrimary onClick={toggle}>
                    <Baseline>
                        <Image src={'/icons/add-white.svg'} width={16.5} height={16.5} />
                        &nbsp;
                        Add payment method
                    </Baseline>
                </ButtonPrimary>
            </div>
            <Modal modalActive={modalActive} setModalActive={setModalActive} content={<ModalContent />} />
        </StyledPayment>
    )
}

export default Payment
