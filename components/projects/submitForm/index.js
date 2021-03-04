import { useRef, useReducer } from 'react';
import { HeaderThree, PreTitle, SmallText } from '@/components/global/Text';
import {
  ButtonPrimary,
  ButtonSecondary,
  ButtonTertiary,
} from '@/components/global/Button';
import TextArea from '@/components/global/TextArea';
import { Flex } from '../../../styles/reusableStyles';

import AttachFile from '../../../public/icons/attach-file.svg';

import {
  ProjectDescription,
  FormGroup,
  ProjectTitle,
} from './submitFormStyles';

const SubmitForm = (props) => {
  const initialFiles = { myfiles: [] };

  function init(initialFiles) {
    return {
      myfiles: initialFiles,
    };
  }

  function reducer(state, action) {
    return init(action.filedata);
  }

  const [state, dispatch] = useReducer(reducer, [], init);
  const inputBtn = useRef(null);

  const setFiles = async (e) => {
    if (e.target.files.length) {
      const arrFiles = await Array.from(e.target.files);
      const files = await arrFiles.map((file, index) => {
        const src = window.URL.createObjectURL(file);
        return { file, id: index, src };
      });
      console.log(files);
      dispatch({ filedata: files });
    }
  };

  return (
    <div>
      <ProjectTitle>Submit work for payment</ProjectTitle>

      <ProjectDescription>
        <PreTitle>Milestone</PreTitle>
        <HeaderThree>Color Design ($10)</HeaderThree>
        <SmallText>Submit by jan 8,2021</SmallText>
      </ProjectDescription>

      <FormGroup></FormGroup>
      <SmallText>Message</SmallText>
      <TextArea rows="10" cols="33" value={props.about} resize="none" />

      <FormGroup>
        <div>
          {state.myfiles.length > 0 ? (
            <Flex gap="6px">
              <AttachFile />
              <SmallText>Attached files ({state.myfiles.length})</SmallText>
            </Flex>
          ) : (
            ''
          )}

          {state.myfiles.map((e, index) => {
            if (index <= 3) {
              return (
                <SmallText
                  key={index}
                  style={{ marginLeft: '24px', color: '#4B4DED' }}
                >
                  {e.file.name}
                </SmallText>
              );
            }
          })}

          <SmallText style={{ marginLeft: '24px', fontSize: '11px' }}>
            {state.myfiles.length > 4 ? `${state.myfiles.length - 4} MORE` : ''}
          </SmallText>
        </div>

        <br />

        <Flex gap="6px">
          <ButtonSecondary onClick={() => inputBtn.current.click()}>
            <Flex gap="6px">
              <AttachFile />
              attach files
            </Flex>
          </ButtonSecondary>
          <input
            ref={inputBtn}
            style={{ display: 'none' }}
            type="file"
            multiple
            onChange={setFiles}
          />
          <SmallText>Max File Size 25mb (Optional)</SmallText>
        </Flex>
      </FormGroup>

      <ButtonPrimary fullWidth>Submit</ButtonPrimary>
      <br />
      <ButtonTertiary isCenter fullWidth>
        Cancel
      </ButtonTertiary>
    </div>
  );
};

SubmitForm.propTypes = {};

export default SubmitForm;
