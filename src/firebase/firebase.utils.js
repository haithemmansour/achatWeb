import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
  apiKey: "AIzaSyAcTW7KvaEZUvCBYs3ha77xB1jLrCk12K8",
  authDomain: "achat-web.firebaseapp.com",
  databaseURL: "https://achat-web.firebaseio.com",
  projectId: "achat-web",
  storageBucket: "achat-web.appspot.com",
  messagingSenderId: "210120223219",
  appId: "1:210120223219:web:25ece7584fbd3f3e254a86",
  measurementId: "G-DR4L5QTCN7"
};

firebase.initializeApp(config);

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
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
