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

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();
    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider)
.then( (result) => {
  console.log("result");
})
.catch( (error) => {
  console.error(error);
})



export default firebase;