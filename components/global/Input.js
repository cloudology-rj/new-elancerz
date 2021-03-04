import PropTypes from 'prop-types';
import styled, { css } from 'styled-components';


import SearchIcon from '../../public/icons/search.svg';

const InputStyle = styled.input`
  position: relative;
  outline: none;
  padding: 12px 16px 12px 16px;
  border-radius: 24px;
  height: 48px;
  width: 100%;
  border: 1px solid ${(props) => props.theme.colors.secondaryBrand};
  background-color: ${(props) => props.theme.colors.cloud};
  display: inline-block;

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

  ${(props) =>
    props.transparent &&
    css`
      background: transparent;
    `}

  &:focus {
    outline: none;
    box-shadow: 0px 0px 0px 4px rgba(225, 195, 64, 0.2);
  }

  ${(props) =>
    props.success &&
    css`
      border: 1px solid #31d0aa;
      box-shadow: 0px 0px 0px 4px rgba(49, 208, 170, 0.2);
    `}

  ${(props) =>
    props.error &&
    css`
      border: 1px solid #d03131;
      box-shadow: 0px 0px 0px 4px rgba(208, 49, 49, 0.2);
    `}
`;

const Inputcontainer = styled.div`
  position: relative;
  width:100%;
`;

const IconValidation = styled.img`
  position: absolute;
  right: 18px;
  top: 13px;
  bottom: 18px;
`;

const Search = styled(SearchIcon)`
  position: absolute;
  right: 18px;
  top: 13px;
  bottom: 18px;
  width:24px;
  height:24px;

`;

const Input = ({ error, success, search, name, id, reference, ...props }) => {
  return (
    <Inputcontainer>
      <InputStyle success={success} error={error} {...props} name={name} id={id} ref={reference} />

      {error && (
        <IconValidation src="/icons/error.svg" alt="error message icon" />
      )}

      {success && (
        <IconValidation
          src="/icons/success-check.svg"
          alt="error message icon"
        />
      )}
      {search && (
        <Search />
      )}
    </Inputcontainer>
  );
};

Input.propTypes = {};

export default Input;
