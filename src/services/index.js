import { initializeApp } from "firebase/app";
import { getFirestore } from 'firebase/firestore'


const firebaseConfig = {
    apiKey: "AIzaSyDRYEZNHYDOELZQ8vHMihKfjHZWKMuY_7w",
    authDomain: "coder-c1cb7.firebaseapp.com",
    projectId: "coder-c1cb7",
    storageBucket: "coder-c1cb7.appspot.com",
    messagingSenderId: "833253261431",
    appId: "1:833253261431:web:757528e11fbb71511a4672"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const firestoreDb = getFirestore(app) 