import firebase  from "firebase/app";
import "firebase/firestore";
import "firebase/auth";
import "firebase/database";
import { initializeApp } from 'firebase/app';

// import { getFirestore } from 'firebase/firestore';




var  firebaseConfig = {
  apiKey: "AIzaSyDWJGkGrx9QGNGzXIngxkIrHgm1ixW3UCw",
  authDomain: "noticeboard-aac80.firebaseapp.com",
  projectId: "noticeboard-aac80",
  storageBucket: "noticeboard-aac80.appspot.com",
  messagingSenderId: "837328473225",
  appId: "1:837328473225:web:1ccbc663eb718334098a58",
  measurementId: "G-0BW6PQMJSG"
};  


  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();




export default firebase;