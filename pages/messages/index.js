import { useContext } from 'react';

import styled from 'styled-components';
import { IsMobileContext } from '../../context/IsMobile';

import Navbar from '../../components/Base/Navbar/Navbar';
import ConversationMobile from '../../components/messages/ConversationMobile/';
import ConversationMain from '../../components/messages/ConversationMain/';

import { useAuth } from '../../context/AuthProvider';


const index = () => {
  const [isMobile] = useContext(IsMobileContext);
  const { token, user } = useAuth();

  // return null
  return (
    <MainContainer>
      <Navbar fixed={isMobile ? 1 : 0} />

      {isMobile ? (
        <MessagesContainer>
          <ConversationMobile />
        </MessagesContainer>
      ) : (
          <ConversationMain token={token} />
        )}

      <style jsx global>{`
      body {
        overflow: hidden;
      }
    `}</style>
    </MainContainer>
  )
};

index.propTypes = {};

export default index;


export const MessagesContainer = styled.main`
padding: 8px;
`;

export const MainContainer = styled.main`
margin-top: 90px;

body {
  overflow: hidden;
}

@media ${(props) => props.theme.mediaQueries.laptop} {
  margin-top: 0;
}
`;
