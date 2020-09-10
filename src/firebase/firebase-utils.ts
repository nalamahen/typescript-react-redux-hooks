import firebase from 'firebase/app';

import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: 'AIzaSyAa_C6DKHQj8PxvclsUC-shdJzhe6wV1k0',
  authDomain: 'ecommerce-db-509e9.firebaseapp.com',
  databaseURL: 'https://ecommerce-db-509e9.firebaseio.com',
  projectId: 'ecommerce-db-509e9',
  storageBucket: 'ecommerce-db-509e9.appspot.com',
  messagingSenderId: '456441903886',
  appId: '1:456441903886:web:b1ae302b01c451383f355f',
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
