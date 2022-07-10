// User routes 
// User sign up, in and out
// Update profile (picture, username, password, email?)
// Display profile
// Saved recipes
// Pantry in here or own route? Maybe recipes in the pantry?

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

userRouter.get('/demo', async (req, res) => {
    try {
        const response = await res.send(userData);
        console.log(response);
    }
    catch (err) {
        console.log(err);
    }   
});

module.exports = userRouter;