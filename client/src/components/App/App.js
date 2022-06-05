import React from "react";
import DemoData from '../DemoComponent';
import Groceries from "../Groceries/Groceries";

function App () {
    return (
        <div className="App">
            <h1>Ingredient Tracker Landing Page</h1>
            <Groceries />
            < DemoData />
        </div>
    );
};

export default App;