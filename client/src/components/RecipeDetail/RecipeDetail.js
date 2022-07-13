import React from "react";
import {Link} from "react-router-dom";

const RecipeDetail = () => {
    return (
        <>
            <br></br>
            <br></br>
            <Link to="/groceries"><button>Back to Groceries (later an arrow to RecipesOverview)</button></Link>
            <div className="card">
                <div className="card-image">
                    <figure className="image is-4by3">
                        <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                    </figure>
                </div>
                <div className="columns">
                    <div className="column is-two-fifths has-background-primary has-text-white has-text-left card-content">
                        <h2 className="subtitle has-text-white">Ingredients</h2>
                        <ul>
                            <li>1 Eggplant</li>
                            <li>1 teaspoon vegetable oil</li>
                            <li>1/2 teaspoon cumin seeds</li>
                        </ul>
                    </div>
                    <div className="column has-text-left card-content">
                        <h2 className="subtitle has-text-primary">Directions</h2>
                        Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.
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