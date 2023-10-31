import { initializeApp } from "firebase/app";
import { getFirestore, collection, getDocs } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDwHQtMWtq0iv_pW3ZIALe51FgOcQX6zo4",
  authDomain: "notnotion-be816.firebaseapp.com",
  projectId: "notnotion-be816",
  storageBucket: "notnotion-be816.appspot.com",
  messagingSenderId: "441036589173",
  appId: "1:441036589173:web:846e216c1db21dccd7503c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore();
const colRef = collection(db, "movies");

getDocs(colRef).then((data) => {
  // console.log(data.docs)
let movies = [];
  data.docs.forEach((document) => {
    // console.log(document.data());
    // console.log(document.id);
    movies.push({...document.data(),id:document.id});
  });

  console.log(movies);
}).catch(e=>console.log(e));
