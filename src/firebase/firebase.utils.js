import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';

const firebaseConfig = {
    apiKey: "AIzaSyBqF8P0UJt21VWEqQNl1Ze3sWKLKdPVy0I",
    authDomain: "crwn-db-43568.firebaseapp.com",
    projectId: "crwn-db-43568",
    storageBucket: "crwn-db-43568.appspot.com",
    messagingSenderId: "333571474506",
    appId: "1:333571474506:web:80070253272891025452b3",
    measurementId: "G-JQJS59X2WH"
  };
  
  // Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;