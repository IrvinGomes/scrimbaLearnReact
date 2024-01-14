// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { collection, getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAInSUyR4K3FsuBRPtkgnQF5j8o_7E5V9s",
  authDomain: "scrimbamynotes.firebaseapp.com",
  projectId: "scrimbamynotes",
  storageBucket: "scrimbamynotes.appspot.com",
  messagingSenderId: "254792749764",
  appId: "1:254792749764:web:ecdfbdc5a45e2110836f91"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app)
export const notesCollection = collection(db, "notes")