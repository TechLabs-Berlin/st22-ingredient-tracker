const { Router, application, response } = require('express');
const express = require('express');
const userRouter = express.Router();
const User = require('../models/user');
const bcrypt = require('bcrypt');

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
    res.status(200).send('User logged out');
});


userRouter.get('/current', async (req, res) => {
    try {
        // const { userId } = req.session;
        console.log(req.session.user.userId);
        if (!req.session.user.userId) {
            console.log(`Please log in`);
            console.log(req.session);
            res.status(511);
        } else {
            const foundUser = await User.findAndGetUser(req.session.user.userId); // this returns the entire user object anyway so I'll just use it here
            console.log(`Found user ${foundUser.username} and sending ${foundUser.username} data`);
            res.send(foundUser)
        }
    }
    catch (err) {
        console.log(err);
    }
});

module.exports = userRouter;