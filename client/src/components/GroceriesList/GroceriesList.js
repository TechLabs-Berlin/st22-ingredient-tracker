import React, { useState } from "react";
import GroceriesSearch from "../GroceriesSearch/GroceriesSearch";

/*
let groceries = [
    {name: "apples", type: "fruit", key: "apples"}, 
    {name: "butter", type: "dairy", key: "butter"}, 
    {name: "zucchini", type: "vegetable", key: "zucchini"},
    {name: "cumin", type: "spice", key: "cumin"}];
*/

const GroceryItems = () => {

    const [groceries, setGroceries] = useState([
        {name: "apples", type: "fruit", key: "apples"}, 
        {name: "butter", type: "dairy", key: "butter"}, 
        {name: "zucchini", type: "vegetable", key: "zucchini"},
        {name: "cumin", type: "spice", key: "cumin"}
    ]);

    const deleteItem = (itemKey) => {
        setGroceries(groceries.filter((item) => item.key !== itemKey));
    }

    return (
        <>
            {groceries.map((item, itemIndex) => {
                return (
                    <div className="box" key={itemIndex}>
                        {item.name}
                        <span className="tag">{item.type}</span>
                        <button 
                            className="delete is-small"
                            onClick={event => deleteItem(item.key)}
                        ></button>
                    </div>
                ) 
            })}
        </>
    );
}

const GroceriesList = () => {
    return (
        <section className="box">
            <h3 className="subtitle has-text-primary">My Inventory</h3>
            <GroceryItems />
        </section>
    );
}

export default GroceriesList;