const express = require('express');
const cors = require('cors');

const recipesRouter = require('./src/routes/recipesRoutes');

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

(async () => {
  try {
    // Connect to the MongoDB cluster
    // FOR DEVELOPMENT: had to give network access to all IP, change back later with dedicated server

    await mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log("Connected to MongoDB Atlas")
    );

    const app = express();

    app.use
      (session({
        // key: 'Ingreduce',
        name: 'Session',
        secret: 'Secret',
        saveUninitialized: false,
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
    app.use('/recipes', recipesRouter);

    app.use(cookieParser('secretsignthatshouldbestoredin.env')); // requires { signed : true } in route

    const PORT = 5000;

    app.listen(PORT, () => {
      console.log(`listening on port ${PORT}`);
    })
  } catch (e) {
    console.log(e);
  }
})();