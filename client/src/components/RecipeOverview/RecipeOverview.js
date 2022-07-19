import React, { useEffect, useState } from 'react';
import { Link, useLocation } from "react-router-dom";
import { getRecipesForIngredients } from '../../API/recipes.api';
import './RecipeOverview.css';

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

function Recipe({ title, imageURL, prepTime, cookTime, targetId }) {

     // recover data sent by React State through link - doing this twice to keep selected ingredients even when navigating back and forth between detail and overview
     let ingredients = [ 'thiswillalwaysjustreturnundefined' ];
     const location = useLocation();
     if (!location.state) {
         console.log('No ingredients received');
     } else {
         ingredients = location.state.ingredients;
     }

    return (
        <div>
            {/* Recipe Card */}
            <div className='recipeCard'>
                {/* <Link to="/recipe_detail" state={{ id: targetId, selectedItems: ingredients }}> */}
                <Link to="/recipe_detail" state={{ id: targetId }}>
                    <div className='card is-clickable' id='card'>
                        {/* Recipe Image */}
                        <div className='card-image'>
                            <figure className='image'>
                                <img
                                    src={`${!imageURL ? "https://bulma.io/images/placeholders/1280x960.png" : imageURL}`}
                                    alt='recipe photo'></img>
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
                            <p className='card-footer-item'>Prep Time: {prepTime}.</p>
                            <p className='card-footer-item'>Total Time: {cookTime}.</p>
                            <p className='card-footer-item'>ID: {targetId}.</p>
                        </div>

                    </div>
                </Link>
            </div>
        </div>
    )
}

function RecipesOverview() {
    const [recipes, setRecipes] = useState([]);

    // recover data sent by React State through link - instead of temporary storage in backend - or send data in Groceries and then receive the data in here?
    let ingredients = [ 'thiswillalwaysjustreturnundefined' ];
    const location = useLocation();
    if (!location.state) {
        console.log('No ingredients received');
    } else {
        ingredients = location.state.ingredients;
    }

    // this logs twice for some reason - does the Groceries.js selection function create several arrays?
    // console.log(JSON.stringify(ingredients));

    let ingredientNames = ingredients.map(function (i) {
        return i['name'];
    });

    // console.log(`Sending ${ingredientNames} to API`);

    // Amount of results desired, just change it how it suits you best for the frontend. Could in theory give user option to choose how many recipes he wants to be shown/adapt it depending on computer screen/phone screen
    const n = 4;

    useEffect(() => {
        // pass in (selectedIngredients, n)
        getRecipesForIngredients(ingredientNames, n).then((recipesServerResponse) => {
            setRecipes(recipesServerResponse.data);
        })
    }, [])


    // const getFirstImage = (imageURLstrings) => {
    //     const firstImage = imageURLstrings.split('; ');
    //     return firstImage[0];
    // }

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
                    targetId={recipe._id}
                    title={recipe.name}
                    imageURL={recipe.image_url}
                    cookTime={recipe.cook}
                    prepTime={recipe.prep}
                />)}
        </div>
    )

}

export default RecipesOverview;