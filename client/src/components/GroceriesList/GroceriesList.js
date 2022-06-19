import React from "react";
import GroceriesSearch from "../GroceriesSearch/GroceriesSearch";

let groceries = [
    {name: "apples", type: "fruit", key: "apples"}, 
    {name: "butter", type: "dairy", key: "butter"}, 
    {name: "zucchini", type: "vegetable", key: "zucchini"},
    {name: "cumin", type: "spice", key: "cumin"}];

// will need to be able to map over whole array of items without hardcoding the index
const GroceryItem = () => {
    return (
        <>
            {groceries.map(item => {
                return (
                    <div class="box">
                        {item.name}
                        <span class="tag">{item.type}</span>
                        <button class="delete is-small"></button>
                    </div>
                ) 
            })}
        </>
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