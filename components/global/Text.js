import styled from 'styled-components';

export const LogoText = styled.h2`
  font-family: 'Merriweather', sans-serif;
  font-weight: bold;
  font-size: 40px;
  color: ${(props) =>
    props.color === 'white'
      ? props.theme.colors.white
      : props.theme.colors.dark};
`;

export const Lead = styled.p`
  font-family: 'Open sans', sans-serif;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.s3};
  line-height: 32.68px;
  color: ${(props) => props.theme.colors.dark};
  margin-bottom: 16px;
`;

export const Paragraph = styled.p`
  font-family: 'Open sans', sans-serif;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.s4};
  color: ${(props) => props.theme.colors.text};
  margin-bottom: 10px;
  line-height: 22.4px;
`;

export const HeaderTwo = styled.h2`
  font-size: ${(props) => props.theme.fontSizes.s2};
  font-weight: 700;
  font-family: 'Merriweather';
  color: ${(props) => props.theme.colors.dark};
  line-height: 50px;
`;

export const HeaderThree = styled.h3`
  font-weight: 700;
  font-family: 'Merriweather';
  font-size: ${(props) => props.theme.fontSizes.s3};
  line-height: 30px;
`;

export const Subtitle = styled.h3`
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  font-size: ${(props) => props.theme.fontSizes.s3};
  line-height: 33px;

  color: ${(props) => props.theme.colors.text};
`;

export const Body = styled.p`
  font-family: 'Open sans', sans-serif;
  font-size: ${(props) => props.theme.fontSizes.s4};
  font-weight: 600;
  line-height: 22.4px;
  color: ${(props) =>
    props.color === 'white'
      ? props.theme.colors.cloud
      : props.theme.colors.dark};
`;

export const Bold = styled.h4`
  color: ${(props) => props.theme.colors.text};
  font-size: ${(props) => props.theme.fontSizes.s4};
  font-family: 'Open sans', sans-serif;
  font-weight: 700;
  line-height: 21.79px;
`;

export const ErrorMessage = styled(Body)`
  text-align: center;
  color: ${(props) => props.theme.colors.error};
`;

export const PreTitle = styled.h5`
  color: ${(props) => props.theme.colors.subtleText};
  font-size: 12px;
  line-height: 16.34px;
  font-family: 'Open sans', sans-serif;
  font-weight: 700;
  text-transform: uppercase;
`;

export const SmallText = styled.h6`
  font-size: ${(props) => props.theme.fontSizes.s5};
  color: ${(props) => props.theme.colors.subtleText};
  line-height: 19.6px;
  font-family: 'Open sans', sans-serif;
  font-weight: 600;
`;

export const HighlightColor = styled.span`
  color: ${(props) =>
    props.color ? props.color : props.theme.colors.primaryBrand};
  cursor: pointer;
`;

export const Divider = styled(Bold)`
  display: flex;
  align-items: center;
  text-align: center;
  width: 100%;
  text-transform: uppercase;
  color: ${(props) => props.theme.colors.subtleText};

  &::before,
  &::after {
    content: '';
    flex: 1;
    border-bottom: 1px solid #eefbfb;
  }
  &::before {
    margin-right: 15px;
  }
  &::after {
    margin-left: 15px;
  }
`;
