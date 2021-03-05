import Image from 'next/image';
import styled from 'styled-components';
import { Body } from '@/components/global/Text';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: flex-start;
  background: white;
  padding: 32px;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.04),
    0px 8px 16px -8px rgba(14, 19, 44, 0.16);
    cursor:pointer;
`;

export const CardImage = styled(Image)`
  border-radius: 50%;
`;

export const CardImageContainer = styled.div`
  max-width: 160px;
  max-height: 160px;
  position: relative;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`;
export const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 77vw;
`;

export const CardDescription = styled(Body)`
  color: ${(props) => props.theme.colors.subtleText};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: 16px;
  justify-content: flex-start;
`;
