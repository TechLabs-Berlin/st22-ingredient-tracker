const express = require('express');
const cors = require('cors');
const pantryRouter = require('./src/routes/pantryRoutes');
const userRouter = require('./src/routes/userRoutes');
const cookieParser = require('cookie-parser');
const { MongoClient, ServerApiVersion } = require('mongodb');
const User = require('./src/models/user');
const { default: mongoose } = require('mongoose');
const bcrypt = require('bcrypt');

// percent encoded password for MongoDB Atlas

const mongoAtlasUri = "mongodb+srv://ingreduce_admin:rice%26PASTA%3F%3D0Hmy@ingreduce.nw3rh.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });

// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   console.log(`Connected to MongoDB Atlas`);
//   client.close();
// });

const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended : true }));

// temporary local DB, to be replaced with the MongoDB Atlas address
// MongooseServerSelectionError: connection <monitor> to 40.68.199.139:27017 closed | FOR DEVELOPMENT: had to give network access to all IP, change back later with dedicated server

// mongoose.connect('mongodb://localhost:27017/demoIngreduce');

try {
    // Connect to the MongoDB cluster
    mongoose.connect(
      mongoAtlasUri,
      { useNewUrlParser: true, useUnifiedTopology: true },
      () => console.log(" Mongoose is connected"),
    );
  } catch (e) {
    console.log("could not connect");
  }
  
  const dbConnection = mongoose.connection;
  dbConnection.on("error", (err) => console.log(`Connection error ${err}`));
  dbConnection.once("open", () => console.log("Connected to DB!"));

// temporary, to be replaced by front end data

app.set('view engine', 'ejs');
app.set('views', './src/views');

app.get('/register' , (req, res) => {
    res.render('register');
});

app.get('/' , (req, res) => {
    res.render('home');
});

app.post('/register', async (req, res) => {
    const { password, username, email } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const user = new User ({
        username,
        email,
        password: hash
    });
    await user.save();
    res.redirect('/');
})

// signed cookies don't hide information, but add data to it so authenticity can be verified if need be
app.use(cookieParser('secretsignthatshouldbestoredin.env')); // requires { signed : true } in route 

const PORT = 5000;

app.use('/pantry', pantryRouter);
app.use('/user', userRouter);

app.get('/secret', (req, res) => {
    res.send('Secret');
});

app.listen(PORT, () => {
    console.log(`listening on port ${PORT}`);
})