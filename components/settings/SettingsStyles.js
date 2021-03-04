import styled from 'styled-components'

export const FlexLine = styled.div`
    border: 1px solid #ECEFF4;
    width: 90%;
    height: 0px;
    left: 0px;
`


export const SettingsGrid = styled.div`
    display: grid;
    min-height: 30rem;
    grid-template-columns: 1fr;
    font-family: Open Sans;
    margin-top: 1rem;
    padding: 0;
    @media ${props => props.theme.mediaQueries.mobile}{
        grid-template-columns: 1fr;
        grid-gap: 0;
        margin-top: -.5rem;
        margin-left: -.5rem;
    }
    @media ${props => props.theme.mediaQueries.laptop}{
        grid-template-columns: 0.3fr 1fr;
        grid-gap: 2rem;
    }
    a{
        text-decoration: none;
        color: ${props => props.theme.colors.text};
    }
    `
export const Sections = styled.div`
    width: 100%;
    height: 50vh;
    padding: 1.5rem 1.5rem 1.5rem 3rem;
    margin-bottom:2rem;
    @media ${props => props.theme.mediaQueries.laptop}{
       margin-top: 0;
    }
    .header{
        font-family: "Merriweather";
        font-size: 1.8rem;
        font-weight: 700;
    }
    .section-list{
        margin-top: 4rem;
        @media ${props => props.theme.mediaQueries.laptop}{
        margin-top: 2rem;
        }
        li{
            margin-top: 2rem;
            cursor: pointer;
            white-space: nowrap;
        }
    }
    .active{
        span{
        position: relative;
        &::before{
            content: '';
            position: absolute;
            width: 100%;
            height: 2px;
            bottom: -3px;
            left: 0;
            background-color: ${props => props.theme.colors.primaryBrand};
        }
    }
    }
`
export const Details = styled.div`
    width: 100%;
    background-color: ${props => props.theme.colors.cloud};
    padding: 2rem 0 1rem 0 ;
    @media ${props => props.theme.mediaQueries.mobile}{
        margin: 0;
        height:auto;
        padding: 1.5rem;
    }
    @media ${props => props.theme.mediaQueries.laptop}{
        width: 100%;
        padding: 2rem 2rem .5rem 0;
        overflow: hidden;
    }
`

export const Child = styled.div`
    width: 100%;
    @media ${props => props.theme.mediaQueries.mobile}{
        margin: 0;
        height:auto;
        padding-bottom: 4rem;
    }

    @media ${props => props.theme.mediaQueries.laptop}{
        margin-top: -2rem;
        padding: 2rem;
        max-height: 100vh;
        overflow-y: scroll;
        padding-right: 17px; /* Increase/decrease this value for cross-browser compatibility */
        box-sizing: content-box; /* So the width will be 100% + 17px */
    }

    
`