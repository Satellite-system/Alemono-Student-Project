// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later
const firebaseConfig = {
  apiKey: "AIzaSyDKZfZ-dvAuJ-1T8M2akzkJe5CoRkIiCxI",
  authDomain: "alemo-938ca.firebaseapp.com",
  projectId: "alemo-938ca",
  storageBucket: "alemo-938ca.appspot.com",
  messagingSenderId: "425584562956",
  appId: "1:425584562956:web:3dd38ce21ee356abed2f29",
  measurementId: "G-BKSEE5LBZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export default db;
