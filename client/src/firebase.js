// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY ,
  authDomain: "mern-estate-cb9f6.firebaseapp.com",
  projectId: "mern-estate-cb9f6",
  storageBucket: "mern-estate-cb9f6.appspot.com",
  messagingSenderId: "598613196656",
  appId: "1:598613196656:web:9af9982a06550cf772d9b5"
};

// Initialize Firebase
 export const app = initializeApp(firebaseConfig);