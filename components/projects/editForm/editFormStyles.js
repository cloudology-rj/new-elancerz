import styled from 'styled-components';

import Calendar from '../../../public/icons/calendar-white.svg';

import { ButtonIcon } from '@/components/global/Button';
import Input from '@/components/global/Input';

export const CalendarIcon = styled(Calendar)`
  & path {
    stroke: ${(props) => props.theme.colors.primaryBrand};
  }
`;

export const EditFormContainer = styled.div`
  display: flex;
  padding: 30px 0;
  border-bottom: 1px solid ${(props) => props.theme.colors.accent};
  flex-direction: column;
  @media ${(props) => props.theme.mediaQueries.tablet} {
    flex-direction: row;
    justify-content: space-between;
    flex-wrap: wrap;
  }
`;

export const FormContainer = styled.div`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    grid-template-columns: 0.5fr 1fr;
  }

  @media ${(props) => props.theme.mediaQueries.laptop} {
    grid-template-columns: 1fr 1fr;
  }
`;

export const ButtonContainer = styled.div`
  margin-top: 8px;
  align-self: center;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    align-self: flex-start;
  }
`;

export const ButtonForm = styled(ButtonIcon)`
  padding: 8px !important;
`;

export const EditInput = styled(Input)`
  width: 95%;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    width: 100%;
  }

  @media ${(props) => props.theme.mediaQueries.laptop} {
    width: 320px;
  }
`;
