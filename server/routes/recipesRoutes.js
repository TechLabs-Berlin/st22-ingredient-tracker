const express = require('express');

const recipesRouter = express.Router();

const recipies = [{
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

recipesRouter.get('/recipes', async (req, res) => {
    try {
        const response = await res.send(recipies);
        console.log(response);
    }
    catch (err) {
        console.log(err);
    }   
});

module.exports = recipesRouter;