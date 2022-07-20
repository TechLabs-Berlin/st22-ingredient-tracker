const express = require('express');
const cors = require('cors');
const demoRouter = require('../routes/demoRoutes');
const pantryRouter = require('../src/routes/pantryRoutes');
const userRouter = require('../src/routes/userRoutes');
const cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');

// percent encoded password

const uri = "mongodb+srv://ingreduce_admin:<rice%26PASTA%3F%3D0Hmy>@ingreduce.nw3rh.mongodb.net/?retryWrites=true&w=majority";
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

client.connect(err => {
  const collection = client.db("test").collection("devices");
  // perform actions on the collection object
  console.log(`Connected to MongoDB Atlas`);
  client.close();
});

const app = express();

app.use(cors());

app.use(express.json());

// signed cookies don't hide information, but add data to it so authenticity can be verified if need be
app.use(cookieParser('secretsignthatshouldbestoredin.env')); // requires { signed : true } in route 

const PORT = 5000;

app.use('/demo', demoRouter);
app.use('/pantry', pantryRouter);
app.use('/user', userRouter);

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