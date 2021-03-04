import Image from 'next/image';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import { LogoText, HeaderThree } from '@/components/global/Text';
import Logo from '../../public/images/LogoDark.svg';

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

// Shows Only Image and Logo but Big text
export const LogoBig = (props) => {
  return (
    <LogoContainer>
      <Logo />
      <LogoText color="dark">Elancerz</LogoText>
    </LogoContainer>
  );
};

// Shows Only Image and Logo but small text
export const LogoSmall = () => {
  return (
    <LogoContainer>
      <Logo />
      <HeaderThree>Elancerz</HeaderThree>
    </LogoContainer>
  );
};

// Shows Only Image
export const LogoImage = () => {
  return (
    <Logo />
  );
};
