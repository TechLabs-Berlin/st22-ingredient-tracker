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
        <div class="box">
            <ul>
                <li class="box"><span>Butter</span>
                    <a class="button is-danger is-outlined">
                        <span class="icon is-small"><i class="fas fa-trash"></i></span>
                    </a>
                </li>
            </ul>
        </div>
    );
}


export default GroceriesList;