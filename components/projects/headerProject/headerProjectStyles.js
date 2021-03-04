import styled from 'styled-components';
import mixins from '../../../styles/mixins';

import ChatIcon from '../../../public/icons/chat.svg';

import { HeaderThree, SmallText } from '@/components/global/Text';


import {
  ButtonPrimaryIconOnly,
  ButtonSecondary,
  ButtonPrimary,
} from '@/components/global/Button';


export const ProjectFlex = styled.div`
  ${mixins.flex};
  flex-direction: column;

  gap: 16px;
  @media ${(props) => props.theme.mediaQueries.laptop} {
    flex-direction: row;
  }
`;
export const FlexHeader = styled.div`
  ${mixins.flex};
  gap: 8px;
  margin-bottom: 20px;
`;

export const ProjectDescription = styled.div`
  ${mixins.flexBetween}
`;

export const UserFlex = styled.div`
  ${mixins.flex}
  margin: 10px 0;
`;

export const ButtonFlex = styled.div`
  ${mixins.flexBetween};
`;

export const Chatsvg = styled(ChatIcon)`
  & > * {
    stroke: ${(props) => props.theme.colors.primaryBrand};
  }
  margin-right: 7px;
`;

export const PriceText = styled(HeaderThree)`
  @media ${(props) => props.theme.mediaQueries.tablet} {
    font-size: ${(props) => props.theme.fontSizes.s2};
  }
`;



export const ProjectDate = styled(SmallText)`
  margin-bottom: 32px;
  margin-top:10px;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    margin-bottom: 40px;
  }
`;



export const MainTitle = styled(HeaderThree)`
  @media ${(props) => props.theme.mediaQueries.tablet} {
    font-size: ${(props) => props.theme.fontSizes.s2};
  }
`;



export const MobileBtn = styled.div`
  align-items: bsaeline;
  display: block;
  @media ${(props) => props.theme.mediaQueries.laptop} {
    display: none;
  }
`;



export const DesktopBtn = styled.div`
  align-items: bsaeline;
  display: none;
  @media ${(props) => props.theme.mediaQueries.laptop} {
    display: block;
  }
`;
