import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';


const firebaseConfig = {
  apiKey: 'AIzaSyAdsqcr6cmf2rTwfwGj7Iqp9fitexhew-0',
  authDomain: 'crwn-clothing-e7753.firebaseapp.com',
  databaseURL: 'https://crwn-clothing-e7753.firebaseio.com',
  projectId: 'crwn-clothing-e7753',
  storageBucket: '',
  messagingSenderId: '437956065968',
  appId: '1:437956065968:web:8caf9b1046642af6'
};

firebase.initializeApp(firebaseConfig);

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const {
      displayName,
      email
    } = userAuth;
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

export const addCollectionAndDocuments = async (
  collectionKey,
  objectsToAdd
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach(obj => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = collections => {
  const transformedCollection = collections.docs.map(doc => {
    const {
      title,
      items,
      // id
    } = doc.data()
    const objToReturn = {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items
    };
    console.log(objToReturn);


    return objToReturn
  });

  return transformedCollection.reduce((accumulator, collection) => {
    accumulator[collection.title.toLowerCase()] = collection;
    return accumulator;
  }, {});
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({
  prompt: 'select_account'
});
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;