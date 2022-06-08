import React from "react";
//import {MDCFoo, MDCFooFoundation} from '@material/foo';

const GroceriesSearch = () => {
    return (
        <div className="searchbar">
            <div>
                <label class="mdc-text-field mdc-text-field--filled mdc-floating-label">
                    <span class="mdc-floating-label">Search</span>
                <input class="mdc-text-field__input" type="text"/>
                </label>
            </div>
            <button action="submit" class="mdc-button mdc-button--raised">Add</button>
    <label class="mdc-text-field mdc-text-field--filled">
  <span class="mdc-floating-label" id="my-label-id">Hint text</span>
  <input class="mdc-text-field__input" type="text" aria-labelledby="my-label-id"/>
</label>
        </div>
    );
}

export default GroceriesSearch;