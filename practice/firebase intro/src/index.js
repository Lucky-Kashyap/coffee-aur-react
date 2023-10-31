import { initializeApp } from "firebase/app";
import {
  getFirestore,
  collection,
  onSnapshot,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
  query,
  where,
  orderBy,
  serverTimestamp,
  updateDoc,
} from "firebase/firestore";
import {getAuth,createUserWithEmailAndPassword,signInWithEmailAndPassword,signOut} from 'firebase/auth';

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
const auth = getAuth();
const colRef = collection(db, "movies");

const qRef = query(
  colRef,
  where("category", "==", "drama"),
  orderBy("createdAt")
);

const documentReference = doc(db, "movies", "LtJam0uj3Dq41DudNEtk");

onSnapshot(documentReference, (document) => {
    console.log(document.data(), document.id);
});

getDocs(colRef)
  .then((data) => {
    // console.log(data.docs)
    let movies = [];
    data.docs.forEach((document) => {
      // console.log(document.data());
      // console.log(document.id);
      movies.push({ ...document.data(), id: document.id });
    });

    // let box = document.querySelector(".box");
    // console.log(movies);

    // box.innerHTML = movies?.map(item=><h1>item.name</h1>);

    // setTimeout(() => {

    //     box.innerHTML = movies[0].name;
    // }, 1000);
    // console.log(movies[0].name);

    console.log(movies);
  })
  .catch((e) => console.log(e));

// snap shot call automatically

//  onSnapshot(colRef,(data)=>{
//   let movies = [];
//   // console.log('Changes');
//   data.docs.forEach(document=>{
//     movies.push({...document.data(), id: document.id});
//   })
//  })

const addForm = document.querySelector(".add");

addForm.addEventListener("submit", (e) => {
  e.preventDefault();
  addDoc(colRef, {
    name: addForm.name.value,
    description: addForm.description.value,
    category: addForm.category.value,
    createdAt: serverTimestamp(),
    updatedAt: serverTimestamp(),
  }).then(() => {
    addForm.reset();
  });
});

const deleteForm = document.querySelector(".delete");

deleteForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const documentReference = doc(db, "movies", deleteForm.id.value);
  deleteDoc(documentReference).then(() => {
    deleteForm.reset();
  });
});

const updateForm = document.querySelector(".update");
updateForm.addEventListener("submit", (event) => {
  event.preventDefault();

  const documentReference = doc(db, "movies", updateForm.id.value);
  updateDoc(documentReference, {
    name: updateForm.name.value,
    updatedAt: serverTimestamp(),
  }).then(() => {
    updateForm.reset();
  });
});
