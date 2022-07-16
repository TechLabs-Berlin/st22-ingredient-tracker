const express = require('express');
const cors = require('cors');
const groceriesRouter = require('./src/routes/groceriesRoutes');
const userRouter = require('./src/routes/userRoutes');
const cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const { default: mongoose } = require('mongoose');
const session = require('express-session');
const MongoStore = require('connect-mongo')(session);


// percent encoded password for MongoDB Atlas
// should be included in an .env instead of written in the .js, but for development purposes store it here

const mongoAtlasUri = "mongodb+srv://ingreduce_admin:rice%26PASTA%3F%3D0Hmy@ingreduce.nw3rh.mongodb.net/ingreduce?retryWrites=true&w=majority";

// const client = new MongoClient(mongoAtlasUri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(err => {
// //   const collection = client.db("ingreduce");
//   const collection = client.db("ingreduce").collection("users");
//   // perform actions on the collection object
//   console.log(`Connected to MongoDB Atlas`);
//   client.close();
// });


(async () => {
  try {
    // Connect to the MongoDB cluster
    // MongooseServerSelectionError: connection <monitor> to 40.68.199.139:27017 closed | FOR DEVELOPMENT: had to give network access to all IP, change back later with dedicated server

    await mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("Connected to MongoDB Atlas")
    );

    const app = express();

    // const MongoStore = connectmongo(session);

    // const dbConnection = mongoose.connection;
    // dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
    // dbConnection.once("open", () => console.log("Connected to DB!"));

    app.use
      (session({
        // key: 'Ingreduce',
        name: 'Session',
        secret: 'Secret',
        saveUninitialized: true,
        resave: true,
        // resave: false,
        store: new MongoStore({
          mongooseConnection: mongoose.connection,
          collection: 'session',
          ttl: 60 * 60 * 24 * 7
        }),
        cookie: {
          sameSite: true,
          signed: true,
          // secure: 'false',
          maxAge: 1000 * 60 * 60 * 24 * 7
        }
      }));



    app.use(cors({ credentials: true, origin: true }));
    app.use(express.json());
    app.use(express.urlencoded({ extended: true }));

    app.use('/groceries', groceriesRouter);
    app.use('/user', userRouter);

    app.use(cookieParser('secretsignthatshouldbestoredin.env')); // requires { signed : true } in route

    // app.set('trust proxy', 1);

    const PORT = 5000;

    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    })
  } catch (e) {
    console.log(e);
  }
})();





// const requireLogin = (req, res, next) => {
//   if (!req.session.user_id) {
//     console.log(`You don't have permission to see this`);
//     // redirect to localhost:3000/login with frontend?
//     return res.redirect('/login');
//   }
//   next;
// }




// app.use(session({
//   secret: 'cookie_secret',
//   resave: true,
//   saveUninitialized: true
// }));




//   const dbConnection = mongoose.connection;
//   dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
//   dbConnection.once("open", () => console.log("Connected to DB!"));

// app.set('view engine', 'ejs');
// app.set('views', './src/views');

// signed cookies don't hide information, but add data to it so authenticity can be verified if need be


