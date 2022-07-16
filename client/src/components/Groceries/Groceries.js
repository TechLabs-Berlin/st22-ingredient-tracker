import React, { useState, useEffect } from "react";
import axios from "axios";
import {Link} from "react-router-dom";
import { getGroceries } from '../../API/groceries.api';
import "./Groceries.css"

const Groceries = () => {

    let listVisible = false;

        const [groceries, setGroceries] = useState([]);
    
        useEffect(() => {
            const getData = async () => {
                const response = await getGroceries();
                if (response != null) {
                    console.log(response);
                    setGroceries(response.data)
                // } else if (response.status = null) {
                //     console.log([{name: 'Please log into your account and try again'}]);                    
                //     setGroceries('Please log into your account to access your inventory')
                // } else {                    
                //     setGroceries('An error occurred')
                }
            }
           
            getData();
            
        }, [])
  
    //in the initial state there already should be an array that has been saved before
    // const [groceries, setGroceries] = useState([
    //     {name: "apples", key: "apples", selected: false}, 
    //     {name: "butter", key: "butter", selected: false}, 
    //     {name: "zucchini", key: "zucchini", selected: false},
    //     {name: "cumin", key: "cumin", selected: false}
    // ]);

    const [selectedItems, setSelectedItems] = useState([]);

    const GroceriesSearch = () => {
        const [term, setTerm] = useState("");
        const [results, setResults] = useState([]);

        //run when component is first rendered and when the search term changes
        //searches the edamam auto-complete api and saves the results in a State
        useEffect(() => {
            const search = async() => {
                const {data} = await axios.get("https://api.edamam.com/auto-complete?app_id=00fa302d&app_key=8f64835541ddc5b406b34fcb4b83def9&", {
                    params: {
                        app_id: "00fa302d",
                        app_key: "8f64835541ddc5b406b34fcb4b83def9",
                        q: term,
                        //limit doesn't work??
                        limit: 5
                }
            });
            //console.log(data);

            setResults(data);

        };

        //old useEffect() function where we made an request to the wikipedia API. I am keeping it for now as a reference.
        /*
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
        */ 

        // throttle search requests to unly update when the search term hasn't changed in 500 milliseconds
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
                //console.log(result);
                //"type" is not used yet - just included in case we will need it. So when adding the ingredient, so far only an empty string will be given as type placeholder
                setGroceries(groceries.concat({name: result, key: result, selected: false}));
            }
    
            return (
                <div className="columns buttons is-right">
                    <div className="column" key={result}>{result}</div>   
                    <div className="column is-one-quarter-mobile" key={result+"Key"}>
                        <a 
                            className="button is-primary" 
                            action="submit"
                            onClick={onAddBtnClick}
                            key={result+"Link"}
                        >Add</a>
                    </div>
                </div>
            )
        });
    
        // render search bar
        return (
            <div className="box" id="searchBox"> 
                <label className="label has-text-primary">Search</label>
                    <div className="field">
                        <p className="control">
                            <input 
                                value={term}
                                onChange={event => {
                                    setTerm(event.target.value);
                                    if (event.target.value === "") {
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

    const InventoryItems = () => {
    
        const deleteItem = (itemKey) => {
            setGroceries(groceries.filter((item) => item.key !== itemKey));
        }

        const selectItem = (clickedItem) => {
            if (!clickedItem.selected) {
                //console.log("select " + clickedItem.name);
                clickedItem.selected = true;
                setSelectedItems(selectedItems.concat(clickedItem));
            } else {
                //console.log("deselect " + clickedItem.name);
                setSelectedItems(selectedItems.filter((item) => item.key !== clickedItem.name));
                clickedItem.selected = false;
            }
            //console.log(`${clickedItem.name} = ${clickedItem.selected}`);
            
            //I think this console log is one step behind because the state just changes after the click
            //console.log(selectedItems);
        }

        //this console log shows the actual state of the selected item array
        console.log(selectedItems);
    
        if (groceries.length < 1) {
            return (
                <p className=" is-danger">empty :( please add at least one item to your inventory</p>
            )
        } else {
            return (
                <>
                    {groceries.map((item, itemIndex) => {
                        return (
                            <button 
                                className={`${!item.selected ? "button is-rounded" : "button is-rounded is-warning is-light is-outlined"}`}
                                key={itemIndex}
                                onClick={event => selectItem(item)}
                                >{item.name}
                                    <button 
                                        className="delete is-small"
                                        onClick={event => deleteItem(item.key)}
                                        key={item+"button"}
                                    ></button>
                            </button>
                        ) 
                    })}
                </>
            );
        }
    }

    //container for the inventory
    const Inventory = () => {
        return (
            <section className="box" id="inventory">
                <h3 className="subtitle has-text-white">My Inventory</h3>
                <InventoryItems />
            </section>
        );
    }

    //one ingredient type section
    const IngredientType = () => {
        return (
            <div className="columns">
                <div className="card column is-half">
                    <div className="card-content">
                        <h3 className="card-header-title is-centered title is-5 has-text-primary">Vegetables & Greens</h3>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                </div>
                <div className="card column is-half">
                    <div className="card-content">
                        <h3 className="card-header-title is-centered title is-5 has-text-primary">Spices</h3>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image"/>
                        </figure>
                    </div>
                </div>
            </div>
            
        );
    }

    //container for ingredient sections by type
    const IngredientsSection = () => {
        return (
            <section id="ingredientSection">
                <IngredientType />
            </section>
        );
    }

    console.log(selectedItems.length);

    const SearchRecipeButton = () => {
        if (selectedItems.length === 0) {
            return (
                <section id="searchRecipe">
                    <button className="button is-primary" disabled>Find a recipe</button>
                    <p className="has-text-danger">You need to select at least one must-have ingredient before you search for a recipe!</p>
                </section>
            ) 
        } else {
            return (
                <section id="searchRecipe">
                    <button className="button is-primary">Find a recipe</button>
                </section>
            );
        }
    }

    return (
        <section id="groceries">
            <br></br>
            <br></br>
            <br></br>
            <Link to="/recipe_detail"><button className="button has-text-primary" id="findRecipeButton">Go to Recipe Detail</button></Link>
            <br></br>
            <SearchRecipeButton />
            <Inventory />
            <GroceriesSearch />
            {/*<IngredientsSection />*/}
        </section>
    );
}

export default Groceries;