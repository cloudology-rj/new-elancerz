import styled, { css } from 'styled-components';
import Image from 'next/image';
import Input from '@/components/global/Input';

import  mixins from '../../../styles/mixins';

export const HeaderContainer = styled.header`
  display: flex;
  justify-content: space-between;
  padding: 24px 0;

  ${(props) =>
    props.fixed === true &&
    css`
      ${(props) => console.log(props.fixed)};

      position: fixed;
      top: 0;
      left: 0;
      background: #fff;
      width: 100%;
      padding-left: 15px;
      padding-right: 15px;
    `}
`;

export const HamburgerMenu = styled.button`
  border: none;
  background: none;
`;



export const NavbarLeft = styled.div`
${mixins.flex}
gap:20px;

@media ${(props) => props.theme.mediaQueries.tablet}{
  gap:40px;
}


`

export const NavbarInput = styled(Input)`
  display: none;
  background: transparent;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    display: block;
    width: 280px;
  }

  @media ${(props) => props.theme.mediaQueries.laptop} {
    display: block;
    width: 480px;
  }
`;


export const SearchContent = styled.div`
  position: relative;
`;
