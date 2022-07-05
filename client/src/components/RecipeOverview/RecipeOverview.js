import React, { useEffect, useState } from 'react';
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

function Recepie({ title, imageURL, prepTime, cookTime }) {
    return (
        <div className='column'>
            <div className='card is-clickable' id='card'>
                <div className='card-image'>
                    <figure className='image'>
                        <img src={imageURL} alt='recipe photo'></img>
                    </figure>
                </div>
                <div className='card-content'>
                    <div className='media-content has-text-left'>
                        <p class="title is-4 has-text-primary">{title}</p>
                    </div>
                </div>
                <div className='card-footer'>
                    <p className='card-footer-item'>Prep Time: {prepTime} min.</p>
                    <p className='card-footer-item'>Cook Time: {cookTime} min.</p>
                </div>
            </div>
        </div>
    )
}

function RecipesOverview() {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        getRecipesForIngredients('tomatoes').then((recipesServerResponse) => {
            setRecipes(recipesServerResponse.data);
        })
    }, [])

    console.log(recipes);

    return (
        <div>
            {/* Recipe Results Title */}
            <div className='mt-6'>
                <h1 className='is-size-3 is-size-4-mobile has-text-weight-semibold'>Recipe results for</h1>
            </div>
            {recipes.map((recepie) =>
                <Recepie
                    title={recepie.title}
                    imageURL={recepie.imageURL}
                    cookTime={recepie.cookTime}
                    prepTime={recepie.prepTime}
                />)}
            {/* First Row */}
        </div>
    )

}

export default RecipesOverview;