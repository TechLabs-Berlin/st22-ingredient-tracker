import React, {useState, useEffect} from "react";
import axios from "axios";

const GroceriesSearch = () => {
    const [term, setTerm] = useState("");

    //run when component is first rendered and when the search term changes
    useEffect(() => {
        const search = async() => {
            await axios.get("thisisnotarealURLyet");
        };

        search();
        
    }, [term]);

    return (
        <div class="box"> 
            <label class="label">Search</label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <span class="icon has-text-primary"><i class="fas fa-search"></i></span>
                        <input 
                            value={term}
                            onChange={e => setTerm(e.target.value)}
                            class="input is-rounded is-primary" 
                            type="search" 
                            placeholder="search ingredient"
                        />
                    </p>
                </div>
            <button class="button is-primary" action="submit">Add</button>

        </div>
    );
}

export default GroceriesSearch;