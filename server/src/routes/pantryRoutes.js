// Pantry in here or own route?
// Saved recipes in here as well?

const express = require('express');
const pantryRouter = express.Router();

// Display data saved in DB for user pantry 
// Post new/update/delete pantry data in DB 
// Add/remove favourites

const pantryData = [
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

pantryRouter.get('/current', async (req, res) => {
    try {
        const response = await res.send(pantryData);
        console.log(response);
    }
    catch (err) {
        console.log(err);
    }   
});

module.exports = pantryRouter;