import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBhRUmX0k4yUW0a8mFhUsYugsvHx968fSQ",
  authDomain: "crwn-db-ba912.firebaseapp.com",
  projectId: "crwn-db-ba912",
  storageBucket: "crwn-db-ba912.appspot.com",
  messagingSenderId: "804778767924",
  appId: "1:804778767924:web:210bae83d75690f6dabc61"
};

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;