import styled from 'styled-components';

export const Wrapper = styled.div`
    border-radius: 4px;
    padding:0 32px 32px 32px;
    @media (max-width:1199px) {
        padding:0 16px 16px 16px;
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

export const TransactionList = styled.ul`
    padding:0;
    margin-top:32px;
`;

export const EachItem = styled.li`
    display:flex;
    justify-content:space-between;
    align-items:center;
    box-shadow: 0px 4px 8px -4px rgba(14, 19, 44, 0.16), 0px 1px 1px rgba(14, 19, 44, 0.04);
    border-radius: 8px;
    background:#fff;
    padding: 16px 32px;
    margin-bottom:16px;
    @media (min-width:992px) and (max-width:1199px) {
        padding: 16px;
    }
    @media (max-width: 480px) {
        padding:16px 24px;
    }
`;

export const BoxLeft = styled.div`
    display:flex;
    align-items:center;
`;

export const ImageWrapper = styled.div`
    position:block;
`;

export const DetailWrapper = styled.div`
   padding-left:16px;
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
    color: ${props => props.theme.colors.subtleText};
    max-width:150px;
    word-wrap: break-word;      
    display:block;
`;

export const BoxRight = styled.div`
   
`;

export const Amount = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size:  ${props => props.theme.fontSizes.s4};
    line-height: 22px;
    color: ${props => props.theme.colors.text}
`;


