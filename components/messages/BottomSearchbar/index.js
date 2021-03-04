import { useState } from 'react';
import PropTypes from 'prop-types';

import Input from '@/components/global/Input';
import { ButtonTransparent } from '@/components/global/Button';

import { Flex } from '../../../styles/reusableStyles';

import {
  ConversationBar,
  SearchbarContainer,
  PlusIcon,
  CalendarIcon,
  ImageIcon,
  CubeIcon,
  SubmitIcon
} from './BottomSearchbarStyles';

const BottomSearchbar = (props) => {

  const [state, setstate] = useState(false)



  let show = 'none'

  const toggleIcons = () => {
    console.log('');
    setstate(!state)
  }

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      // console.log('You enter:', document.getElementById("msg-submit"));
      document.getElementById("msg-submit").click()

    }
  }

  return (
    <ConversationBar>
      <Flex gap="15px">
        <div style={{ display: state ? "none" : "block" }} >
          <PlusIcon onClick={toggleIcons} />
        </div>
        <CalendarIcon style={{ display: state ? "block" : "none" }} />
        <ImageIcon style={{ display: state ? "block" : "none" }} />
        <CubeIcon style={{ display: state ? "block" : "none" }} />
      </Flex>

      <div style={{ display: state ? "none" : "block" }} >
        <Flex gap="15px">
          <CalendarIcon />
          <ImageIcon />
          <CubeIcon />
        </Flex>
      </div>


      <SearchbarContainer>
        {/* <Flex gap="15px"> */}
        <Input id={"msg-input"} onKeyPress={handleKeyDown} type="text" placeholder="Type your message here" />
        <ButtonTransparent id={"msg-submit"} {...props}><SubmitIcon /></ButtonTransparent>
        {/* </Flex> */}
      </SearchbarContainer>
    </ConversationBar>
  );
};

BottomSearchbar.propTypes = {};

export default BottomSearchbar;
