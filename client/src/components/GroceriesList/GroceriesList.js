import React from "react";
import GroceriesSearch from "../GroceriesSearch/GroceriesSearch";

let groceries = ["apples", "butter", "wheat flour"];

const addIngredient = (ingredient) => {
    groceries.push(ingredient);
}

/*
const GroceriesList = ({groceries}) => {
    const list = groceries.map((item) => {
        return (
            <div class="box">
                <ul>
                    <li class="box"><span>Test{item}</span>
                        <a class="button is-danger is-outlined">
                            <span class="icon is-small"><i class="fas fa-trash"></i></span>
                        </a>
                    </li>
                </ul>
            </div>
        );
    });
}
*/

const GroceriesList = () => {
    return (
        <section class="box">
            <h3 class="subtitle has-text-primary">My Groceries</h3>
            <div class="box">
                butter
                <button class="delete is-small"></button>
            </div>   
            <div class="box">
                wheat flour
                <button class="delete is-small"></button>
            </div>
        </section>
    );
}


export default GroceriesList;