import React from "react";
import {Link} from "react-router-dom";
import logo from "../../images/logo.svg";

const Header = () => {
    return (
        <nav className="navbar is-light is-fixed-top has-background-white" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
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
                    <Link to="/groceries" className="navbar-item has-text-primary">
                        My Ingredients
                    </Link>

                    <a className="navbar-item has-text-primary">
                        My Recipes
                    </a>
                </div>

                <div className="navbar-end">
                    <div className="navbar-item">
                        <div className="buttons">
                            <Link to="/login" className="button is-primary">
                                Log in
                            </Link>

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