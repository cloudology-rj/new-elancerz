import styled from 'styled-components'
import { ButtonPrimary, ButtonIcon } from '../../global/Button'
import { PreTitle, Bold, SmallText } from '@/components/global/Text'


export const FlexName = styled.div`
display: flex;
justify-content:space-between;
align-items:left;
width:100%;
flex-direction:column;
@media ${(props) => props.theme.mediaQueries.desktop} {
    flex-direction:row;
    width:80%;
}
`;

export const Flex30 = styled.div`
display: flex;
justify-content:left;
align-items:left;
width:100%;
flex-direction:column;
@media ${(props) => props.theme.mediaQueries.desktop} {
    width: 318.1px;
}
`;


export const Flex40 = styled.div`
display: flex;
justify-content:left;
align-items:left;
width:100%;
flex-direction:column;
@media ${(props) => props.theme.mediaQueries.desktop} {
    width:40%;
}
`;

export const Flex50 = styled.div`
display: flex;
justify-content:left;
align-items:left;
width:100%;
flex-direction:column;
@media ${(props) => props.theme.mediaQueries.desktop} {
    width:50%;
}
`;


export const FlexAuto = styled.div`
display: grid;
gap: 1.5rem;
`;

export const EditFormButtons = styled.div`
    display: flex;
    width:100%;
    justify-content: center;
    flex-direction:column-reverse;
    @media ${(props) => props.theme.mediaQueries.desktop} {
        width:auto;
        display: flex;
        flex-direction:row;
        position: absolute;
        top: -.5rem;
        right: 0;
    }
`
export const RowBaseline = styled.div`
display: flex;
justify-content:left;
align-items:left;
flex-direction: column;
width:100%;
@media ${(props) => props.theme.mediaQueries.desktop} {
    width: 318.1px;
    justify-content:left;
}
`;



export const Baseline = styled.div`
display: flex;
justify-content:left;
align-items:center;
`;


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

export const StyledPretitle = styled(PreTitle)`
    text-transform: capitalize !important;
    font-weight: 400;

`
export const StyledBold = styled(Bold)`
    margin-top: 0.5rem;
`
export const StyledSmallText = styled(SmallText)`
    margin-top: 0.3rem;
    font-size: 12px;
`
export const ButtonError = styled(ButtonPrimary)`
    background-color: ${props => props.theme.colors.error};
    margin-top: 2rem;
    margin-bottom: 1rem;
    @media ${props => props.theme.mediaQueries.laptop}{
        margin-bottom: 10rem;
    }
`
export const EditButton = styled(ButtonPrimary)`
    position: absolute;
    top: -.5rem;
    right: 0;
    display: ${({ isMobile }) => isMobile ? "none" : "block"}
`

export const EditIcon = styled(ButtonIcon)`
    position: absolute;
    top: 4.5rem;
    right: 0;
    display: ${({ isMobile }) => isMobile ? "block" : "none"}
`

export const StyledAccountInfo = styled.div`
    position: relative;
    .container{
        margin-top: 1rem;
    }
    .info{
        margin-top: 2rem;
    }
    .phone{
        margin-bottom: 2rem;
    }

    @keyframes float {
        from{
            transform: translateY(500%);
        }
        to{
            transform: translateY(0)
        }
    }
`
