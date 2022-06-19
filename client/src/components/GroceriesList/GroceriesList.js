import React from "react";
import GroceriesSearch from "../GroceriesSearch/GroceriesSearch";

let groceries = [
    {name: "apples", type: "fruit"}, 
    {name: "butter", type: "dairy"}, 
    {name: "zucchini", type: "vegetable"}];

// will need to be able to map over whole array of items without hardcoding the index
const GroceryItem = () => {
    return (
        <div class="box">
            {groceries[0].name}
            <span class="tag">{groceries[0].type}</span>
            <button class="delete is-small"></button>
        </div> 
    );
}

const GroceriesList = () => {
    return (
        <section class="box">
            <h3 class="subtitle has-text-primary">My Groceries</h3>
            <GroceryItem />
        </section>
    );
}


export default GroceriesList;