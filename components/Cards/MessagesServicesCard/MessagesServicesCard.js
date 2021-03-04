import Image from 'next/image';
import styled from 'styled-components';

import PropTypes from 'prop-types';
import { PreTitle, Bold, HeaderTwo } from '@/components/global/Text';
import { CardContainer, FlexBottom, CardImage, FlexContainer, GrabContainer } from './ProfileServicesCardStyles';

import { getService, fetchServices } from "../../../api/queries";
import { useQuery, useQueryClient } from "react-query";
import { useLocalStorage } from '../../../hooks/useLocalStorage';

const MessagesServicesCard = ({ id }) => {

  if (id != null) {
    const [token, setToken] = useLocalStorage('elancerztoken', null);

    const { isLoading, isError, error, data: srv } = useQuery(
      `serviceCardQuery-${id}`, () => getService(token, id)
    );

    if (isError) {
      return null;
    } else {

      return (
        <GrabContainer>
          <CardContainer>
            <CardImage
              src={'https://via.placeholder.com/500x500.png?text=Service+Image'}
              width="240px"
              height="210px"
            />
            <FlexContainer>
              <Bold>{srv?.service?.name}</Bold>
              <Bold>$ {srv?.service?.price}</Bold>
            </FlexContainer>
            <FlexContainer>
              <PreTitle>{'Category Name'}</PreTitle>
            </FlexContainer>
            <FlexBottom>
              <PreTitle>0  Services Completed</PreTitle>
            </FlexBottom>
            <br />
          </CardContainer>
        </GrabContainer>
      );
    }
  } else {
    return null
  }
};

MessagesServicesCard.propTypes = {};

export default MessagesServicesCard;


export const NotFound = styled.div`
  width: 100%;
  height: 50vh;
  display: grid;
  align-items:center;
  justify-content:center;
  place-items: center;
`;
