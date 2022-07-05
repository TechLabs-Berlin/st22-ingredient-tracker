import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import logo from "../../images/logo.svg";

const Footer = () => {
    return (
        <nav className="">
                
            <div className="navbar-menu columns">
                <div className="navbar-brand column is-5">
                <Link to="/" class="navbar-item">
                    <img src={logo} alt="Ingreduce logo"/>
                </Link>
                </div>

                <div className="navbar-start column is-2">
                    <a className="navbar-item has-text-weight-bold has-text-primary">
                        About
                    </a>
                </div>

                <div className="navbar-end column">
                    <div className="navbar-item">
                        ©Reduce, Inc. 2022. We love our users!
                    </div>
                </div>

            </div>
      
        </nav>
    );
}

export default Footer;