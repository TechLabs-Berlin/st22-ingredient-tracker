import React from "react";

const GroceriesSearch = () => {
    return (
        <div class="box"> 
            <label class="label">Search</label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                    <span class="icon has-text-primary"><i class="fas fa-search"></i></span>
                    <input class="input is-rounded is-primary" type="search" placeholder="search ingredient"/>
                    </p>
                </div>
            <button class="button is-primary" action="submit">Add</button>

        </div>
    );
}

export default GroceriesSearch;