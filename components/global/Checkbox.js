import PropTypes from 'prop-types';
import styled from 'styled-components';

const Checkmark = styled.label`
  cursor: pointer;
  display: block;
  width: 32px;
  height: 32px;
  background: #eceff4;
  box-shadow: inset 0px 2px 2px -1px rgba(14, 19, 44, 0.08);
  border-radius: 8px;
  position: relative;

  &::after {
    content: '';
    position: absolute;
    width: 5px;
    height: 15px;
    border-right: 3px solid #fff;
    border-bottom: 3px solid #fff;
    top: 40%;
    left: 50%;
    transform: translate(-50%, -50%) rotateZ(40deg);
    opacity: 0;
  }
`;

const CheckboxStyle = styled.input`
  display: none;

  &:checked ~ label {
    background: ${(props) => props.theme.colors.primaryBrand};

    &::after {
      opacity: 1;
    }
  }
`;

const Checkbox = (props) => {
  return (
    <div>
      <CheckboxStyle type="checkbox" id="check" {...props} />
      <Checkmark htmlFor="check"></Checkmark>
    </div>
  );
};

// Checkbox.propTypes = {
//   label: PropTypes.string.isRequired,
// };

export default Checkbox;
