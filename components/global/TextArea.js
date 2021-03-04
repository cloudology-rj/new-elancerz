import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';

const TextAreaStyle = styled.textarea`
resize: none;
  padding: 12px 16px 12px 16px;
  border-radius: 24px;
  height: 9em;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.secondaryBrand};
  background-color: ${(props) => props.theme.colors.cloud};
  display: inline-block;
  font-family: 'Open sans', sans-serif;
  ::placeholder,
  ::-webkit-input-placeholder {
    font-size: ${(props) => props.theme.fontSizes.s4};
    color: ${(props) => props.theme.colors.subtleText};
  }
  :-ms-input-placeholder {
    font-size: ${(props) => props.theme.fontSizes.s4};
    color: ${(props) => props.theme.colors.subtleText};
    padding: 12px 16px;
  }

  ${props => props.transparent && css`
    background:transparent;
  
  `}

  
  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 4px rgba(225, 195, 64, 0.2);
  }
  
`;
const TextArea = ({ name, id, reference, placeHolder, defaultValue, props,onChange }) => {
  return <TextAreaStyle onChange={onChange} placeHolder={placeHolder} defaultValue={defaultValue} {...props} name={name} id={id} ref={reference}></TextAreaStyle>;
};

TextArea.propTypes = {};

export default TextArea;
