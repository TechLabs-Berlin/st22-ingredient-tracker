import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import "./RecipeDetail.css";
import { getRecipeForId } from "../../API/recipes.api";
import placeholder_fullHD from "../../images/placeholder_fullHD.png";
import backArrow from "../../images/backArrow.png";

const RecipeDetail = () => {
  let id = "";
  let selectedItems = ["thiswillalwaysjustreturnundefined"];
  const location = useLocation();

  if (!location.state) {
    console.log("No ID received");
  } else {
    id = location.state.id;
    selectedItems = location.state.selectedItems;
    // console.log('Sending');
    console.log(selectedItems);
  }

  console.log(id);
  const [recipe, setRecipe] = useState([]);

  const showRecipe = async () => {
    // console.log('Sending', id)
    let response = await getRecipeForId(id);
    if (response != null) {
      // console.log(response);
      // console.log('Displayed groceries');
      setRecipe(response.data);
    } else if ((response.status = null)) {
      console.log("No ID received");
    } else {
      console.log("An error occurred");
    }
  };

  useEffect(() => {
    showRecipe();
  }, []);

  const makeIngredientArray = (ingredients) => {
    const ingredientArray = ingredients.split("; ");
    return ingredientArray;
  };

  return (
    <section id="recipeDetail">
      <Link to="/recipe_overview" state={{ ingredients: selectedItems }}>
        <img id="backToOverview" src={backArrow} alt="back to results" />
      </Link>
      <div className="card">
        <div className="card-image">
          <figure className="image">
            {recipe.image_url && (
              <img src={recipe.image_url} alt="recipe image" />
            )}
            {!recipe.image_url && (
              <img src={placeholder_fullHD} alt="recipe image" />
            )}
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
          <div className="column">
            <strong>Preparation time:</strong> {recipe.prep}
          </div>
          <div className="column">
            <strong>Cooking time:</strong> {recipe.cook}
          </div>
          <div className="column">
            <strong>Total time:</strong> {recipe.total}
          </div>
          <div className="column">
            <strong>Yield:</strong> {recipe.yield}
          </div>
        </div>
        <div className="columns">
          <div
            className="column is-two-fifths has-background-primary has-text-white has-text-left card-content"
            id="ingredients"
          >
            <h2 className="subtitle has-text-white">Ingredients</h2>
            <ul>
              {/* for some reason this creates an error when first loading the page. Disabling the code displays the page and then enabling again maps the ingredients 
                            says "recipe.ingredients is undefined" even though just using recipe.ingredients works fine
                            running any method on .ingredients seems to cause this issue */}

              {/* might have fixed it by checking for condition that recipe.ingredients exist and then run the function */}
              {recipe.ingredients &&
                makeIngredientArray(recipe.ingredients).map(
                  (ingredient, ingredientIndex) => {
                    return <li key={ingredientIndex}>{ingredient}</li>;
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
    </section>
  );
};

export default RecipeDetail;
