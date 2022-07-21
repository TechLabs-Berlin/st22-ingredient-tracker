// groceries in here or own route?
// Saved recipes in here as well?

const express = require('express');
const groceriesRouter = express.Router();
const User = require('../models/user');

// Display data saved in DB for user groceries 
// Post new/update/delete groceries data in DB 
// Add/remove favourites

groceriesRouter.get('/current', async (req, res) => {
    try {
        // const { userId } = req.session;
        console.log(req.session.user.userId);
        if (!req.session.user.userId) {
            console.log(`Please log in`);
            console.log(req.session);
            res.status(511);
        } else {
            const foundGroceries = await User.findAndGetGroceries(req.session.user.userId);
            console.log(`You have permission to see this ${req.session.user.username}`);
            res.send(foundGroceries)
        }
    }
    catch (err) {
        console.log(err);
    }
});

groceriesRouter.put('/current', async (req, res) => {
    try {
        const { name } = req.body;
        if (!req.session.user.userId) {
            console.log(`Please log in`);
            console.log(req.session);
            res.status(511);
        } else {
            const foundGroceries = await User.findAndAddGroceries(req.session.user.userId, name);
            console.log(`Added to ${req.session.user.username}'s groceries: ${name}`);
            res.send(foundGroceries)
        }
    }
    catch (err) {
        console.log(err);
    }
});

groceriesRouter.patch('/current', async (req, res) => {
    try {
        const { name } = req.body;
        if (!req.session.user.userId) {
            console.log(`Please log in`);
            console.log(req.session);
            res.status(511);
        } else {
            const deleteGroceries = await User.findAndDeleteFromGroceries(req.session.user.userId, name);
            console.log(`Removed from ${req.session.user.username}'s groceries: ${name}`);
            res.send(deleteGroceries)
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