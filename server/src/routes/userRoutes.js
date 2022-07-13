// User routes 
// User sign up, in and out
// Update profile (picture, username, password, email?)
// Display profile
// Saved recipes
// Pantry in here or own route? Maybe recipes in the pantry?

const { Router, application, response } = require('express');
const express = require('express');
const userRouter = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

// CHECK THAT THE CORRECT USER IS SIGNED IN with middleware, otherwise by knowing their ID one could modify another user's profile

// delete form data after save? rs server after registering would create user twice 
// res.redirect('/') seems to have taken care of that issue without interfering with frontend routes

userRouter.post('/register', async (req, res) => {
    const { password, username, email } = req.body;
    const hash = await bcrypt.hash(password, 12);
    const creationDate = Date.now();
    const user = new User ({
        username,
        email,
        password: hash,
        created: creationDate
    });
    await user.save();
    console.log(`User ${user.username} successfully created`);
    res.redirect('/')
});

userRouter.get('/login', (req, res) => {
    res.render('login')
})

userRouter.post('/login', async (req, res) => {    
    const { password, email } = req.body;
    const user = await User.findOne({ email });
    const validCredentials = await bcrypt.compare(password, user.password);
    if(validCredentials) {
        res.send('Success')
    } else {
        res.send('Try again')
    }
});

// userRouter.use((req, res, next) => {
//     if (req.user.id.isUser) {
//         next();
//     }
//     res.send("You don't have permission to do that");
// });


// userRouter.get('/:id', async (req, res) => {
    // try {
    //     const response = await res.send(userData);
    //     console.log(response);
    // }
    // catch (err) {
    //     console.log(err);
    // }   
// });

// userRouter.get('/:id/edit', async (req, res) => {
    // try {
    //     const response = await res.send(userData);
    //     console.log(response);
    // }
    // catch (err) {
    //     console.log(err);
    // }   
// });

module.exports = userRouter;