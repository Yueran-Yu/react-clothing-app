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


export const createUserProfileDocument = async (userAuth, additionalData) =>{
  if(!userAuth) return
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
    }
  }
  return userRef
}

firebase.initializeApp(config);
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);
export default firebase;