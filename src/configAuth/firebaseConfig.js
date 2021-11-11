import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/firebase-database-compat';

firebase.initializeApp({
  apiKey: 'AIzaSyA9ig5DqP3f9hsFd61Dn9QMMrJh9WL9J5o',
  authDomain: 'task4-itransition-fbfac.firebaseapp.com',
  projectId: 'task4-itransition-fbfac',
  storageBucket: 'task4-itransition-fbfac.appspot.com',
  messagingSenderId: '855219116237',
  appId: '1:855219116237:web:5fdbb9f32d4a701c57b184',
  measurementId: 'G-RZ5CG2VPBE',
});

export const auth = firebase.auth();
export default firebase;
