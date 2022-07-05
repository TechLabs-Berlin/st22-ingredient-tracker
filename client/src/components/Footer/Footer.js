import React from "react";
import {BrowserRouter, Route, Link} from "react-router-dom";
import logo from "../../images/logo.svg";

const Footer = () => {
    return (
        <footer className="footer columns has-background-white">
            <div className="column is-one-fifths">
                <Link to="/">
                    <img src={logo} alt="Ingreduce logo"/>
                </Link>
            </div>
            <div className="column is-two-fifths">

            </div>
            <a className="column has-text-weight-bold has-text-primary">
                About
            </a>
            <div className="column">
                ©Reduce, Inc. 2022. We love our users!
            </div>
        </footer>    
    );
}

export default Footer;