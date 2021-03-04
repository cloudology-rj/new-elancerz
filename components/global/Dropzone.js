import PropTypes from 'prop-types';
import Image from 'next/image';
import styled, { css } from 'styled-components';
import Dropzone from 'react-dropzone-uploader';
import { getDroppedOrSelectedFiles } from 'html5-file-selector';

const FlexRow = styled.div`
  display: flex;
  justify-content: center;
  padding: 0.3em;
`;

const FlexColumn = styled.div`
  display: flex;
  flex-direction: column;
  padding: 2em;
`;

const FlatText = styled.p`
  font-family: 'Open sans', sans-serif;
  font-weight: 700;
  font-style: 'normal';
  font-size: ${(props) => props.theme.fontSizes.s5};
  color: ${(props) => props.theme.colors.subtleText};
  margin-bottom: 0.5em;
  line-height: 140%;
  text-align: justify;
  text-justify: inter-word;
`;

const LightText = styled.p`
  font-family: 'Open sans', sans-serif;
  font-weight: 600;
  font-style: 'normal';
  font-size: 11px;
  color: ${(props) => props.theme.colors.subtleText};
  margin-bottom: 0.5em;
  line-height: 16.34px;
  text-align: justify;
  text-justify: inter-word;
`;

const LabelPrimary = styled.label`
  background: ${(props) => props.theme.colors.primaryBrand};
  padding: 18px 24px;

  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.s5};
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 24px;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.align === 'center' &&
    css`
      display: flex;
      margin: 0 auto;
    `}
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}
`;

const SimpleDropzone = (props) => {
  const getUploadParams = ({ meta }) => {
    console.log(meta);
    return { url: 'https://httpbin.org/post' };
  };

  const handleChangeStatus = ({ meta, file }, status) => {
    console.log(status, meta, file);
  };

  const handleSubmit = (files, allFiles) => {
    console.log(files.map((f) => f.meta));
    allFiles.forEach((f) => f.remove());
  };

  const getFilesFromEvent = (e) => {
    return new Promise((resolve) => {
      getDroppedOrSelectedFiles(e).then((chosenFiles) => {
        resolve(chosenFiles.map((f) => f.fileObject));
      });
    });
  };

  const InputChooseFile = ({ accept, onFiles, files, getFilesFromEvent }) => {
    const text = files.length > 0 ? 'ADD MORE FILES' : 'CHOOSE FILES TO UPLOAD';

    return (
      <FlexColumn>
        <FlexRow>
          <Image src={'/icons/upload-gray.svg'} width={64.01} height={53.55} />
        </FlexRow>
        <FlexRow>
          <FlatText>Drag and drop files here</FlatText>
        </FlexRow>
        <FlexRow>
          <FlatText>or</FlatText>
        </FlexRow>
        <FlexRow>
          <LabelPrimary>
            {text}
            <input
              style={{ display: 'none' }}
              type="file"
              accept={accept}
              multiple
              onChange={(e) => {
                getFilesFromEvent(e).then((chosenFiles) => {
                  onFiles(chosenFiles);
                });
              }}
            />
          </LabelPrimary>
        </FlexRow>
        <FlexRow>
          <LightText>MAXIMUM FILE SIZE 5 MB</LightText>
        </FlexRow>
      </FlexColumn>
    );
  };

  return (
    <Dropzone
      getUploadParams={getUploadParams}
      onChangeStatus={handleChangeStatus}
      onSubmit={handleSubmit}
      InputComponent={InputChooseFile}
      getFilesFromEvent={getFilesFromEvent}
      accept="video/*,image/*"
      maxSizeBytes={5242880}
      styles={{
        dropzoneReject: { borderColor: '#F19373', backgroundColor: '#F1BDAB' },
        inputLabel: (files, extra) =>
          extra.reject ? { color: '#A02800' } : {},
      }}
    />
  );
};

SimpleDropzone.propTypes = {};

export default SimpleDropzone;
