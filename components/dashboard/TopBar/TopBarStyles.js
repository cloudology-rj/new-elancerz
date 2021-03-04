import styled from 'styled-components';

export const TopBarWrapper = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
    margin-bottom:32px;
    @media (max-width:768px) {
        flex-direction:column;
    }
`;

export const Heading = styled.h1`
    font-size: ${(props) => props.theme.fontSizes.s2};
    font-weight: 700;
    font-family: 'Merriweather';
    color: ${(props) => props.theme.colors.dark};
    line-height: 50px;
    @media (max-width:768px) {
        margin-bottom:26px;
        align-self:flex-start;
        font-size:30px;
        line-height: 36px;
    }
`;

export const Tab = styled.div`
    color:black;
    display:flex;
`;

