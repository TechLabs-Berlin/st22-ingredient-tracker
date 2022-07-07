import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const Groceries = () => {

    let listVisible = false;

    //in the initial state there already should be an array that has been saved before
    const [groceries, setGroceries] = useState([
        {name: "apples", type: "fruit", key: "apples"}, 
        {name: "butter", type: "dairy", key: "butter"}, 
        {name: "zucchini", type: "vegetable", key: "zucchini"},
        {name: "cumin", type: "spice", key: "cumin"}
    ]);

    const GroceriesSearch = () => {
        const [term, setTerm] = useState("");
        const [results, setResults] = useState([]);

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
    
        const renderedResults = results.map((result) => {
    
            //adds ingredient from search to inventory
            const onAddBtnClick = event => {
                setGroceries(groceries.concat({name: result.title, type:"", key: result.title}));
            }
    
            return (
                <div className="columns buttons is-right">
                    <div className="column" key={result.title}>{result.title}</div>   
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

    const GroceryItem = (props) => {
    
        const deleteItem = (itemKey) => {
            setGroceries(groceries.filter((item) => item.key !== itemKey));
        }
    
        return (
            <>
                {groceries.map((item, itemIndex) => {
                    return (
                        <div className="button is-rounded" key={itemIndex}>
                            {item.name}
                            <span className="tag">{item.type}</span>
                            <button 
                                className="delete is-small"
                                onClick={event => deleteItem(item.key)}
                            ></button>
                        </div>
                    ) 
                })}
            </>
        );
    }
    
    const GroceriesList = () => {
        return (
            <section className="box">
                <h3 className="subtitle has-text-primary">My Inventory</h3>
                <GroceryItem />
            </section>
        );
    }

    return (
        <>
            <br></br>
            <Link to="/recipe_detail"><button className="button has-text-primary">Go to Recipe Detail</button></Link>
            <br></br>
            <button className="button is-primary">Find a recipe</button>
            <GroceriesList />
            <GroceriesSearch />
        </>
    );
}

export default Groceries;