import { useRef, useReducer, useState } from 'react'
import { HeaderThree, PreTitle, SmallText } from '@/components/global/Text';
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
} from '@/components/global/Button';
import TextArea from '@/components/global/TextArea';
import { Flex } from '../../../styles/reusableStyles';

import AttachFile from '../../../public/icons/attach-file.svg';
import DownloadFile from '../../../public/icons/download.svg';


import {
  ProjectDescription,
  FormGroup,
  ProjectTitle,
} from './submitFormStyles';


const mockupdata = [
  {
    file: {
      name: "IMG_2345.png (452 KB)",
    },
    id: 1,
  },

  {
    file: {
      name: "IMG_2345.png (452 KB)",
    },
    id: 1,
  },

  {
    file: {
      name: "IMG_2345.png (452 KB)",
    },
    id: 1,
  },

  {
    file: {
      name: "IMG_2345.png (452 KB)",
    },
    id: 1,
  },

  {
    file: {
      name: "IMG_2345.png (452 KB)",
    },
    id: 1,
  },

  {
    file: {
      name: "IMG_2345.png (452 KB)",
    },
    id: 1,
  },

  {
    file: {
      name: "IMG_2345.png (452 KB)",
    },
    id: 1,
  },

  {
    file: {
      name: "IMG_2345.png (452 KB)",
    },
    id: 1,
  },
]

const ViewWork = ({switchPage}) => {


  const initialFiles = { myfiles: [] };

  function init(initialFiles) {
    return {
      myfiles: initialFiles,
    };
  }

  function reducer(state, action) {
    return init(action.filedata)
  }

  const [state, dispatch] = useReducer(reducer, mockupdata, init);
  const inputBtn = useRef(null);


  const setFiles = async (e) => {
    if (e.target.files.length) {
      const arrFiles = await Array.from(e.target.files)
      const files = await arrFiles.map((file, index) => {
        const src = window.URL.createObjectURL(file)
        return { file, id: index, src }
      })
      dispatch({ filedata: files })
    }

  }




  console.log(switchPage);

  

  return (

    <>
      

          <div>
            <ProjectTitle>View work for payment</ProjectTitle>

            <ProjectDescription>
              <PreTitle>Milestone</PreTitle>
              <HeaderThree>Color Design ($10)</HeaderThree>
              <SmallText>Submit by jan 8,2021</SmallText>
            </ProjectDescription>

            <FormGroup></FormGroup>
            <SmallText>About</SmallText>
            <TextArea disabled rows="10" cols="33" value="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh dui, mattis odio sit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nibh dui, mattis odio sit." resize="none" />

            <FormGroup>

              <div>

                {state.myfiles.length > 0 ?
                  <Flex gap="6px">
                    <AttachFile />
                    <SmallText>Attached files ({state.myfiles.length})</SmallText>
                  </Flex>
                  : ''}

                {state.myfiles.map((e, index) => {
                  if (index <= 3) {
                    return (
                      <SmallText key={index} style={{ marginLeft: '24px', color: '#4B4DED' }}>{e.file.name}</SmallText>
                    )
                  }
                })}

                <SmallText style={{ marginLeft: '24px', fontSize: '11px' }}>{state.myfiles.length > 4 ? `${state.myfiles.length - 4} MORE` : ''}</SmallText>
              </div>

              <br />

              <Flex gap="6px">
                <ButtonSecondary onClick={() => inputBtn.current.click()}>
                  <Flex gap="6px">
                    <DownloadFile />
                    DOWNLOAD
                  </Flex>
                </ButtonSecondary>
                <input ref={inputBtn} style={{ display: 'none' }} type="file" multiple onChange={setFiles} />
                {/* <SmallText>Max File Size 25mb (Optional)</SmallText> */}
              </Flex>
            </FormGroup>

            <ButtonPrimary fullWidth onClick={() => switchPage()}>APPROVE</ButtonPrimary>
            <ButtonTertiary isCenter fullWidth>
              DECLINE
            </ButtonTertiary>


          </div>

      
    </>
  );
};

ViewWork.propTypes = {};

export default ViewWork;
