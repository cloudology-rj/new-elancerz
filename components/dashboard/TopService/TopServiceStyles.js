import styled from 'styled-components';

export const Wrapper = styled.div`
    background: ${props => props.theme.colors.turqoise};
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.04), 0px 8px 16px -8px rgba(14, 19, 44, 0.16);
    border-radius: 4px;
    padding:32px;
    display:flex;
    align-items:center;
    @media (max-width:480px) {
        padding:24px;
    }
`;

export const BoxLeft = styled.div`

`;


export const BoxRight = styled.div`
   padding-left: 30px;
`;

export const Title = styled.h3`
    font-family: Merriweather;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.theme.fontSizes.s3};
    line-height: 30px;
    letter-spacing: -0.02em;
    margin-bottom:25px;
    @media (max-width:480px) {
        max-width:100px;
    }
`;