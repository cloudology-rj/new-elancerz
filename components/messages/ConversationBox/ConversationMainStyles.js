import styled from 'styled-components';

import { HeaderTwo, Body } from '@/components/global/Text';

import mixins from '../../../styles/mixins';

import Calendar from '../../../public/icons/calendar-white.svg';


// right message
export const MessageRightWrapper = styled.blockquote`
flex-basis: auto;
display: flex; 
margin: .5rem;
justify-content: flex-end;
`;

export const MessageRight = styled.div`
background: ${(props) => props.theme.colors.primaryBrand};
padding: 1rem;
border-radius: 24px 8px 24px 24px;
max-width: 100%;
@media ${(props) => props.theme.mediaQueries.laptop} {
  max-width: 90%;
}

overflow-wrap: break-word;
/* text */
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 140%;
color: white;
`;




// left message
export const MessageLeftWrapper = styled.div`
flex-basis: auto;
display: flex; 
margin: .5rem;
justify-content: left;
`;

export const MessageLeft = styled.div`
background: white;
padding: 1rem;
border-radius: 8px 24px 24px 24px;
max-width: 100%;
@media ${(props) => props.theme.mediaQueries.laptop} {
  max-width: 90%;
}
/* text */
font-family: Open Sans;
font-style: normal;
font-weight: 600;
font-size: 16px;
line-height: 140%;
color: ${(props) => props.theme.colors.Text};
`;


export const Messages = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 26rem;
`;


export const MessagesConvo = styled.div`
  background: ${(props) => props.theme.colors.turqoise};
  padding: 50px 30px;
  height: 100vh;
  overflow-y: scroll;
`;



export const MessagesContainer = styled.div`
  display: flex;
  flex-direction: column;
`;



export const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 25% 75%;
  height: 100vh;
   /* overflow: hidden; */
`;




export const MessagesHeader = styled.div`
  position: sticky;
  top: -8px;
  z-index: 100;
  background: ${(props) => props.theme.colors.cloud};

  ${mixins.flexBetween};
  padding: 24px 32px;
`;



export const MessagesFooter = styled.div`
  background: white;
  position: fixed;
  bottom: 0;
  width: 75%;
  padding: .8rem 2rem;
`;

export const Job = styled(Body)`
  color: ${(props) => props.theme.colors.subtleText};
`;


export const SearchbarContaienr = styled.div`
  margin-left: 1rem;
  display: flex;
  align-items: center;
  gap: 1rem;
  width: 100%;
`;

export const ConversationBar = styled.div`
 display: flex;
 flex-direction: row;
 justify-content: space-between;
`;

export const SidebarContainer = styled.div`
  background: #fff;
  padding: 8px;
  position: relative;
  max-height: 100vh;
  overflow-y: scroll;

  /* Hide scrollbar for Chrome, Safari and Opera */
  &::-webkit-scrollbar {
    display: none;
  }

  /* Hide scrollbar for IE, Edge and Firefox */
  & {
    -ms-overflow-style: none; /* IE and Edge */
    scrollbar-width: none; /* Firefox */
  }
`;

export const StickyContainer = styled.div`
  position: sticky;
  top: -8px;
  background-color: #fff;
  z-index: 100;
  padding-bottom: 12px;
`;


