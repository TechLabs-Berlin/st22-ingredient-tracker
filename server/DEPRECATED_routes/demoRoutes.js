const express = require('express');

const demoRouter = express.Router();

const demoData = [
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

demoRouter.get('/demo', async (req, res) => {
    try {
        const response = await res.send(demoData);
        console.log(response);
    }
    catch (err) {
        console.log(err);
    }   
});

module.exports = demoRouter;