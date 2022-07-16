import React from "react";
import {Link} from "react-router-dom";
import "./RecipeDetail.css"

const RecipeDetail = () => {
    const demoRecipe = {
        "recipe_link":"https://www.allrecipes.com/recipe/238691/simple-macaroni-and-cheese/",
        "name":"Simple Macaroni and Cheese Recipe",
        "description":"Quick, easy, and tasty macaroni and cheese dish. Fancy, designer mac and cheese often costs forty or fifty dollars to prepare when you have so many exotic and expensive cheeses, but they aren't always the best tasting. This simple recipe is cheap and tasty.",
        "prep":"10 mins",
        "cook":"15 mins",
        "additional":null,
        "total":"25 mins",
        "servings":"4",
        "yield":"4 servings",
        "ingredients":"1 (8 ounce) box elbow macaroni; cup butter;  cup all-purpose flour; teaspoon salt; ground black pepper to taste; 2 cups milk; 2 cups shredded Cheddar cheese",
        "instructions":"Bring a large pot of lightly salted water to a boil. Cook elbow macaroni in the boiling water, stirring occasionally until cooked through but firm to the bite, 8 minutes. At the same time, melt butter in a saucepan over medium heat. Add flour, salt, and pepper and stir until smooth, about 5 minutes. Pour in milk slowly, while stirring continuously. Continue to cook and stir until mixture is smooth and bubbling, about 5 minutes, making sure the milk doesn't burn. Add Cheddar cheese and stir until melted, 2 to 4 minutes. Drain macaroni and fold into cheese sauce until coated.","nutrition":"630 calories; protein 26.5g; carbohydrates 55g; fat 33.6g; cholesterol 99.6mg; sodium 777mg.",
        "images_url":"https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fstatic.onecms.io%2Fwp-content%2Fuploads%2Fsites%2F43%2F2022%2F03%2F19%2F238691-Simple-Macaroni-And-Cheese-mfs_006.jpg; https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F679c455ed74689800868fbbe020639f2%2F1653176636image.jpg; https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F679c455ed74689800868fbbe020639f2%2F165310488620220520_204159.jpg; https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F679c455ed74689800868fbbe020639f2%2F16450136607B0E9ECC-A28D-4F02-BAA9-F38C26122424.jpeg; https://imagesvc.meredithcorp.io/v3/mm/image?url=https%3A%2F%2Fpublic-assets.meredithcorp.io%2F679c455ed74689800868fbbe020639f2%2F164409795116440979333786672039001412349626.jpg"
    }

    const makeIngredientArray = (ingredients) => {
        const ingredientArray = ingredients.split('; ');
        return ingredientArray;
    }

    const getFirstImage = (imageURLstrings) => {
        const firstImage = imageURLstrings.split('; ');
        return firstImage[0];
    }

    return (
        <>
            <br></br>
            <br></br>
            <Link to="/groceries"><button>Back to Groceries (later an arrow to RecipesOverview)</button></Link>
            <div className="card" id="recipeDetail">
                <div className="card-image">
                    <figure className="image">
                        <img 
                            src={`${!demoRecipe.images_url ? "https://bulma.io/images/placeholders/1280x960.png":  getFirstImage(demoRecipe.images_url)}`}
                            alt="Placeholder image"/>
                    </figure>
                </div>
                <div id="recipeDetailButtons">
                    <button className="button is-primary">Add to My Recipes</button>
                    <button className="button is-primary">Mark as completed</button>
                </div>
                <header className="card-header">
                    <h1 className="card-header-title title">{demoRecipe.name}</h1>  
                </header>
                <div className="columns" id="stats">
                        <div className="column"><strong>Preparation time:</strong> {demoRecipe.prep}</div>
                        <div className="column"><strong>Cooking time:</strong> {demoRecipe.cook}</div>
                        <div className="column"><strong>Total time:</strong> {demoRecipe.total}</div>
                        <div className="column"><strong>Yield:</strong> {demoRecipe.yield}</div>
                </div>
                <div className="columns">
                    <div className="column is-two-fifths has-background-primary has-text-white has-text-left card-content" id="ingredients">
                        <h2 className="subtitle has-text-white">Ingredients</h2>
                        <ul>
                            {makeIngredientArray(demoRecipe.ingredients).map((ingredient, ingredientIndex) => {
                                    return (
                                        <li key={ingredientIndex}>{ingredient}</li>
                                    )
                                }
                            )}
                        </ul>
                    </div>
                    <div className="column has-text-left card-content" id="directions">
                        <h2 className="subtitle has-text-primary">Directions</h2>
                        <p>{demoRecipe.instructions}</p>
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