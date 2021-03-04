import Image from 'next/image';
import styled from 'styled-components';
import { Body } from '@/components/global/Text';

export const CardContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  background: white;
  padding: 32px;
  border-radius: 4px;
  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.04),
    0px 8px 16px -8px rgba(14, 19, 44, 0.16);
`;

export const CardImage = styled(Image)`
  background: linear-gradient(
    180deg,
    rgba(14, 19, 44, 0.08) 0%,
    rgba(14, 19, 44, 0.32) 100%
  );
  border-radius: 50%;
`;

export const FlexCenter = styled.div`
  display: flex;
  align-items: center;
`;
export const FlexBetween = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

export const CardDescription = styled(Body)`
  color: ${(props) => props.theme.colors.subtleText};
`;

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 12px;
  margin-left: 16px;
`;
