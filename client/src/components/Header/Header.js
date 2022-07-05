import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import logo from "../../images/logo.svg";

const Header = () => {
    return (
        <nav class="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <Link to="/" class="navbar-item">
                    <img src={logo} alt="Ingreduce logo"/>
                </Link>

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
                            <Link to="/registration" class="button is-primary">
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