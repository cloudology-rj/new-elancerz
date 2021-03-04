import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';

import apiCall from '../helpers/fetch';

export const firebaseConfig = {
  apiKey: 'AIzaSyDz-XGhe8bIbprkUMOYxSpdlxkdecW-4qk',
  authDomain: 'elancerz2021.firebaseapp.com',
  projectId: 'elancerz2021',
  storageBucket: 'elancerz2021.appspot.com',
  messagingSenderId: '880920076647',
  appId: '1:880920076647:web:1e4dee67c73aa001818fc2',
  measurementId: 'G-XTK777SJM4',
};

if (firebase.apps.length === 0) {
  firebase.initializeApp(firebaseConfig);
}

export const auth = firebase.auth();

export const googleProvider = new firebase.auth.GoogleAuthProvider();
googleProvider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () =>
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
        })
        .catch((err) => console.log('ERROR IN SIGNING UP ', err));
    } else {
      apiCall('/user/login', 'POST', '', { email, password })
        .then((res) => {
          window.localStorage.setItem(
            'elancerztoken',
            JSON.stringify(res.access_token)
          );
        })
        .catch((err) => console.log('ERROR IN SIGNING IN', err));
    }
  });

export const facebookProvider = new firebase.auth.FacebookAuthProvider();
export const signInWithFacebook = () => auth.signInWithPopup(facebookProvider);

export const signInWithEmail = (email, password) => {
  auth().signInWithEmailAndPassword(email, password);
};

export default firebase;
