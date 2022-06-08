import React from "react";
//import {MDCFoo, MDCFooFoundation} from '@material/foo';

const GroceriesSearch = () => {
    return (
        <div className="searchbar">
            <label class="label">Search</label>
            <input class="input is-rounded is-primary" type="text"/>
            <button class="button is-primary" action="submit">Add</button>
        </div>
    );
}

export default GroceriesSearch;