import React from "react";

const Footer = () => {
    return (
        <nav class="">
                
            <div class="navbar-menu columns">
                <div class="navbar-brand column is-5">
                    <div class="navbar-item ">
                        <img src="https://www.vhv.rs/dpng/d/82-821105_cooking-png-icon-food-transparent-png.png"/>
                        <h1 class="subtitle has-text-primary">Ingreduce</h1>
                    </div>
                </div>

                <div class="navbar-start column is-2">
                    <a class="navbar-item has-text-weight-bold has-text-primary">
                        About
                    </a>
                </div>

                <div class="navbar-end column">
                    <div class="navbar-item">
                        ©Reduce, Inc. 2022. We love our users!
                    </div>
                </div>

            </div>
      
        </nav>
    );
}

export default Footer;