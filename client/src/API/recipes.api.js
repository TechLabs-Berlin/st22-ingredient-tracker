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
