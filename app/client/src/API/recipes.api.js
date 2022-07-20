import axios from "axios";

export async function getRecipesForIngredients(ingredientNames, n) {
    try {
        console.log(`Sending ${ingredientNames} for ${n} recipe suggestions to server`);

        // old code: turn ingredientNames into correctly formatted string for the request --------------------------------
        // const ingredientQuery = ingredientNames.map(function (i) {
        //     return i;
        //     // return i.replace(/\s+/g, '_');
        // }).join("+");

        const foundRecipes = await axios.get('http://localhost:5000/recipes/search', { params: { ingredients: ingredientNames, n: n } }, { withCredentials: true }); // pass ingredients here
        console.log(foundRecipes);
        return foundRecipes;
    } catch (error) {
        console.log(error);
    }
}

export async function getRecipeForId(id) {
    try {
        // console.log(`Sending ${id} for recipe show route to server`);
        console.log('Received')
        // console.log(id)

        // old code: turn ingredientNames into correctly formatted string for the request --------------------------------
        // const ingredientQuery = ingredientNames.map(function (i) {
        //     return i;
        //     // return i.replace(/\s+/g, '_');
        // }).join("+");

        const foundRecipe = await axios.get(`http://localhost:5000/recipes/show/${id}`, { withCredentials: true }); 
        console.log(foundRecipe);
        return foundRecipe;
    } catch (error) {
        console.log(error);
    }
}
