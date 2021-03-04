import { createContext, useState, useEffect } from 'react';

export const IsMobileContext = createContext();

export const IsMobileContextProvider = (props) => {
  const [isMobile, setIsMobile] = useState(true);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      setIsMobile(window.innerWidth <= 768 ? true : false);
    }
  }, []);

  if (typeof window !== 'undefined') {
    window.addEventListener('resize', () => {
      setIsMobile(window.innrWidth <= 768 ? true : false);
    });
  }
  return (
    <IsMobileContext.Provider value={[isMobile]}>
      {props.children}
    </IsMobileContext.Provider>
  );
};
