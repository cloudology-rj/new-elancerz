import styled, { css } from 'styled-components';
import { useRef } from 'react';

import PropTypes from 'prop-types';
import Anch from '../../public/icons/anchor.svg';

import useOutsideClick from '../../hooks/useOutsideClick';

const DropdownList = styled.ul`
  z-index: 100;
  background: ${(props) => props.theme.colors.primaryBrand};
  position: absolute;
  right: 0;
  top: 40px;
  opacity: 0;
  visibility: hidden;

  box-shadow: 0px 4px 8px -4px rgba(14, 19, 44, 0.16),
    0px 1px 1px rgba(14, 19, 44, 0.04);
  border-radius: 8px;
  padding: 17px;
  max-width: 250px;
  transition: 0.6s ease opacity, 0.7s visibility;
  display: flex;
  flex-direction: column;
  @media ${(props) => props.theme.mediaQueries.tablet} {
    width: 320px;
  }

  ${(props) =>
    props.isOpen &&
    css`
      opacity: 1;
      visibility: visible;
    `}
`;

const DropdownListItem = styled.button`
  color: #fff;
  border-radius: 4px;
  border: none;
  background: transparent;
  text-align: left;
  font-family: 'Open sans';
  font-weight: 600;
  background: rgba(255, 255, 255, 0.1);
  padding: 8px;
  word-wrap: break-word;

  &:not(:last-child) {
    margin-bottom: 4px;
  }
`;

const Arrow = styled.div`
  position: absolute;
  width: 21px;
  height: 11px;

  transform: rotate(270deg);
  right: 19px;
  top: 2px;
`;

const Notification = ({ options, isOpen, onOpen }) => {
  const notification = useRef(null);
  useOutsideClick(notification,onOpen);

  return (
    <DropdownList ref={notification} isOpen={isOpen}>
      {options.map(({ message }, i) => (
        <DropdownListItem key={`i-${message}`}>{message}</DropdownListItem>
      ))}
      <Arrow>
        <Anch width={37} height={37} />
      </Arrow>
    </DropdownList>
  );
};

Notification.propTypes = {
  // options: PropTypes.object.isRequierd,
  // onSetOptions: PropTypes.func.isRequired,
  // onSetSelected: PropTypes.func,
};
export default Notification;
