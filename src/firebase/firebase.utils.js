import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyBhRUmX0k4yUW0a8mFhUsYugsvHx968fSQ",
  authDomain: "crwn-db-ba912.firebaseapp.com",
  projectId: "crwn-db-ba912",
  storageBucket: "crwn-db-ba912.appspot.com",
  messagingSenderId: "804778767924",
  appId: "1:804778767924:web:210bae83d75690f6dabc61"
};


export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return;
  /* we get the users by calling either
  firestore.doc('/users/:userId');
  firestore.collections('/users')
  */

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get();
  console.log('######################################')
  console.log(snapShot);

  if(!snapShot.exists){
    const {displayName, email}= userAuth;
    const createdAt = new Date();

    try{
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData
      })
    }catch(error){
      console.log('error creating user', error.message)
      // catch error
    }
  }
  return userRef
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

// this gives us access to this new Google auth provider Class from this authentication library
const googleProvider = new firebase.auth.GoogleAuthProvider();

// we want to always trigger the google pop up whenever we use this google auth provider for authentication and sign in
googleProvider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;