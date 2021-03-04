import styled from 'styled-components';

export const Wrapper = styled.div`
    background:#fff;
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.04), 0px 8px 16px -8px rgba(14, 19, 44, 0.16);
    border-radius: 4px;
    padding:32px;
    margin-top:16px;
    @media (max-width:480px) {
        padding:24px;
    }
    @media (max-width:991px) {
        margin:32px 0;
    }
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
`;

export const ServiceList = styled.ul`
    padding:0;
    margin-top:32px;
`;

export const EachItem = styled.li`
    display:flex;
    justify-content:space-between;
    align-items:center;
    &:not(:last-child) {
        margin-bottom:25px;
    }
`;

export const BoxLeft = styled.div`
    display:flex;
    align-items:center;
`;

export const ImageWrapper = styled.div`
    position:block;
    min-width:48px;
`;

export const DetailWrapper = styled.div`
   padding-left:16px;
   @media (min-width:992px) and (max-width:1024px) {
       padding:8px;
   }
`;

export const Title = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.theme.fontSizes.s4};
    line-height: 22px;
    color: ${props => props.theme.colors.text};
    margin-bottom:4px;
`;

export const PreTitle = styled.span`
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color: ${props => props.theme.colors.subtleText}
`;

export const BoxRight = styled.div`
   
`;

export const Amount = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: color: ${props => props.theme.fontSizes.s4};
    line-height: 22px;
    color: ${props => props.theme.colors.text}
`;


