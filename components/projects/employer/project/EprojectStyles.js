import styled from 'styled-components';


export const ProjectWrapper = styled.div`
    
`;

export const EachProject = styled.div`
    
    box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.04), 0px 8px 16px -8px rgba(14, 19, 44, 0.16);
    border-radius: 4px;
    padding: 32px 48px;
    margin-bottom:32px;

    ${props => {
        if(props.completed) {
            return `
                background: ${props.theme.colors.mustard};
            `
        } else {
            return `
                background: #FFFFFF;
            `
        }
    }}

    @media (max-width: 607px) {
    width: 95%;
    margin-left: -20px;
    }

    @media (max-width: 480px) {
    width: 95%;
    margin-left: -10px;
    }
`;

export const Head = styled.div`
    display:flex;
    justify-content:space-between;
    width:100%;
    align-items:center;
    margin-bottom:22px;
`;

export const Left = styled.div`
    display:flex;
    justify-content:space-between;
    align-items:center;
`;


export const Title = styled.h2`
    font-family: Merriweather;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.theme.fontSizes.s3};
    line-height: 30px;
    letter-spacing: -0.02em;
    color:${props => props.theme.colors.dark};
    margin-right:32px;

    &:after {
        content:'';
        height:50px;
        width: 0;
        position:relative;
        right:-16px;
        border-left:1px solid #ECEFF4;
        z-index:2;
        
    }
`;

export const Name = styled.div`
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 16px;
    line-height: 22px;
    margin-left:16px;
    color:${props => props.theme.colors.text};
`;

export const Right = styled.div`
 
`;

export const Amount = styled.div`
    font-family: Merriweather;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.theme.fontSizes.s2};
    line-height: 50px;
    text-align: right;
    letter-spacing: -0.02em;
    color:${props => props.theme.colors.dark};
`;

export const Body = styled.div`
    
`;

export const Date = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: ${props => props.theme.fontSizes.s5};
    line-height: 140%;
    color:${props => props.theme.colors.text};
    margin-bottom:16px;
`;

export const Content = styled.p`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: ${props => props.theme.fontSizes.s4};
    line-height: 140%;
    color:${props => props.theme.colors.subtleText};
    border-bottom:1px solid ${props => props.theme.colors.accent};
    padding-bottom:16px;
    margin-bottom:16px;
`;

export const Bottom = styled.div`
    display:flex;
    justify-content:space-between;
`;

export const Box = styled.div`
    display:flex;
    align-items:center;
    justify-content: center;
`;

export const Milestone = styled.div`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: 12px;
    line-height: 140%;
    color:${props => props.theme.colors.text};
    letter-spacing: 0.03em;
    text-transform: uppercase;
`;

export const MilesAmount = styled.span`
    font-family: Open Sans;
    font-style: normal;
    font-weight: 600;
    font-size: ${props => props.theme.fontSizes.s3};
   
    margin-left:8px;

    ${props => {
        if(props.completed) {
            return `
                color:${props => props.theme.colors.text};
            `
        } else {
            return `
                color:${props => props.theme.colors.subtleText};
            `
        }
    }}
`;


export const Status = styled.div`
    margin:16px 0 40px;
    display:flex;
    justify-content:flex-start;
    align-items:center;
`;

export const StatusTitle = styled.h3`
    font-family: Merriweather;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.theme.fontSizes.s3};
    line-height: 30px;
    letter-spacing: -0.02em;
    color:${props => props.theme.colors.dark};
    margin:0 8px;
`;

export const StatusLabel = styled.span`
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: 12px;
    line-height: 16px;
    letter-spacing: 0.03em;
    text-transform: uppercase;
    color:${props => props.theme.colors.text};
    background:${props => props.theme.colors.turqoise};
    padding: 12px 16px;
    border-radius:50px;
`;

export const Button = styled.button`
    
    border:0;
    outline:none;
    padding:12px 24px;
    border-radius: 24px;
    font-family: Open Sans;
    font-style: normal;
    font-weight: bold;
    font-size: ${props => props.theme.fontSizes.s4};
    line-height: 22px;
    display: flex;
    align-items: center;
    letter-spacing: 0.04em;
    text-transform: uppercase;
    cursor:pointer;

    ${props => {
        if(props.active) {
            return `
                background: ${ props.theme.colors.primaryBrand };
                color:#fff;
                box-shadow: 0px 6px 2px -4px rgba(14, 19, 44, 0.08), inset 0px -1px 0px rgba(14, 19, 44, 0.24);
            `
        } else {
            return `
                background: ${ props.theme.colors.turqoise};
                color: ${ props.theme.colors.primaryBrand};
            `
        }
    }}

    & span {
        margin-left:4px;
    }
`;

export const ActiveWrapper = styled.div`
   
`;

export const CompletedWrapper = styled.div`
   
`;
