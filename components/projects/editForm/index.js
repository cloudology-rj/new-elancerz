import PropTypes from 'prop-types';
import { useState } from 'react';
import DatePicker from 'react-date-picker/dist/entry.nostyle';

import { ButtonIcon } from '@/components/global/Button';
import { HeaderThree } from '@/components/global/Text';
import { Flex } from '../../../styles/reusableStyles';

import ResetIcon from '../../../public/icons/reset.svg';
import Bin from '../../../public/icons/bin.svg';

import {
  CalendarIcon,
  EditFormContainer,
  FormContainer,
  ButtonContainer,
  ButtonForm,
  EditInput,
} from './editFormStyles';

import { SwitchIconStatus } from '../Milestone/status';

const EditForm = ({ status, date, price, task }) => {
  const [value, onChange] = useState(new Date());

  return (
    <EditFormContainer>
      <FormContainer>
        <Flex gap="10px">
          {SwitchIconStatus(status)}
          <EditInput type="text" value={task} />
        </Flex>

        <Flex gap="10px">
          <HeaderThree>$</HeaderThree>
          <EditInput width='20%' type="number" value={price} />
        </Flex>

        <Flex gap="10px">
          <CalendarIcon />
          <DatePicker onChange={onChange} value={value} />
        </Flex>
      </FormContainer>

      <ButtonContainer>
        <Flex gap="8px">
          <ButtonForm>
            <ResetIcon />
          </ButtonForm>
          <ButtonForm>
            <Bin />
          </ButtonForm>
        </Flex>
      </ButtonContainer>
    </EditFormContainer>
  );
};

EditForm.propTypes = {};

export default EditForm;
