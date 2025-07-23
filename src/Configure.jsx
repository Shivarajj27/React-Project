// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
import {getFirestore} from "firebase/firestore"
// import { Authentication } from "../../Forms1/src/Configure/Configure";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDajbLc5xMnpXWN2yPlJjuM1QHdgRMUNhk",
  authDomain: "project-shopping-93401.firebaseapp.com",
  projectId: "project-shopping-93401",
  storageBucket: "project-shopping-93401.firebasestorage.app",
  messagingSenderId: "598034365332",
  appId: "1:598034365332:web:f413feb672e5889d172d81",
  measurementId: "G-5CPVM4G1BY"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const Authentication = getAuth(app)
export const db = getFirestore(app)

