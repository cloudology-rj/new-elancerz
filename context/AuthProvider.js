import { createContext, useState, useEffect, useContext } from 'react';
import Router from 'next/router';

import apiCall from '../helpers/fetch';

import firebase from 'firebase/app';
import { firebaseConfig, auth,googleProvider } from '../firebase/firebase';


import { useLocalStorage } from '../hooks/useLocalStorage';

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

const AuthContext = createContext({ user: null });

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useLocalStorage('elancerztoken', null);
  const [user, setUser] = useState(null);
  const [isLogin, setIsLogin] = useState(false);

  useEffect(() => {
    const unsubscribe = firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        setIsLogin(true);
      }
    });

    // Cleanup subscription on unmount

    return () => unsubscribe();
  }, []);

  useEffect(() => {
    if (token) {
      setIsLogin(true);
      apiCall('/user/me', 'POST', token, null, null)
        .then((res) => {
          setUser(res);
        })
        .catch((err) => console.log(err));
    } else{
      logout()
    }
  }, [token]);

  const logout = () => {
    const user = firebase.auth().currentUser;
    if (user) {
      firebase.auth().signOut();
    }
    window.localStorage.clear();
    setIsLogin(false);
    setToken(null)
    Router.push('/');
  };





  const signInWithGoogle = (redirect) =>
    auth.signInWithPopup(googleProvider).then((data) => {
      const {
        isNewUser,
        profile: { email, name },
      } = data.additionalUserInfo;

      const password = '12345678';

      if (isNewUser) {
        apiCall('/user/register', 'POST', '', {
          email,
          username: name,
          password,
        })
          .then((res) => {
            console.log('Account created through firebase ');
            redirect()
          })
          .catch((err) => console.log('ERROR IN SIGNING UP ', err));
      } else {
        apiCall('/user/login', 'POST', '', { email, password })
          .then((res) => {
            setToken(res.access_token);
          })
          .catch((err) => console.log('ERROR IN SIGNING IN', err));
      }
    });

  return (
    <AuthContext.Provider
      value={{
        user,
        isLogin,
        setIsLogin,
        logout,
        token,
        signInWithGoogle,
        setToken,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

// returns a user and setUser

export const useAuth = () => {
  const {
    user,
    isLogin,
    setIsLogin,
    logout,
    token,
    setToken,
    signInWithGoogle,
  } = useContext(AuthContext);

  return {
    user,
    isLogin,
    setIsLogin,
    logout,
    token,
    setToken,
    signInWithGoogle,
  };
};
