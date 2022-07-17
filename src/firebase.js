// Import the functions you need from the SDKs you need
/*
import { initializeApp, getApps, getApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
*/

import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
import { getStorage } from "firebase/storage";

/*
import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";
*/

//import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDkxotSqt1OMWCsod_KEgruHSZtUfRdWwQ",
  authDomain: "instagram-clone-9233e.firebaseapp.com",
  projectId: "instagram-clone-9233e",
  storageBucket: "instagram-clone-9233e.appspot.com",
  messagingSenderId: "272743512857",
  appId: "1:272743512857:web:8bdc211c8bd797603d6388",
  measurementId: "G-HT8SG1S9HL",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
/*
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();
const db = getFirestore();
const storage = getStorage();
*/

// Initialize Firebase
const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
// Initialize Cloud Storage and get a reference to the service
const storage = getStorage();

/*
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
*/
//const analytics = getAnalytics(app);
export { auth, provider, storage };
export default db;
