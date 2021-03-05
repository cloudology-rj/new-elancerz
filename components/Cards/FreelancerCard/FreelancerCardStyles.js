import styled, { css } from 'styled-components';
import Image from 'next/image';

export const Name = styled.h3`
  font-family: 'Open sans', sans-serif;
  font-weight: 700;
  font-size: ${(props) => props.theme.fontSizes.s4};
  color: ${(props) => props.theme.colors.text};
  line-height: 16.34px;
  text-align: center;
  margin: 4px 0;
`;

export const CardContainer = styled.div`
  text-align: center;
  padding: 32px;
  background-color: ${(props) => props.theme.colors.white};
  border-radius: 4px;
  cursor: pointer;

  box-shadow: 0px 1px 1px rgba(0, 0, 0, 0.04),
    0px 8px 16px -8px rgba(14, 19, 44, 0.16);

  ${(props) =>
    props.fullWidth
      ? css`
          width: 100%;
        `
      : css`
          max-width: 232px;
        `}
`;
export const CardImage = styled(Image)`
  border-radius: 50%;
`;

export const FlexContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ImageContainer = styled.div`
  position: relative;
`;

export const ImageOverlay = styled.div`
  background: linear-gradient(
    180deg,
    rgba(14, 19, 44, 0.08) 0%,
    rgba(14, 19, 44, 0.32) 100%
  );
  width: 80%;
  height: 97%;
  border-radius: 50%;

  position: absolute;
  top: 50%;
  right: 50%;
  transform: translate(50%, -50%);
`;
