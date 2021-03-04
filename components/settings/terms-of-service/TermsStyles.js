import styled from 'styled-components'
import {PreTitle, Bold} from '@/components/global/Text'

export const StyledTerms = styled.div`
    margin-bottom: 5rem;
`

export const StyledPretitle = styled(PreTitle)`
    margin-top: 2rem;
`
export const StyledBold = styled(Bold)`
    margin-top: 2rem;
`
export const StyledBody = styled(PreTitle)`
    margin-top: 2rem;
    text-transform: unset;
    font-size: 14px;
    font-weight: 300;
    line-height: 1.5;
    @media ${props => props.theme.mediaQueries.laptop}{
        font-size: 1rem;
    }
`