import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyD8391E8H2DvGfYjvoQQ0VOvSu9fH3VN8A",
  authDomain: "e-commercr-3.firebaseapp.com",
  projectId: "e-commercr-3",
  storageBucket: "e-commercr-3.appspot.com",
  messagingSenderId: "222222678018",
  appId: "1:222222678018:web:3cd6a563aa6d93b93ecf1b",
  measurementId: "G-12YBWS73QC",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
// export firestore.
export const firestore = firebase.firestore();

// set up authentication.
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
// using pop up to sign in.
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
