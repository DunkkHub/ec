const functions = require('firebase-functions');
const express = require("express");
const cors = require('cors');
const { initializeApp } = require("firebase/app");

const app = express();
app.use(cors({ origin: true }));

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
initializeApp(firebaseConfig);


app.get("/*", (req, res) => {
  res.send("Hello from Express on Firebase!");
});




exports.app = functions.https.onRequest(app);