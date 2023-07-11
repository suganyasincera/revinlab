// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth, GoogleAuthProvider,FacebookAuthProvider}from 'firebase/auth'
import {getFirestore} from 'firebase/firestore'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_o16dnSEN6T4LcohWECxbdusjonL4eOo",
  authDomain: "react-26c7c.firebaseapp.com",
  projectId: "react-26c7c",
  storageBucket: "react-26c7c.appspot.com",
  messagingSenderId: "702126806214",
  appId: "1:702126806214:web:2d9ea5303e88136c1af3c7"
}; 

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export  const auth = getAuth(app);
 export const googleProvider = new GoogleAuthProvider();

 export const db = getFirestore(app);
 export const FbProvider = new FacebookAuthProvider();