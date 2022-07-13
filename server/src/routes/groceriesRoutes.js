// groceries in here or own route?
// Saved recipes in here as well?

const express = require('express');
const groceriesRouter = express.Router();

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

groceriesRouter.get('/current', async (req, res) => {
    try {
        const response = await res.send(groceriesData);
        console.log(response);
    }
    catch (err) {
        console.log(err);
    }   
});

module.exports = groceriesRouter;