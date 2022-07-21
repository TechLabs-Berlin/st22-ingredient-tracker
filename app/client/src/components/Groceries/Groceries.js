import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import { getGroceries } from '../../API/groceries.api';
import "./Groceries.css"

const Groceries = () => {

    let listVisible = false;

    const [groceries, setGroceries] = useState([]);

    // ---------------------------------------------------------------- userId in calls
    // const getData = async (userId) => {
    const getData = async () => {
        const response = await getGroceries();
        if (response != null) {
            // console.log(response);
            // console.log('Displayed groceries');
            setGroceries(response.data.groceries)
        } else if (response.status = null) {
            console.log([{ name: 'Please log into your account and try again' }]);
        } 
    }

    useEffect(() => {    
        getData();
    }, [])

    const [selectedItems, setSelectedItems] = useState([]);

    const GroceriesSearch = () => {
        const [term, setTerm] = useState("");
        const [results, setResults] = useState([]);

        //run when component is first rendered and when the search term changes
        //searches the edamam auto-complete api and saves the results in a State
        useEffect(() => {
            const search = async () => {
                const { data } = await axios.get("https://api.edamam.com/auto-complete?app_id=00fa302d&app_key=8f64835541ddc5b406b34fcb4b83def9&", {
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
            const onAddBtnClick = async () => {
                try {
                    // console.log(result);
                    await axios({
                        method: 'put',
                        withCredentials: true,
                        url: 'http://localhost:5000/groceries/current',
                        data: {
                            name: result,
                            key: result // this takes care of frontend error messages that popped up in regards to React List items needing a key, ot somesuch
                        }
                    });
                    console.log(`Added ${result}`);
                    getData();
                }
                catch (err) {
                    console.log(err.message);
                }

                // Previous frontend solution

                //console.log(result);
                //"type" is not used yet - just included in case we will need it. So when adding the ingredient, so far only an empty string will be given as type placeholder
                // setGroceries(groceries.concat({name: result, key: result, selected: false}));
            }
            
            return (
              <div  id="searchResult">
                <div key={result}>
                  {result}
                </div>
                <div key={result + "Key"}>
                  <a
                    className="button is-primary"
                    id="addButton"
                    action="submit"
                    onClick={onAddBtnClick}
                    key={result + "Link"}
                  >
                    Add
                  </a>
                </div>
              </div>
            );
          });

        // render search bar
        return (
            <div className="box" id="searchBox">
                <label className="label has-text-primary">Search</label>
                <div className="field">
                    <p className="control">
                        { groceries.length <= 0 &&
                        <input disabled
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
                            placeholder="please log in first"
                        />
                        }
                        { groceries.length > 0 &&
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
                            placeholder="search ingredients"
                        />
                        }
                    </p>
                </div>
                <div className={`${listVisible ? "box" : ""}`} id="resultBox">
                    {results.length < 0 ? "" : renderedResults}
                </div>
            </div>
        );
    }

    const InventoryItems = () => {

        const deleteItem = async (targetItem) => {
            // const targetItem = item.name
            try {
                await axios({
                    method: 'patch',
                    withCredentials: true,
                    url: 'http://localhost:5000/groceries/current',
                    data: {
                        name: targetItem
                    }
                });
                console.log(`Removed ${targetItem.name}`);
                getData();
            }
            catch (err) {
                console.log(err.message);
            }
            // setGroceries(groceries.filter((item) => item.key !== itemKey));
        }

        const selectItem = (clickedItem) => {
            if (!clickedItem.selected) {
                //console.log("select " + clickedItem.name);
                clickedItem.selected = true;
                setSelectedItems(selectedItems.concat(clickedItem));
            } else {
                //console.log("deselect " + clickedItem.name);
                setSelectedItems(selectedItems.filter((item) => item.name !== clickedItem.name));
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
                <p className=" is-danger">Your inventory is empty! Please add at least one item to your inventory.</p>
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
                                        onClick={event => {
                                          event.stopPropagation(); 
                                          deleteItem(item);}} // this works with my backend routes
                                        // onClick={event => deleteItem(item.key)}
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
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
                        </figure>
                    </div>
                </div>
                <div className="card column is-half">
                    <div className="card-content">
                        <h3 className="card-header-title is-centered title is-5 has-text-primary">Spices</h3>
                        <figure className="image is-4by3">
                            <img src="https://bulma.io/images/placeholders/1280x960.png" alt="Placeholder image" />
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
                    <Link to="/recipe_overview" state={{ ingredients: selectedItems }}><button className="button is-primary">Find a recipe</button></Link>
                </section>
            );
        }
    }

    return (
        <section id="groceries">
            <SearchRecipeButton />
            <Inventory />
            <GroceriesSearch />
            {/*<IngredientsSection />*/}
        </section>
    );
}

export default Groceries;