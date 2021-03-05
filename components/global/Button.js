import styled, { css } from 'styled-components';

const button = css`
  border: none;
  background: none;
  cursor: pointer;

  img {
    margin-right: 10px;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonPrimary = styled.button`
  ${button};
  background: ${(props) => props.theme.colors.primaryBrand};
  padding: 12px 24px;

  color: ${(props) => props.theme.colors.white};
  font-size: ${(props) => props.theme.fontSizes.s4};
  font-family: 'Open Sans', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
  border-radius: 24px;
  outline: none;
  cursor: pointer;

  ${(props) =>
    props.align === 'center' &&
    css`
      display: flex;
      margin: 0 auto;
    `}
  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}


    ${(props) =>
    props.isSlider &&
    css`
      ${props.isSlider}
    `}
`;

export const ButtonPrimaryIconOnly = styled(ButtonPrimary)`
  padding: 12px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

export const ButtonTertiary = styled.button`
  ${button};
  font-size: ${(props) => props.theme.fontSizes.s4};
  font-family: 'Open Sans', sans-serif;
  font-weight: bold;
  color: ${(props) =>
    props.gray
      ? props.theme.colors.subtleText
      : props.theme.colors.primaryBrand};
  padding: 12px 24px;
  border-radius: 24px;
  line-height: 21.79px;
  text-transform: uppercase;
  text-align: center;
  transition: 200ms ease;
  display: flex;
  align-items: center;
  justify-content: center;

  ${(props) =>
    props.fullWidth &&
    css`
      width: 100%;
    `}

  ${(props) =>
    props.isCenter &&
    css`
      justify-content: center;
    `}

  &:hover {
    background: ${(props) => props.theme.colors.primaryBrand};
    color: #fff;
  }

  &:focus {
    outline: none;
  }
`;

export const ButtonOpacity = styled.button`
  ${button};
  background: ${(props) => props.theme.colors.turqoise};
  padding: 8px;
  color: ${(props) => props.theme.colors.text};
  border-radius: 24px;
  box-shadow: 0px 6px 2px -4px rgba(14, 19, 44, 0.08),
    inset 0px -1px 0px rgba(14, 19, 44, 3%);

  display: flex;
  align-items: center;
  justify-content: center;

  &:focus {
    outline: none;
  }
`;

export const ButtonPill = styled.button`
  ${button};
  background: ${(props) => props.theme.colors.turqoise};
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
  font-family: 'Open sans';
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 11px 16px;
  border-radius: 19px;

  &:focus {
    outline: none;
  }

  ${(props) =>
    props.isActive === true &&
    css`
      background: ${(props) => props.theme.colors.primaryBrand};
      color: #fff;
    `}
`;

export const ButtonSecondary = styled.button.attrs((props) => ({
  className: props.className,
}))`
  ${button}
  background: ${(props) => props.theme.colors.turqoise};
  padding: 12px 24px 12px 24px;
  border-radius: 22px;
  font-size: ${(props) => props.theme.fontSizes.s4};
  font-family: 'Open sans', sans-serif;
  line-height: 22px;
  text-transform: capitalize;
  font-weight: bold;
  color: ${(props) => props.theme.colors.primaryBrand};

  ${(props) =>
    props.navigate === 'right'
      ? css`
          content: 'hello';
        `
      : css`
          content: 'hi';
        `}

  &:focus {
    outline: none;
  }
`;

export const ButtonTransparent = styled.button`
  ${button};
  background: transparent;
  padding: 12px 24px 12px 24px;
  border-radius: 22px;
  font-size: ${(props) => props.theme.fontSizes.s4};
  font-family: 'Open sans', sans-serif;
  line-height: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.subtleText};
  outline: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const ButtonDanger = styled.button`
  ${button};
  background: ${(props) => props.theme.colors.error};
  padding: 12px 24px 12px 24px;
  border-radius: 22px;
  font-size: ${(props) => props.theme.fontSizes.s4};
  font-family: 'Open sans', sans-serif;
  line-height: 22px;
  font-weight: bold;
  color: ${(props) => props.theme.colors.white};
  outline: none;
  cursor: pointer;

  &:focus {
    outline: none;
  }
`;

export const ButtonIcon = styled.button`
  ${button};
  background: ${(props) => props.theme.colors.turqoise};
  color: ${(props) => props.theme.colors.text};
  text-transform: uppercase;
  font-family: 'Open sans';
  font-weight: 600;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 1em;
  border-radius: 50%;
  box-shadow: 0px 6px 2px -4px rgba(14, 19, 44, 0.08),
    inset 0px -1px 0px rgba(14, 19, 44, 3%);
  ${(props) =>
    props.isActive === true &&
    css`
      background: ${(props) => props.theme.colors.primaryBrand};
      color: #fff;
    `}

  &:focus {
    outline: none;
  }
`;

export const ButtonTab = styled.button`
  ${button};
  padding: 12px 24px;
  border-radius: 24px;
  font-family: Open Sans;
  font-style: normal;
  font-weight: bold;
  font-size: ${(props) => props.theme.fontSizes.s5};
  line-height: 22px;
  display: flex;
  align-items: center;
  letter-spacing: 0.04em;
  text-transform: uppercase;

  @media ${(props) => props.theme.mediaQueries.laptop} {
    font-size: ${(props) => props.theme.fontSizes.s4};
  }

  ${(props) => {
    if (props.active) {
      return `
                background: ${props.theme.colors.primaryBrand};
                color:#fff;
                box-shadow: 0px 6px 2px -4px rgba(14, 19, 44, 0.08), inset 0px -1px 0px rgba(14, 19, 44, 0.24);
            `;
    } else {
      return `
                background: ${props.theme.colors.turqoise};
                color: ${props.theme.colors.primaryBrand};
            `;
    }
  }}
`;
export const ButtonFacebook = styled(ButtonPrimary)`
display:flex;
justify-content:center;
align-items:center;
background:#4266ad;

`