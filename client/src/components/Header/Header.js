import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";

const Header = () => {
    return (
        <nav className="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <a className="navbar-item">
                    <img src="https://www.vhv.rs/dpng/d/82-821105_cooking-png-icon-food-transparent-png.png"/>
                    <h1 className="title">Ingreduce</h1>
                </a>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu">

                <div className="navbar-start">
                    <a className="navbar-item has-text-primary">
                        My Ingredients
                    </a>

                    <a className="navbar-item has-text-primary">
                        My Recipes
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <a className="button has-text-primary">
                                Log in
                            </a>
                            <Link to="/registration" className="button is-primary">
                                <strong>Register</strong>
                            </Link>
                        </div>
                    </div>
                </div>

            </div>
      
        </nav>
    );
}

export default Header;