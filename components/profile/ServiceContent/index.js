import PropTypes from 'prop-types';
import Image from 'next/image';

import { HeaderThree, PreTitle, Body } from '@/components/global/Text';

import {
  ServiceTitle,
  ServiceImage,
  FlexLine,
  ButtonSubmit,
  ChatIcon
} from './ServiceContentStyles';

import { Flex } from '../../../styles/reusableStyles';

import { createQuote } from "../../../api/queries";
import { useLocalStorage } from '../../../hooks/useLocalStorage';
import { useRouter } from 'next/router';

import Loader from "react-loader-spinner";

const index = ({ service, user, login, close }) => {

  const [token, setToken] = useLocalStorage('elancerztoken', null);
  const router = useRouter()

  const [isLoading, setisLoading] = React.useState(false)

  const getaQuote = async () => {
    try {

      setisLoading(true)

      const selectedProfile = service.user_id
      const defaultMessage = `Hi ${user}, I am interested in this service, Let me know when
      you are available to discuss the details. 
      [elance-service]${service.id}[/elance-service]`

      const dataQuote = {
        selectedProfile: selectedProfile,
        defaultMessage: defaultMessage,
        selectedService: service.id,
        token: token,
      }


      await createQuote(dataQuote)
      await close()
      router.replace(`/messages/${selectedProfile}`)
      
    } catch (error) {
      console.error(error)
    }

  };

  return (
    <div>
      <Flex direction="column" align="center">
        <ServiceTitle className="card-header">{service.name}</ServiceTitle>
        <PreTitle>Category Name</PreTitle>
      </Flex>

      <br />
      <FlexLine />
      <br />
      <ServiceImage>
        <Image
          src={'/images/service.png'}
          alt="service photo"
          width="100%"
          height="200px"
        />
      </ServiceImage>

      <br />
      <Body>{service.description}</Body>
      <br />
      <Flex gap="5px" align="space-between">
        <PreTitle>0 Services Completed</PreTitle>
        <HeaderThree>$ {service.price}</HeaderThree>
      </Flex>
      <br />

      <ButtonSubmit disabled={isLoading} onClick={getaQuote}>
        {isLoading ?
          <div style={{ width: 120, display: 'flex', justifyContent: 'center', alignItems: 'center' }}>
            <Loader style={{ margin: -10 }} type="ThreeDots" color="#fff" height={30} width={30} /*timeout={3000}*/ />
          </div>
          :
          <Flex gap="5px">
            <ChatIcon />
              GET A QOUTE
          </Flex>
        }
      </ButtonSubmit>
    </div>
  );
};

index.propTypes = {};

export default index;
