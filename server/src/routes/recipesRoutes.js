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
    let targetIngredients = req.query.ingredients;
    let n = req.query.n;
    console.log('Max recipes requested:', n);

    const targetRecipes = await findAllRecipes(targetIngredients, n);
    console.log('Recipes found:', targetRecipes.length);

    // res.send: just the necessary data for FE compoment
    res.send(targetRecipes);
})

// {
//     ingredients: { ingredients }
// })
// query MongoDB Atlas recipe DB = check recipes with ingredient strings 
// send back n amount of recipe suggestions to server: entire object or just title, imageURL, cookTime, prepTime and ID?

const findAllRecipes = async (targetIngredients, n) => {
    // try {
    let targetRecipeCursor = await db.collection('recipeTest')
        .find()
        .project({ ingredients: 1 })

    let allRecipesForIngredients = await targetRecipeCursor.toArray().then(allRecipes => {
        // if (err) throw err;
        console.log(targetIngredients);

        // I tried a variety of versions where I tried to dynamically filter or otherwise loop through the ingredients string of the recipe object
        // I didn't manage to make any of them work, might be easier if ingredients were stored as an array of strings instead of one giant string 
        // Just to make it work at all: using the hard coded approach for up to 5 ingredients. Right now dataset is very limited anyway (~430 entries)
        // Ideally: python script that recommends recipes integrated here

        // -------------------------------------------------------------------------------------------------------------------------------------------

        // Hard code: only take up to the first five ingredients
        // the if statement repeats too much code but brain go moo

        let target1 = '', target2 = '', target3 = '', target4 = '', target5 = '';
        if (targetIngredients.length <= 1) {
            target1 = targetIngredients[0];
        } else if (targetIngredients.length <= 2) {
            target1 = targetIngredients[0];
            target2 = targetIngredients[1];
        } else if (targetIngredients.length <= 3) {
            target1 = targetIngredients[0];
            target2 = targetIngredients[1];
            target3 = targetIngredients[2];
        } else if (targetIngredients.length <= 4) {
            target1 = targetIngredients[0];
            target2 = targetIngredients[1];
            target3 = targetIngredients[2];
            target4 = targetIngredients[3];
        } else if (targetIngredients.length >= 5) {
            target1 = targetIngredients[0];
            target2 = targetIngredients[1];
            target3 = targetIngredients[2];
            target4 = targetIngredients[3];
            target5 = targetIngredients[4];
        }

        // console.log(target1, target2, target3, target4, target5)

        const filteredRecipes = allRecipes.filter(recipe =>
            recipe.ingredients.includes(target1) && recipe.ingredients.includes(target2) && recipe.ingredients.includes(target3) && recipe.ingredients.includes(target4) && recipe.ingredients.includes(target5)
        )
        console.log(`Filtered recipes found: ${filteredRecipes.length}`);
        // console.log(`Filtered recipes ids: ${JSON.stringify(filteredRecipes)}`);
        // console.log(`Filtered recipes ids: ${JSON.stringify(filteredRecipes[0]._id)}`);

        let filteredRecipesIds = [];

        for (let i = 0; i < filteredRecipes.length && i < n; i++) {
            const targetId = filteredRecipes[i]._id;
            // console.log(`${JSON.stringify(filteredRecipes[i]._id)}`)
            filteredRecipesIds.push(targetId)
        }
        console.log(`IDs recovered: ${filteredRecipesIds.length}`);

        // console.log(filteredRecipesIds);

        // for (i of filteredRecipes) {
        //     console.log(`${JSON.stringify(filteredRecipes[i])}`)
        // }


        return filteredRecipesIds;

        // -------------------------------------------------------------------------------------------------------------------------------------------

        // for each object in array: string split " " and ";" to return an array that I can more easily match against
        // can directly match each new array for the X amount of words I need

        // const ingredientArr = recipe.ingredients.split(/;| |,|-/)

        // would need to include the id as well with the new ingredients array

        // const makeArray = (id, ingredients) => {
        //     [
        //     { id: id },
        //     { ingredients: ingredients }
        //     ]
        // };

        // result.forEach(recipe => {
        //     const newArr = makeArray(recipe.id, recipe.ingredients.split(/;| |,|-/)) 
        //     console.log(newArr)}
        // )

        // console.log(result[2].ingredients);

        // -------------------------------------------------------------------------------------------------------------------------------------------

        // filter results and then compare arrays against each other

        // recipe.ingredients.includes(`tomato`) && recipe.ingredients.includes(`dressing`)

        // const includesAll = (arr, values) => values.every(v => arr.includes(v));

        // const targetArray = targetIngredients.split('+');
        // const allRecipeArray = result.ingredients;

        // for (i of result) {
        //     const compArray = result[i];
        //     // const match = includesAll(compArray, targetArray);
        //     console.log(compArray);
        // }

        // let tar = result.map( (recipe) => {
        //     recipe.ingredients.includes(`tomato`)
        //     return recipe;
        // })

        // const match = includesAll(allRecipeArray, targetArray);

        // console.log(match);
        // console.log(targetIngredients);

        // -------------------------------------------------------------------------------------------------------------------------------------------

        // manage to get the filter(includes() && includes()) option to work dynamically 
        // add more code for each ingredient?

        // function ingredientFilters(targetIngredient) {
        //     return recipes => recipes.ingredients.includes(targetIngredient)
        // }
        // for (targetIngredient of targetIngredients) {
        //     const loopedRecipes = result.filter(ingredientFilters(targetIngredient))
        //     console.log(loopedRecipes);
        // }

        // const filteredRecipes = result.filter(recipe => {
        //     for (ingredient of ingredients) {
        //         recipe.ingredients.includes(ingredient)
        //     }
        // })

        // -------------------------------------------------------------------------------------------------------------------------------------------

        // write filter(filters) and define filters outside? needs to be true or false

        // arr.forEach(function checking for ingredients)
        // checks each array entry for the function

        // const includesFnc = (arr, values) => {
        //     arr.ingredients.includes(values)
        // };

        // const filteredRecipes = result.filter(recipe => 
        // {for (i of targetIngredients)  {recipe.ingredients.includes(i.toString() )} }
        // recipe.ingredients.includes(targetIngredients) // works for ONE ingredient
        // includesFnc(recipe, targetIngredients)
        // );
    })
        .catch(err => {
            console.error(err);
        });

    // console.log(`Found recipes ${JSON.stringify(allRecipesForIngredients)}`);

    // look for recipes matching the IDs
    let queryResultRecipes = await db.collection('recipeTest')
        .find({
            "_id": {
                "$in":
                    allRecipesForIngredients
            }
        })
        .toArray();

        // console.log(queryResultRecipes);

    return queryResultRecipes;

    // } catch (err) {
    //     console.log(err);
    // }
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