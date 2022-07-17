import React, { useEffect, useState } from 'react';
import {Link} from "react-router-dom";
import { getRecipesForIngredients } from './RecipeApi';
import './RecipeOverview.css'

// const recipies = [{
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
//     title: "Third Title",
//     imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
//     prepTime: 30,
//     cookTime: 60
// }, {
//     title: "First Title",
//     imageURL: 'https://bulma.io/images/placeholders/1280x960.png',
//     prepTime: 30,
//     cookTime: 60
// }];

function Recipe({ title, imageURL, prepTime, cookTime }) {
    return (
        <div>
            {/* Recipe Card */}
            <div className='recipeCard'>
                <div className='card is-clickable' id='card'>

                    {/* Recipe Image */}
                    <div className='card-image'>
                        <figure className='image'>
                            <img src={imageURL} alt='recipe photo'></img>
                        </figure>
                    </div>

                    {/* Recipe Title */}
                    <div className='card-content'>
                        <div className='media-content has-text-left'>
                            <p class="title is-4 has-text-primary">{title}</p>
                        </div>
                    </div>

                    {/* Prep Time and Total Time */}
                    <div className='card-footer'>
                        <p className='card-footer-item'>Prep Time: {prepTime} min.</p>
                        <p className='card-footer-item'>Total Time: {cookTime} min.</p>
                    </div>

                </div>
            </div>
        </div>
    )
}

function RecipesOverview() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        // pass in (selectedIngredients, n)
        getRecipesForIngredients('tomatoes').then((recipesServerResponse) => {
            setRecipes(recipesServerResponse.data);
        })
    }, [])

    return (
        <div>
            {/* Recipe Results Title */}
            <br></br>
            <br></br>
            <br></br>
            <Link to="/groceries"><button className="button is-primary">Back to My Ingredients</button></Link>
            <div className='mt-6'>
                <h1 className='is-size-3 is-size-4-mobile has-text-weight-semibold mb-4'>Our recipe suggestions:</h1>
            </div>
            {recipes.map((recipe) =>
                <Recipe
                    title={recipe.title}
                    imageURL={recipe.imageURL}
                    cookTime={recipe.cookTime}
                    prepTime={recipe.prepTime}
                />)}
        </div>
    )

}

export default RecipesOverview;