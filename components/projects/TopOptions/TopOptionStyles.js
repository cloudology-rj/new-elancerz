import styled from 'styled-components';

export const TopOptionWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    width:100%;
    margin-bottom: 1em;
    gap: 1em;
    flex-basis: 51%;
    flex-wrap: wrap;
`;

export const Tab = styled.div`
    color:black;
    display:flex;
`;

export const Radio = styled.span`
    display:flex;
    align-items:center;
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    color:#8C91A2;
    cursor:pointer;
    
    &:first-child {
        margin-right:10px;
    }
`;

export const RadioCircle = styled.div`
    width:32px;
    height:32px;
    border-radius:50%;
    margin-right:4px;
    position:relative;

    &:before {
        content:'';
        width:16px;
        height: 16px;
        position:absolute;
        top:50%;
        left:50%;
        transform:translate(-50%, -50%);
        border-radius:50%;
    }

    ${props => {
        if (props.active) {
            return `
                border:2px solid ${props.theme.colors.primaryBrand};
                background:#fff;

                &:before {
                    background:${props.theme.colors.primaryBrand};
                }
            `
        } else {
            return `
                border:2px solid ${props.theme.colors.accent};
                background: ${props.theme.colors.accent};
            `
        }
    }}
`;


export const BoxLeft = styled.div`
    width: 100%;
    @media ${(props) => props.theme.mediaQueries.tablet} {
        width: 50%;
    }
`;

export const InputGroup = styled.div`
   position:relative;
    & input {
        padding: 12px 16px;
        background: ${props => props.theme.colors.cloud};
        color: ${props => props.theme.colors.text};
        font-family: Open Sans;
        font-style: normal;
        font-weight: 600;
        font-size: 14px;
        width:320px;
        line-height: 140%;
        border: 1px solid #E1C340;
        box-sizing: border-box;
        box-shadow: inset 0px 2px 2px -1px rgba(14, 19, 44, 0.16);
        border-radius: 24px;
        outline:none;

        &:hover, &:focus {
            outline:none;
        }
    }
    
`;

export const IconWrapper = styled.div`
   position:absolute;
   pointer-events:none;
   top:11px;
   right:14px;
`;



