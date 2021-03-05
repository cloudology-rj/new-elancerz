import PropTypes from 'prop-types';
import { ButtonPrimary, ButtonTransparent } from '@/components/global/Button';
import { SendQuote } from './getQuoteStyles';
import { Flex } from '../../../styles/reusableStyles';
import { createRoomOrChat } from '../../../api/queries';
import { useRouter } from 'next/router';

const getQuote = ({ isPublic, status, id, login, token }) => {

  const router = useRouter();


  const createRoom = async () => {

    const selectedProfile = id
    const defaultMessage = `[elance-emote]wave[/elance-emote]`

    const dataQuote = {
      selectedProfile: selectedProfile,
      defaultMessage: defaultMessage,
      token: token,
      loginUser: login
    }
    const res = await createRoomOrChat(dataQuote)
    router.push(`/messages/${res?.id}`)

  }


  return (
    !isPublic ?
      <div style={{ display: 'grid', width: '100%' }} onClick={createRoom}>
        <ButtonPrimary>
          <Flex gap="5px" align="center">
            <SendQuote white={true} />
          SEND A MESSAGE
        </Flex>
        </ButtonPrimary>
      </div>

      :
      <ButtonPrimary>
        <Flex gap="5px" align="center">
          <SendQuote white={true} />
          SEND A MESSAGE
        </Flex>
      </ButtonPrimary>
  )
};


// return status ? (
//   <ButtonPrimary onCLick={gocreateRoom}>
//     <Flex gap="5px" align="center">
//       <SendQuote white={true} />
//       SEND A MESSAGEs
//     </Flex>
//   </ButtonPrimary>
// ) : isPublic ? (
//   <ButtonPrimary>
//     <Flex gap="5px" align="center">
//       <SendQuote white={true} />
//       SEND A MESSAGE
//     </Flex>
//   </ButtonPrimary>
// ) : (
//       <ButtonTransparent onmou>
//         <Flex gap="5px" align="center">
//           <SendQuote />
//           SEND A MESSAGE
//         </Flex>
//       </ButtonTransparent>
//     );
// };

getQuote.propTypes = {
  isPublic: PropTypes.bool,
  view: PropTypes.string,
};

export default getQuote;
