import { useRouter } from 'next/router';
import { useContext } from 'react';
import styled from 'styled-components';

import { IsMobileContext } from '../../context/IsMobile';

import ConversationMain from '../../components/messages/ConversationMain';
import Navbar from '../../components/Base/Navbar/Navbar';
import { useAuth } from '../../context/AuthProvider';
// import Modal from '@/components/global/Modal';

const MessagePage = (props) => {
  const [isMobile] = useContext(IsMobileContext);
  const router = useRouter();

  const { token, user } = useAuth();
  const { id } = router.query;

  if (router.isReady) {
    return (
      <MainContainer>
        <Navbar fixed={isMobile ? 1 : 0} />
        {/* <ConversationMain id={id} /> */}
        <ConversationMain token={token} id={id} route={router.asPath} />

        <style jsx global>{`
          body {
            overflow: hidden;
          }
        `}</style>
      </MainContainer>
    );
  }
  else {
    return null
  }




};

export default MessagePage;

export const MainContainer = styled.main`
  body {
    overflow: hidden;
  }

  @media ${(props) => props.theme.mediaQueries.laptop} {
    margin-top: 0;
  }
`;