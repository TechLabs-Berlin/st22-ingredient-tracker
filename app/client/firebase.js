// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";

import { getAnalytics } from "firebase/analytics";

// TODO: Add SDKs for Firebase products that you want to use

// https://firebase.google.com/docs/web/setup#available-libraries


// Your web app's Firebase configuration

// For Firebase JS SDK v7.20.0 and later, measurementId is optional

const firebaseConfig = {

  apiKey: "AIzaSyDy6wL2b7AZkTnk3XLx-JGHF3ox2kDieqA",

  authDomain: "ingreduce.firebaseapp.com",

  projectId: "ingreduce",

  storageBucket: "ingreduce.appspot.com",

  messagingSenderId: "109050189537",

  appId: "1:109050189537:web:ba7faf39ace4314a69c9a0",

  measurementId: "G-R5RCXCLVZL"

};


// Initialize Firebase

const app = initializeApp(firebaseConfig);

const analytics = getAnalytics(app);