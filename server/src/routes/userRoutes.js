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
// const { sessionizeUser } = require("../helpers/sessionHelpers.js");

// CHECK THAT THE CORRECT USER IS SIGNED IN with middleware, otherwise by knowing their ID one could modify another user's profile

// delete form data after save? rs server after registering would create user twice 
// res.redirect('/') seems to have taken care of that issue without interfering with frontend routes

function sessionizeUser(user) {
    return { userId: user._id, username: user.username };
};

userRouter.post('/register', async (req, res) => {
    try {
        const { password, username, email } = req.body;
        const creationDate = Date.now();
        const newUser = new User({
            username,
            email,
            password,
            created: creationDate
        });
        const sessionUser = sessionizeUser(newUser);
        await newUser.save();
        req.session.user = sessionUser;
        console.log(req.session);
        console.log(`User ${sessionUser.username} successfully created. Session ID: ${sessionUser.userId}`);
        res.status(200).send(`User ${sessionUser.username} successfully created.`);
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
    // next();
});

// With frontend: it should redirect to fe login page, else should redirect to '/' to allow for regular react routing to continue
// For now: redirecting within frontend depending on response status

userRouter.post('/login', async (req, res) => {
    try {
        const { email, password } = req.body;
        const foundUser = await User.findAndValidate(email, password);
        if (foundUser) {
            const sessionUser = sessionizeUser(foundUser);
            req.session.user = sessionUser;
            console.log(req.session);
            console.log(`User ${foundUser.username} successfully logged in. Session ID: ${sessionUser.userId}`);
            res.status(200).send('User successfully logged in')
        }
    } catch (err) {
        console.log(err);
        res.status(400).send(err.message);
    }
});

userRouter.post('/logout', async (req, res) => {
    req.session.destroy();
    console.log('User logged out');
    res.redirect('/user/login')
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