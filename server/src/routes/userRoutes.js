// User routes 
// User sign up, in and out
// Update profile (picture, username, password, email?)
// Display profile
// Saved recipes
// Pantry in here or own route? Maybe recipes in the pantry?

const { Router, application } = require('express');
const express = require('express');
const userRouter = express.Router();

const userData = [
    {
        name: 'Jim',
        type: 'Fruit'
    },
    {
        name: 'Pear',
        type: 'Fruit'
    },
    {
        name: 'Tomato',
        type: 'Fruit (technically)'
    },
];

// CHECK THAT THE CORRECT USER IS SIGNED IN with middleware, otherwise by knowing their ID one could modify another user's profile

userRouter.use((req, res, next) => {
    if (req.user.id.isUser) {
        next();
    }
    res.send("You don't have permission to do that");
});


userRouter.get('/:id', async (req, res) => {
    // try {
    //     const response = await res.send(userData);
    //     console.log(response);
    // }
    // catch (err) {
    //     console.log(err);
    // }   
});

userRouter.get('/:id/edit', async (req, res) => {
    // try {
    //     const response = await res.send(userData);
    //     console.log(response);
    // }
    // catch (err) {
    //     console.log(err);
    // }   
});

module.exports = userRouter;