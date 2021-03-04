import styled from 'styled-components';
import Image from 'next/image';
import mixins from '../../../styles/mixins';
import { Body } from '@/components/global/Text';
export const CardImage = styled.img`
  align-self: center;
  border-radius: 50%;
  // flex-basis: 10%;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    margin-right: 5px;
    align-self: flex-start;
  }
`;

export const FlexItems = styled.div`
  ${mixins.flex}

  margin:7px 0;
  justify-content: center;
  gap: 7px;
`;

export const CardContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    align-items: start;
  }
`;

export const CardDescription = styled(Body)`
  margin-top: 10px;
  color: ${(props) => props.theme.colors.subtleText};
  text-align: justify;
`;

export const ReviewContainer = styled.div`
  padding: 24px;
  background: #ffffff;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.04),
    0px 8px 16px -8px rgba(14, 19, 44, 0.16);
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  text-align: center;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    flex-direction: row;
    gap: 15px;
  }
`;
