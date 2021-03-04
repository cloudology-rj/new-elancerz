import styled from 'styled-components';

export const Wrapper = styled.div`
    background: #FFFFFF;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.04), 0px 8px 16px -8px rgba(14, 19, 44, 0.16);
    border-radius: 4px;
    padding:32px;
    @media (max-width:480px) {
        padding:24px;
    }
    @media (max-width:991px) {
        margin-bottom:24px;
    }
`;

export const Inquiry = styled.ul`
    
`;


export const Title = styled.h2`
    font-family: Merriweather;
    font-style: normal;
    font-weight: bold;
    font-size: ${(props) => props.theme.fontSizes.s2};
    color: ${(props) => props.theme.colors.dark};
    line-height: 50px;
    letter-spacing: -0.02em;
    margin:20px 0;
    @media (max-width:1199px) {
        font-size: 30px;
        line-height: 36px;
    }
`;

export const Text = styled.p`
    font-size: ${props => props.theme.fontSizes.s4};
    color: ${(props) => props.theme.colors.subtleText};
    font-family: Open Sans;
    font-style: normal;
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 140%;
    margin:30px 0;
    
`;