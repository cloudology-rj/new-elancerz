import { createContext, useState, useEffect, useContext } from 'react';

import {useAuth} from './AuthProvider';

const ToastContext = createContext({});

export const ToastProvider = ({ children }) => {
  const [toast, showToast] = useState(false);
  const [toastData, setToastData] = useState(null);

  const {user} = useAuth();

  useEffect(() => {
    if(user ){
      // if(user && data.email_verified_at){
        reset();
    }
  },[user])

  const reset = () => {
    setToastData(null);
    showToast(false);
  };

  return (
    <ToastContext.Provider
      value={{
        toast,
        showToast,
        toastData,
        setToastData,
        reset,
      }}
    >
      {children}
    </ToastContext.Provider>
  );
};

// returns a user and setUser

export const useToast = () => {
  const { toast, showToast, toastData, setToastData, reset } = useContext(
    ToastContext
  );

  return { toast, showToast, toastData, setToastData, reset };
};
