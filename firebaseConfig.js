// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDbjM9IQ_niIpFzrXIqR9x9LhmKncTNT-g",
  authDomain: "govhack2023-auth.firebaseapp.com",
  projectId: "govhack2023-auth",
  storageBucket: "govhack2023-auth.appspot.com",
  messagingSenderId: "941149742017",
  appId: "1:941149742017:web:7456b3e70a4aee7cc3c540",
  measurementId: "G-GCLR1ZW0N3"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);