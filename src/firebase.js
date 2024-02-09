// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getFirestore } from "firebase/firestore";

// Firebase JS SDK v7.20.0 and later
const firebaseConfig = {
  apiKey: "AIzaSyDKZfZ-dvAuJ-1T8M2akzkJe5CoRkIiCxI",
  authDomain: "alemo-938ca.firebaseapp.com",
  projectId: "alemo-938ca",
  databaseURL:
    "https://alemo-938ca-default-rtdb.asia-southeast1.firebasedatabase.app",
  storageBucket: "alemo-938ca.appspot.com",
  messagingSenderId: "425584562956",
  appId: "1:425584562956:web:3dd38ce21ee356abed2f29",
  measurementId: "G-BKSEE5LBZ7",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);
const realTimedatabase = getDatabase(app);

export { db, realTimedatabase };
