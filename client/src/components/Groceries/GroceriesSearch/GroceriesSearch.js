import React, {useState, useEffect} from "react";
import axios from "axios";
import GroceryItems from "../GroceriesList/GroceriesList";

const GroceriesSearch = () => {
    const [term, setTerm] = useState("");
    const [results, setResults] = useState([]);
    //in the initial state there already should be an array that has been saved before
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
            setList(list.concat(<GroceryItems name={result.title} type={""} key={result.title}/>));
        }

        return (
            <div className="columns buttons is-right">
                <div className="column">{result.title}</div>   
                <div className="column is-one-quarter-mobile">
                    <a 
                        className="button is-primary" 
                        action="submit"
                        onClick={onAddBtnClick}
                    >Add</a>
                </div>
            </div>
        )
    });

    return (
        <div className="box"> 
            <label className="label has-text-primary">Search</label>
                <div className="field">
                    <p className="control has-icons-left has-icons-right">
                        <span className="icon has-text-primary"><i className="fas fa-search"></i></span>
                        <input 
                            value={term}
                            onChange={e => {
                                setTerm(e.target.value);
                                console.log(term);
                                if (e.target.value === "") {
                                    listVisible = false;
                                    setResults([]);
                                } else {
                                    listVisible = true;
                                }
                            }}
                            className="input is-rounded is-primary" 
                            type="search" 
                            placeholder="search ingredient"
                        />
                    </p>
                </div>
                <div className={`${listVisible ? "box" : ""}`}>
                    {results.length < 0 ? "" : renderedResults}
                </div>
        </div>
    );
}

export default GroceriesSearch;