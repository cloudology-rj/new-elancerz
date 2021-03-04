import styled, { css } from 'styled-components';
import Image from 'next/image';
import mixins from '../../../styles/mixins';

import { Body, SmallText } from '@/components/global/Text';

export const PersonImage = styled(Image)`
  border-radius: 50%;
`;

export const PersonContainer = styled.div`
  ${mixins.flex}
  gap:8px;
  margin-top: 17px;
  padding: 8px;
  border-left: 4px solid white;

  ${(props) =>
    props.unread &&
    css`
      border-left: 4px solid ${(props) => props.theme.colors.primaryBrand};
    `}

  ${(props) =>
    props.selected &&
    css`
      background: ${(props) => props.theme.colors.turqoise};
    `}
  
    cursor: pointer;
`;

export const PersonName = styled(Body)`
  border-right: 1px solid #eceff4;
  color: ${(props) => props.theme.colors.text};
`;

export const PersonSubName = styled(SmallText)`
  color: ${(props) => props.theme.colors.text};

  @media ${(props) => props.theme.mediaQueries.tablet} {
    ${(props) =>
    props.selected &&
    css`
        color: ${(props) => props.theme.colors.subtleText};
      `}
  }
`;

export const Job = styled(SmallText)`
  @media ${(props) => props.theme.mediaQueries.tablet} {
    ${(props) =>
    props.selected &&
    css`
        color: ${(props) => props.theme.colors.subtleText};
      `}
  }
`;

export const Message = styled(SmallText)`
  color: ${(props) => props.theme.colors.text};

  overflow: hidden;
  width: 200px;
  text-overflow: ellipsis;
  white-space: nowrap;

  @media ${(props) => props.theme.mediaQueries.tablet} {
    ${(props) =>
    props.selected &&
    css`
        color: ${(props) => props.theme.colors.subtleText};
      `}
  }
`;
