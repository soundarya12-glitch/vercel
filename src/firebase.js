// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAtTzOodjzpVbUff0ezAtixobxXfRpsn4A",
  authDomain: "login-f5c7d.firebaseapp.com",
  projectId: "login-f5c7d",
  storageBucket: "login-f5c7d.firebasestorage.app",
  messagingSenderId: "227580074976",
  appId: "1:227580074976:web:3950dbaece2f05c0f82985",
  measurementId: "G-JM383RC1KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth(app);
