import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';
import { AnyAction } from 'redux';
import { ICollection } from '../interfaces';

const config = {
  apiKey: 'AIzaSyCwhXf64Rr6s-d2EmfRtA4l7v-h6MsYKJM',
  authDomain: 'crown-db-3489b.firebaseapp.com',
  databaseURL: 'https://crown-db-3489b.firebaseio.com',
  projectId: 'crown-db-3489b',
  storageBucket: 'crown-db-3489b.appspot.com',
  messagingSenderId: '696761325613',
  appId: '1:696761325613:web:22995bb4fe9c2ac74940a4',
};

firebase.initializeApp(config);

export const createUserProfileDocument = async (
  userAuth: any,
  additionalData?: any
) => {
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
        ...additionalData,
      });
    } catch (error) {
      console.log('error creating user', error.message);
    }
  }

  return userRef;
};
export const addCollectionAndDocuments = async (
  collectionKey: string,
  objectsToAdd: ICollection[]
) => {
  const collectionRef = firestore.collection(collectionKey);

  const batch = firestore.batch();
  objectsToAdd.forEach((obj: ICollection) => {
    const newDocRef = collectionRef.doc();
    batch.set(newDocRef, obj);
  });

  return await batch.commit();
};

export const convertCollectionsSnapshotToMap = (collections: any) => {
  const transformedCollection = collections.docs.map((doc: any) => {
    const { title, items } = doc.data();

    return {
      routeName: encodeURI(title.toLowerCase()),
      id: doc.id,
      title,
      items,
    };
  });
  return transformedCollection.reduce(
    (accumulator: any, collection: ICollection) => {
      accumulator[collection.title.toLowerCase()] = collection;
      return accumulator;
    },
    {}
  );
};

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
