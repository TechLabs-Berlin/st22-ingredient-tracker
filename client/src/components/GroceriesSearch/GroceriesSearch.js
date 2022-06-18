import React, {useState, useEffect} from "react";
import axios from "axios";
import GroceriesList from "../GroceriesList/GroceriesList";
import GroceryItem from "../GroceriesList/GroceriesList";

const GroceriesSearch = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    const [list, setList] = useState([]);

    let listVisible = false;

    //run when component is first rendered and when the search term changes
    useEffect(() => {
        const search = async() => {
            const {data} = await axios.get("https://en.wikipedia.org/w/api.php", {
                params: {
                    action: "query",
                    list: "search",
                    origin: "*",
                    format: "json",
                    srsearch: term
                }
            });

           setResults(data.query.search);

        };

        const timeoutId = setTimeout(() => {
            //only search when there is a non-empty term set
            if (term) {
                search();
            }
        }, 500);

        return () => {
            clearTimeout(timeoutId);
        };
        
    }, [term]);

    console.log(list);

    const renderedResults = results.map((result) => {

        const onAddBtnClick = event => {
            setList(list.concat(<GroceryItem key={result.title}/>));
        }

        return (
            <div class="columns buttons is-right">
                <div class="column">{result.title}</div>   
                <div class="column is-one-quarter-mobile">
                    <a 
                        class="button is-primary" 
                        action="submit"
                        onClick={onAddBtnClick}
                    >Add</a>
                </div>
            </div>
        )
    });

    return (
        <div class="box"> 
            <label class="label has-text-primary">Search</label>
                <div class="field">
                    <p class="control has-icons-left has-icons-right">
                        <span class="icon has-text-primary"><i class="fas fa-search"></i></span>
                        <input 
                            value={term}
                            onChange={e => {
                                setTerm(e.target.value);
                                console.log(term);
                                if (e.target.value === "") {
                                    //console.log("empty");
                                    listVisible = false;
                                    setResults([]);
                                } else {
                                    //console.log(e.target.value);
                                    listVisible = true;
                                }
                            }}
                            class="input is-rounded is-primary" 
                            type="search" 
                            placeholder="search ingredient"
                        />
                    </p>
                </div>
                <div class={`${listVisible ? "box" : ""}`}>
                    {results.length < 0 ? "" : renderedResults}
                </div>
        </div>
    );
}

export default GroceriesSearch;