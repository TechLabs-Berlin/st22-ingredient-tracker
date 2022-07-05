const express = require('express');
const cors = require('cors');
const demoRouter = require('./routes/demoRoutes');
const recepieRouter = require('./routes/recipesRoutes');

const app = express();

app.use(cors());

app.use(express.json());

const PORT = 8080;

app.use('', demoRouter, recepieRouter);

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})

// // Import the functions you need from the SDKs you need
// import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";

// // TODO: Add SDKs for Firebase products that you want to use
// // https://firebase.google.com/docs/web/setup#available-libraries

// // Your web app's Firebase configuration
// // For Firebase JS SDK v7.20.0 and later, measurementId is optional

// const firebaseConfig = {
//   apiKey: "AIzaSyDX-L4ifNg3FOpwyanhAdeAYk2f7L5zxx0",
//   authDomain: "bl-st22--ingredient-racker.firebaseapp.com",
//   projectId: "bl-st22--ingredient-racker",
//   storageBucket: "bl-st22--ingredient-racker.appspot.com",
//   messagingSenderId: "638075870453",
//   appId: "1:638075870453:web:452ce173e823326f4939bc",
//   measurementId: "G-YVB5X9GK1L"
// };


// // Initialize Firebase
// const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);