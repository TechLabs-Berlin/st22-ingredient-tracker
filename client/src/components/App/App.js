import React from "react";
import DemoData from '../DemoComponent';
import GroceriesSearch from "../GroceriesSearch/GroceriesSearch";
import GroceriesList from "../GroceriesList/GroceriesList";

function App () {
    return (
        <div className="App">
            <h1 class="title">Ingreduce</h1>
            <h2 class="subtitle">Landing Page</h2>
            <GroceriesSearch />
            <GroceriesList />
            < DemoData />
        </div>
    );
};

export default App;