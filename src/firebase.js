import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore/lite";


const firebaseConfig = {
    apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
    authDomain: "clone-19e10.firebaseapp.com",
    projectId: "clone-19e10",
    storageBucket: "clone-19e10.appspot.com",
    messagingSenderId: "1067130524067",
    appId: "1:1067130524067:web:c10f5ec40c361c49fd0a16",
    measurementId: "G-6PDL57JGBY"
};

const firebaseApp = initializeApp(firebaseConfig)

const db = getFirestore(firebaseApp)
const auth = getAuth(firebaseApp)

export { db, auth }