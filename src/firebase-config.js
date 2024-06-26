// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyChYIg0SUMPkXOUjH8kDfAYql1ed_azjmw",
  authDomain: "react-firebase-6ffcf.firebaseapp.com",
  projectId: "react-firebase-6ffcf",
  storageBucket: "react-firebase-6ffcf.appspot.com",
  messagingSenderId: "552789423451",
  appId: "1:552789423451:web:d56fab4b01b4529cb6567e",
  measurementId: "G-WCJ13SL1KL"
};

// Initialize Firebase
// eslint-disable-next-line no-unused-vars
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
