// Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/storage';
import 'firebase/compat/firestore';

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDBJ4zm782-2L0SC-hnnGmGhH9nJYSaKRc",
  authDomain: "fir-demo-32ead.firebaseapp.com",
  projectId: "fir-demo-32ead",
  storageBucket: "fir-demo-32ead.appspot.com",
  messagingSenderId: "596583684423",
  appId: "1:596583684423:web:9b6c9d1d85a5ab226cd462"
};

// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export const auth = firebase.auth();

// firebase.app();