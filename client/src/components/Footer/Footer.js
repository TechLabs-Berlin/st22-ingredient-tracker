import React from "react";

const Footer = () => {
    return (
        <nav className="">
                
            <div className="navbar-menu columns">
                <div className="navbar-brand column is-5">
                    <div className="navbar-item ">
                        <img src="https://www.vhv.rs/dpng/d/82-821105_cooking-png-icon-food-transparent-png.png"/>
                        <h1 className="subtitle has-text-primary">Ingreduce</h1>
                    </div>
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