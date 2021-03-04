import { ThemeProvider } from 'styled-components';

const theme = {
  mediaQueries: {
    mobile: 'only screen and (min-width: 320px)',
    tablet: 'only screen and (min-width: 481px)',
    laptop: 'only screen and (min-width: 769px)',
    desktop: 'only screen and (min-width: 1025px)',
    largeScreen: 'only screen and (min-width: 1201px)',
  },

  fontSizes: {
    s1: '64px',
    s2: '40px',
    s3: '24px',
    s4: '16px',
    s5: '14px',
    s6: '10px',
  },
  colors: {
    primaryBrand: '#4CD7D0',
    secondaryBrand: '#E1C340',
    tertiaryBrand: '#A4E8E0',
    quarternaryBrand: '#F8EA8C',
    linkText: '#4B4DED',
    dark: '#0E132C',
    success: '#31D0AA',
    error: '#D03131',
    text: '#4A5268',
    subtleText: '#8C91A1',
    accent: '#ECEFF4',
    cloud: '#FAFBFE',
    turqoise: '#EEFBFB',
    mustard: '#FCF9EC',
    white: ' #FFFFFF',
    error: ' #D03131',
  },
};

const Theme = ({ children }) => (
  <ThemeProvider theme={theme}>{children}</ThemeProvider>
);

export default Theme;
