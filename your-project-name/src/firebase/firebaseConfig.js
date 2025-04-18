// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBGNV6zu15Dlmh9xrfRlCWZkrqfVhT6bgs",
  authDomain: "dunk-hub-1000.firebaseapp.com",
  projectId: "dunk-hub-1000",
  storageBucket: "dunk-hub-1000.firebasestorage.app",
  messagingSenderId: "781143886791",
  appId: "1:781143886791:web:ab3bf6ffc77d56844aa7e2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firestore
export const db = getFirestore(app);