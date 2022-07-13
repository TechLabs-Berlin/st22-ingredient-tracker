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

// delete form data after save?

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
    console.log(`User ${user.username} successfully created`);
    await user.save();
    res.redirect('/')
})

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