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

firebase.initializeApp(config);

// additionalData will come in the format of an object
export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  /* we get the users by calling either
  firestore.doc('/users/:userId');
  firestore.collections('/users')
  */

  const userRef = firestore.doc(`users/${userAuth.uid}`)
  const snapShot = await userRef.get()
  console.log(snapShot)

  if (!snapShot.exists) {
    // if the snapShot data doesn't exist, we need to create a user
    // In order to create a user, we have to use the documentRef object, not the snapshot.
    // The snapshot simply represents the data.
    // Any methods of creating, getting, updating or deleting, we have to use the documentRef objects.
    const {displayName, email} = userAuth
    const createdAt = new Date()
    const y = {email, displayName, createdAt, ...additionalData}
    console.log(y)

    try {
      await userRef.set(y)
    } catch (error) {
      console.log('error creating user', error.message)
    }
  }
  return userRef;
}

// this is a one-time function for adding data to the firestore
export const addCollectionAndDocuments = async (collectionKey, objectsToAdd) => {
  const collectionRef = firestore.collection(collectionKey)
  const batch = firestore.batch()

  // forEach() doesn't return us a new array
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc()
    batch.set(newDocRef, obj)
  })
  return await batch.commit()
}

export const convertCollectionsSnapshotToMap = collectionsSnapshot => {
  const transformedCollection = collectionsSnapshot.docs.map(docSnapshot => {
    const {title, items} = docSnapshot.data()
    return {
      routeName: encodeURI(title.toLowerCase()),
      id: docSnapshot.id,
      title,
      items
    }
  })

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection
    return accumulator
  }, {})
}
// this gives us access to this new Google auth provider Class from this authentication library
const googleProvider = new firebase.auth.GoogleAuthProvider();

// we want to always trigger the google pop up whenever we use this google auth provider for authentication and sign in
googleProvider.setCustomParameters({prompt: 'select_account'});

export const auth = firebase.auth();
export const firestore = firebase.firestore();
export const signInWithGoogle = () => auth.signInWithPopup(googleProvider);
export default firebase;