const express = require('express');
const mongoose = require('mongoose');

const recipesRouter = express.Router();

// const recipes = [{
//     title: "First Title",
//     imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
//     prepTime: 30,
//     cookTime: 60
// },
// {
//     title: "Second Title",
//     imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
//     prepTime: 120,
//     cookTime: 45
// }, {
//     title: "Thirds Title",
//     imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
//     prepTime: 30,
//     cookTime: 60
// }, {
//     title: "First Title",
//     imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
//     prepTime: 30,
//     cookTime: 60
// }];

// (/?q=${ ingredients })

const db = mongoose.connection;

recipesRouter.get('/search', async (req, res) => {
    const ingredients = req.query.ingredients;
    const targetRecipes = await findAllRecipes(ingredients);
    // console.log(targetRecipes)
})

const findAllRecipes = (ingredients) => {
    try {
        const allRecipeIngredients = db.collection('recipeTest')
            .find()
            .project({ ingredients: 1 })
            .toArray(function (err, result) {
                if (err) throw err;
                console.log(result[2].ingredients);
                const filteredRecipes = result.filter(recipe => recipe.ingredients.includes(ingredients))                
                console.log(filteredRecipes);
                // return result;

                // const filteredRecipes = result.filter(recipe => {
                //     for (ingredient of ingredients) {
                //         recipe.ingredients.includes(ingredient)
                //     }
                // })

                // const foundRecipes = result.ingredients.filter(recipe => recipe.ingredients.includes(ingredients));
                // const foundRecipes = result.ingredients.includes('tomato');
                // console.log(foundRecipes);
            })
        // .then(value => {
        //     const filteredRecipes = allRecipeIngredients.filter(recipe => recipe.ingredients.includes(`tomato`) && recipe.ingredients.includes(`dressing`));
        //     console.log(filteredRecipes[1]);
        // })


        // {
        //     ingredients: { ingredients }
        // })
        // query MongoDB Atlas recipe DB = check recipes with ingredient strings 
        // send back n amount of recipe suggestions to server: entire object or just title, imageURL, cookTime, prepTime and ID?
        // console.log(req.query);
        // console.log(allRecipes);
        // res.send(targetRecipes);
        // console.log(response);

        // const allRecipeIngredients = recipeCursor.toArray()
        // const result = allRecipeIngredients.filter(recipe => recipe.ingredients.includes('tomato'));
        // const result = allRecipeIngredients.array.map(i => { return i['ingredients'] });
        // const result = allRecipeIngredients.array.forEach(element => {

        // });
        // console.log(result);
        // console.log(allRecipeIngredients);
        return allRecipeIngredients;
        // while (allRecipes.hasNext()) {
        //     print(tojson(allRecipes.next()));
        //  }
    } catch (err) {
        console.log(err);
    }
}

// recipesRouter.get('/:id', async (req, res) => {
//     try {
//         // query MongoDB Atlas recipe DB = check recipes with object ID
//         // send back target recipe object

//         // const response = await res.send(recipes);
//         // console.log(response);
//     }
//     catch (err) {
//         console.log(err);
//     }   
// });

module.exports = recipesRouter;