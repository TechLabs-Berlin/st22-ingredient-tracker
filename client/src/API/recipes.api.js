import axios from "axios";

export function getRecipesForIngredients(ingredients, n) {
    try {
        const foundRecipes = await axios.get('http://localhost:5000/recipes', { withCredentials: true }); // pass ingredients here
        return foundRecipes;
    } catch (error) {
        console.log(error);
    }
}
