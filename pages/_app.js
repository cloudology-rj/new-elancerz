import { QueryClientProvider, QueryClient } from 'react-query';
import { IsMobileContextProvider } from '../context/IsMobile';

import { AuthProvider } from '../context/AuthProvider';
import { ToastProvider } from '../context/ToastProvider';

import Theme from '../styles/theme';
import '../styles/dropzone.custom.css';
import GoogleFonts from 'next-google-fonts';
import { GlobalStyles } from '../styles/globalStyles';
import '../styles/slider.custom.css';
import 'react-date-picker/dist/DatePicker.css';
import '../styles/datepicker.custom.css';
import "react-loader-spinner/dist/loader/css/react-spinner-loader.css";

const queryClient = new QueryClient();

function MyApp({ Component, pageProps }) {
  return (
    <Theme>
      <IsMobileContextProvider>
        <GlobalStyles />
        <GoogleFonts href="https://fonts.googleapis.com/css2?family=Merriweather:wght@700&family=Open+Sans:wght@600;700&display=swap" />
        <AuthProvider>
          <QueryClientProvider client={queryClient}>
            <ToastProvider>
              <Component {...pageProps} />
            </ToastProvider>
          </QueryClientProvider>
        </AuthProvider>
      </IsMobileContextProvider>
    </Theme>
  );
}

export default MyApp;
