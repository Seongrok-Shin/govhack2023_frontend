// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyATVvnQtLprQdqke3B0tcRVsiN2AoNftng",
  authDomain: "greenkiwi-auth.firebaseapp.com",
  projectId: "greenkiwi-auth",
  storageBucket: "greenkiwi-auth.appspot.com",
  messagingSenderId: "312056309897",
  appId: "1:312056309897:web:6d93e177b768728136be58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const auth = getAuth(app);

export default firebaseConfig;