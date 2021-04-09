import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBUme1SHSLyRHqrECZm3jw6PFHBteWZnwE",
  authDomain: "crud-products-a8f43.firebaseapp.com",
  projectId: "crud-products-a8f43",
  storageBucket: "crud-products-a8f43.appspot.com",
  messagingSenderId: "972472412126",
  appId: "1:972472412126:web:e61335a57993d9863d1f4f",
};

firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
const googleAuthProvider = new firebase.auth.GoogleAuthProvider();

export { db, googleAuthProvider, firebase };
