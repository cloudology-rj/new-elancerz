import { useState } from 'react';
import { ChevronDown } from "react-feather"

import {
  TopOptionWrapper,
  Tab,
  Radio,
  BoxLeft,
  InputGroup,
  RadioCircle,
  IconWrapper
} from './TopOptionStyles'

import Dropdown from '@/components/global/Dropdown';

const SELECTED = {
  ACTIVE: true,
  COMPLETED: false,
};


const options = [
  {
    id: 1,
    name: 'Recently updated'
  },
  {
    id: 2,
    name: 'Dollar Amount'
  }
]


const TopOptions = ({ status, setIsActive }) => {


  return (
    <TopOptionWrapper>
      <BoxLeft>
        <Dropdown title={"Recently updated"} options={options} onSetOptions={() => { }} onSetSelected={() => { }} />
      </BoxLeft>
      <Tab>
        <Radio onClick={() => {
          setIsActive(true);
        }}>
          <RadioCircle active={status ? true : false} />
                   Active
                </Radio>
        <Radio onClick={() => {
          setIsActive(false);
        }}>
          <RadioCircle active={!status ? true : false} />
                    Completed
                </Radio>
      </Tab>
    </TopOptionWrapper>
  )
};

export default TopOptions;
