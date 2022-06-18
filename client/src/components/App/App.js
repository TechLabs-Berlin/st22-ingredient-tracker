import React from "react";
import DemoData from '../DemoComponent';
import GroceriesSearch from "../GroceriesSearch/GroceriesSearch";
import GroceriesList from "../GroceriesList/GroceriesList";
import Header from "../Header/Header";

function App () {
    return (
        <div className="App">
            <Header />
            <GroceriesSearch />
            <GroceriesList />
            < DemoData />
        </div>
    );
};

export default App;