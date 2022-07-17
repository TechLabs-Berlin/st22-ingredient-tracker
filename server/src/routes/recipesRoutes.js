const express = require('express');

const recipesRouter = express.Router();

const recipes = [{
    title: "First Title",
    imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
    prepTime: 30,
    cookTime: 60
},
{
    title: "Second Title",
    imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
    prepTime: 120,
    cookTime: 45
}, {
    title: "Thirds Title",
    imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
    prepTime: 30,
    cookTime: 60
}, {
    title: "First Title",
    imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
    prepTime: 30,
    cookTime: 60
}];

// (/?q=${ ingredients })
recipesRouter.get('/q', async (req, res) => {
    try {        
        // query MongoDB Atlas recipe DB = check recipes with ingredient strings 
        // send back n amount of recipe suggestions to server: entire object or just title, imageURL, cookTime, prepTime and ID?

        const response = await res.send(recipes);
        console.log(response);
    }
    catch (err) {
        console.log(err);
    }   
});

recipesRouter.get('/:id', async (req, res) => {
    try {
        // query MongoDB Atlas recipe DB = check recipes with object ID
        // send back target recipe object

        // const response = await res.send(recipes);
        // console.log(response);
    }
    catch (err) {
        console.log(err);
    }   
});

module.exports = recipesRouter;