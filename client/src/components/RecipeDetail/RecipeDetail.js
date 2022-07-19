import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./RecipeDetail.css"
import { getRecipeForId } from '../../API/recipes.api';

const RecipeDetail = () => {
    // const demoRecipe = {
    //     "recipe_link": "https://www.allrecipes.com/recipe/238691/simple-macaroni-and-cheese/",
    //     "name": "Simple Macaroni and Cheese Recipe",
    //     "description": "Quick, easy, and tasty macaroni and cheese dish. Fancy, designer mac and cheese often costs forty or fifty dollars to prepare when you have so many exotic and expensive cheeses, but they aren't always the best tasting. This simple recipe is cheap and tasty.",
    //     "prep": "10 mins",
    //     "cook": "15 mins",
    //     "additional": null,
    //     "total": "25 mins",
    //     "servings": "4",
    //     "yield": "4 servings",
    //     "ingredients": "1 (8 ounce) box elbow macaroni; cup butter;  cup all-purpose flour; teaspoon salt; ground black pepper to taste; 2 cups milk; 2 cups shredded Cheddar cheese",
    //     "instructions": "Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes. At the same time, melt butter in a saucepan over medium heat. Add flour, salt, and pepper and stir until smooth, about 5 minutes. Pour in milk slowly, while stirring continuously. Continue to cook and stir until mixture is smooth and bubbling, about 5 minutes, making sure the milk doesn't burn. Add Cheddar cheese and stir until melted, 2 to 4 minutes. Drain macaroni and fold into cheese sauce until coated.", "nutrition": "630 calories; protein 26.5g; carbohydrates 55g; fat 33.6g; cholesterol 99.6mg; sodium 777mg.",
    //     "images_url": "https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F19%2F238691-Simple-Macaroni-And-Cheese-mfs_006.jpg; https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F679c455ed74689800868fbbe020639f2%2F1653176636image.jpg; https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F679c455ed74689800868fbbe020639f2%2F165310488620220520_204159.jpg; https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F679c455ed74689800868fbbe020639f2%2F16450136607B0E9ECC-A28D-4F02-BAA9-F38C26122424.jpeg; https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F679c455ed74689800868fbbe020639f2%2F164409795116440979333786672039001412349626.jpg"
    // }

    let id = '';
    // let selectedItems = [ 'thiswillalwaysjustreturnundefined' ];
    const location = useLocation();

    if (!location.state) {
        console.log('No ID received');
    } else {
        id = location.state.id;
        // selectedItems = location.state.selectedItems;
        // console.log('Sending');
        // console.log(id);
    }

    console.log(id);
    const [recipe, setRecipe] = useState([]);

    const showRecipe = async () => {
        // console.log('Sending', id)
        let response = await getRecipeForId(id);
        if (response != null) {
            // console.log(response);
            // console.log('Displayed groceries');
            setRecipe(response.data)
        } else if (response.status = null) {
            console.log('No ID received');
        } else {
            console.log('An error occurred')
        }
    }

    useEffect(() => {
        showRecipe();
    }, [])

    const makeIngredientArray = (ingredients) => {
        const ingredientArray = ingredients.split('; ');
        return ingredientArray;
    }

    // const getFirstImage = (imageURLstrings) => {
    //     const firstImage = imageURLstrings.split('; ');
    //     return firstImage[0];
    // }

    return (
        <>
            <br></br>
            <br></br>
            {/* <Link to="/recipe_overview" state={{ ingredients: selectedItems }}><button>Back to RecipesOverview</button></Link> */}
            <Link to="/recipe_overview"><button>Back to RecipesOverview</button></Link>
            <div className="card" id="recipeDetail">
                <div className="card-image">
                    <figure className="image">
                        <img
                            src={`${!recipe.image_url ? "https://bulma.io/images/placeholders/1280x960.png" : recipe.image_url}`}
                            alt="Placeholder image" />
                    </figure>
                </div>
                <div id="recipeDetailButtons">
                    <button className="button is-primary">Add to My Recipes</button>
                    <button className="button is-primary">Mark as completed</button>
                </div>
                <header className="card-header">
                    <h1 className="card-header-title title">{recipe.name}</h1>
                </header>
                <div className="columns" id="stats">
                    <div className="column"><strong>Preparation time:</strong> {recipe.prep}</div>
                    <div className="column"><strong>Cooking time:</strong> {recipe.cook}</div>
                    <div className="column"><strong>Total time:</strong> {recipe.total}</div>
                    <div className="column"><strong>Yield:</strong> {recipe.yield}</div>
                </div>
                <div className="columns">
                    <div className="column is-two-fifths has-background-primary has-text-white has-text-left card-content" id="ingredients">
                        <h2 className="subtitle has-text-white">Ingredients</h2>
                        <ul>
                            <li>{recipe.ingredients}</li>

                            {/* for some reason this creates an error when first loading the page. Disabling the code displays the page and then enabling again maps the ingredients 
                            says "recipe.ingredients is undefined" even though just using recipe.ingredients works fine
                            running any method on .ingredients seems to cause this issue */}

                            {/* might have fixed it by checking for condition that recipe.ingredients exist and then run the function */}
                            {recipe.ingredients && makeIngredientArray(recipe.ingredients).map((ingredient, ingredientIndex) => {
                                return (
                                    <li key={ingredientIndex}>{ingredient}</li>
                                )
                            }
                            )}
                        </ul>
                    </div>
                    <div className="column has-text-left card-content" id="directions">
                        <h2 className="subtitle has-text-primary">Directions</h2>
                        <p>{recipe.instructions}</p>
                    </div>
                </div>
            </div>
            <br></br>
            <section className="container">
                <h1 className="subtitle has-text-white">SUGGESTIONS</h1>
                <p>Here will be some cards from the RecipeOverview page?</p>

            </section>
            <br></br>
            <br></br>
        </>
    );
}

export default RecipeDetail;