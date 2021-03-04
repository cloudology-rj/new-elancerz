import styled from 'styled-components';

export const Wrapper = styled.div`
    padding:32px;
    text-align:center;
    @media (max-width:480px) {
        padding:16px;
    }
`;

export const BoxWrapper = styled.div`
    display:flex;
    align-item:center;
    justify-content:space-between;
    
`;

export const BoxLeft = styled.div`

`;


export const BoxRight = styled.div`
    display:flex;
    align-items:center;  
    justify-content:center;
`;

export const Heading = styled.span`
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: ${props => props.theme.colors.text};
    margin-top:30px;
    margin-bottom:10px;
    display:block;
    text-align:left;
`;

export const Value = styled.span`
    font-family: Merriweather;
    font-style: normal;
    font-weight: bold;
    font-size:  ${props => props.theme.fontSizes.s2};
    line-height: 50px;
    letter-spacing: -0.02em;
    color: ${props => props.theme.colors.dark};
    @media (max-width:1199px) {
        font-size: 30px;
        line-height: 36px;
    }
`;

export const Percentage = styled.span`
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size:  ${props => props.theme.fontSizes.s4};
    line-height: 22px;
    color: ${props => props.doRed ? props.theme.colors.error : props.theme.colors.success }};
    margin-left:5px;
`;