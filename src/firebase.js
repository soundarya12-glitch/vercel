// firebase.js
// Import required Firebase SDK functions
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider, GithubAuthProvider } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Firestore functions import பண்ணுங்க
import { collection, addDoc, serverTimestamp } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAtTzOodjzpVbUff0ezAtixobxXfRpsn4A",
  authDomain: "login-f5c7d.firebaseapp.com",
  projectId: "login-f5c7d",
  storageBucket: "login-f5c7d.appspot.com",
  messagingSenderId: "227580074976",
  appId: "1:227580074976:web:3950dbaece2f05c0f82985",
  measurementId: "G-JM383RC1KS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

// Authentication exports
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export const githubProvider = new GithubAuthProvider();

// Firestore export
export const db = getFirestore(app);
