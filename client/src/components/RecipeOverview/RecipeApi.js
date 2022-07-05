import axios from "axios";

export function getRecipesForIngredients(ingredients) { 
    return  axios.get('http://localhost:8080/recipes');
}