import React from "react";
import DemoData from '../DemoComponent';
import GroceriesSearch from "../GroceriesSearch/GroceriesSearch";
import GroceriesList from "../GroceriesList/GroceriesList";

function App () {
    return (
        <div className="App">
            <h1>Ingredient Tracker Landing Page</h1>
            <GroceriesSearch />
            <GroceriesList />
            < DemoData />
        </div>
    );
};

export default App;