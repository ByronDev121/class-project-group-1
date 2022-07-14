// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/9.9.0/firebase-app.js";
import * as Firestore from "https://www.gstatic.com/firebasejs/9.9.0/firebase-firestore.js";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCbYPcvKhlTcjh3XWKlRrXnR9UH3FA3Q0c",
  authDomain: "group-d07c3.firebaseapp.com",
  projectId: "group-d07c3",
  storageBucket: "group-d07c3.appspot.com",
  messagingSenderId: "911090706221",
  appId: "1:911090706221:web:fc6aaa72d8da23f30a15a4",
  measurementId: "G-XKYC9PLCHH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = Firestore.getFirestore(app);
export const firestore = Firestore; 





