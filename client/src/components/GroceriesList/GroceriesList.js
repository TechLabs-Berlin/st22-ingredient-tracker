import React from "react";
import GroceriesSearch from "../GroceriesSearch/GroceriesSearch";

const addIngredient = (ingredient) => {
    
}

const GroceriesList = () => {
    return (
        <div class="box">
            <ul>
                <li class="box"><span>Butter</span>
                    <a class="button is-danger is-outlined">
                        <span class="icon is-small"><i class="fas fa-trash"></i></span>
                    </a>
                </li>
                <li class="box">wheat flour</li>
            </ul>
        </div>
    );
}

export default GroceriesList;