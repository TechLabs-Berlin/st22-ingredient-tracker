import axios from "axios";

export async function getRecipesForIngredients(ingredients, n) {
    try {
        const foundRecipes = await axios.get('http://localhost:5000/recipes/q', { withCredentials: true }); // pass ingredients here
        return foundRecipes;
    } catch (error) {
        console.log(error);
    }
}
