// groceries in here or own route?
// Saved recipes in here as well?

const express = require('express');
const groceriesRouter = express.Router();
const User = require('../models/user');

// Display data saved in DB for user groceries 
// Post new/update/delete groceries data in DB 
// Add/remove favourites

const groceriesData = [
    {
        name: 'Apple',
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

// const errMessage = [{name: 'Error: you must login to display your saved ingredients'}]

// const groceriesData = () => {
//     if (!req.session.userID) {
//         console.log(`You don't have permission to see this`);
//         res.redirect('/user/login');
//     } else {
//         console.log(`You have permission to see this`);
//         res.render('secret');
//     }
// };

groceriesRouter.get('/current', async (req, res) => {
    try {
        if (!req.session.userID) {
            console.log(`Please log in ${req.session.userID}`);
            res.status(511);
        } else {
            const groceries = await User.findAndGetGroceries(req.session.userID);
            console.log(`You have permission to see this`);
            res.send(groceries)
        }
    }
    catch (err) {
        console.log(err);
    }   
});

// groceriesRouter.get('/current', async (req, res) => {
//     try {
//         const response = await res.send(groceriesData);
//         console.log(response);
//     }
//     catch (err) {
//         console.log(err);
//     }   
// });

module.exports = groceriesRouter;