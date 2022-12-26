import { initializeApp } from 'firebase/app';
import { 
    getAuth, 
    signInWithReact, 
    signInWithPopup, 
    GoogleAuthProvider,
    getAnalytics,
    signInWithRedirect,
    createUserWithEmailAndPassword,
    signInWithEmailAndPassword,
    signOut,
    onAuthStateChanged,
} from 'firebase/auth';
import {
  getFirestore,
  doc,
  getDoc,
  setDoc
} from 'firebase/firestore';


const firebaseConfig = {
    apiKey: "AIzaSyDw8u3ddHHO2JxpefGwro7oxbMzY2kYyJE",
    authDomain: "react-ecommerce-db-45638.firebaseapp.com",
    projectId: "react-ecommerce-db-45638",
    storageBucket: "react-ecommerce-db-45638.appspot.com",
    messagingSenderId: "906892565564",
    appId: "1:906892565564:web:5e28a98c72d4967d9e3739",
    measurementId: "G-QFYE81W2HM"
  };

  const firebaseApp = initializeApp(firebaseConfig);
  // const analytics = getAnalytics(app);

  const googleProvider = new GoogleAuthProvider();
  googleProvider.setCustomParameters({
    prompt: "select_account"
  });

export const auth = getAuth();
export const signInWithGooglePopup = () => signInWithPopup(auth, googleProvider);
export const signInWithGoogleRedirect = () => signInWithRedirect(auth, googleProvider);

export const db = getFirestore();

export const createUserDocumentFromAuth = async (
    userAuth, 
    additionalInformation = {}
  ) => {
  if (!userAuth) return;
  const userDocRef = doc(db, 'users', userAuth.uid);

  const userSnapshot = await getDoc(userDocRef);


  if (!userSnapshot.exists()) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await setDoc(userDocRef, {
        displayName,
        email,
        createdAt,
        ...additionalInformation,
      });
    } catch (error) {
      console.log('error creating the user', error.message);
    }
  }

  return userDocRef;
};

export const createAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await createUserWithEmailAndPassword(auth, email, password);
};

export const signInAuthUserWithEmailAndPassword = async (email, password) => {
  if(!email || !password) return;

  return await signInWithEmailAndPassword(auth, email, password);
};

export const signOutUser = async () => await signOut(auth);

export const onAuthStateChangedListener = (callback) => onAuthStateChanged(auth, callback);