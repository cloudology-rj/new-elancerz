import { useContext } from 'react';
import {useRouter} from 'next/router'
import Image from 'next/image'
import styled from 'styled-components'
import {IsMobileContext} from 'context/IsMobile'
import {ButtonPrimary} from '../../global/Button'

const StyledHeader = styled.div`
    display: flex;
    align-items: center;
    gap: 1rem;
        h1{
            font-size: 1.5rem;
            font-family: 'Merriweather';
            font-weight: 900;
            white-space: no-wrap;
        }
`
const StyledButtonPrimary = styled(ButtonPrimary)`
    border-radius: 50% !important;
    width: 50px;
    height: 50px;
    position: relative;
    padding: 1rem;
    display: ${({isMobile}) => isMobile ? "block" : "none"}
`

export const Header = ({headerText}) => {
    const [isMobile] = useContext(IsMobileContext)
    const router = useRouter()
    return(
        <StyledHeader className="header">
            <StyledButtonPrimary onClick={() => router.push('/settings')} isMobile={isMobile}><Image src="/icons/ArrowPointLeftWhite.svg" width={500} height={500} ></Image></StyledButtonPrimary>
            <h1>{headerText}</h1>
        </StyledHeader>
    )
}