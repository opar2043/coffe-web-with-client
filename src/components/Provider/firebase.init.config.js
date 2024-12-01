// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBrYzSDwJ4-XHFbpdWUuiNrnog_oUQ8XMA",
  authDomain: "coffe-club-4fd0d.firebaseapp.com",
  projectId: "coffe-club-4fd0d",
  storageBucket: "coffe-club-4fd0d.firebasestorage.app",
  messagingSenderId: "405514678420",
  appId: "1:405514678420:web:98e40359223e1b26574481"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
export default auth;