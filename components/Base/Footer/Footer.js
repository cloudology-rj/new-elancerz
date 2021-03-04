import Image from 'next/image';
import PropTypes from 'prop-types';

import { LogoText, Body } from '@/components/global/Text';

import {FooterContainer, FooterFlex} from './FooterStyles';

const Footer = (props) => {
  return (
    <FooterContainer>
      <FooterFlex>
        <Image
          src="/images/LogoWhite.svg"
          width="53px"
          height="37px"
        />
        <LogoText color="white">Elancerz</LogoText>

      </FooterFlex>
      <Body color="white">© 2021 / elancerz. All rights reserved.</Body>
    </FooterContainer>
  );
};

Footer.propTypes = {};

export default Footer;
