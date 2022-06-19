import React from "react";

const Footer = () => {
    return (
        <nav class="">
                
            <div class="navbar-menu columns">
                <div class="navbar-brand column is-5">
                    <div class="navbar-item">
                        <img src="https://www.vhv.rs/dpng/d/82-821105_cooking-png-icon-food-transparent-png.png"/>
                        <h1 class="subtitle">Ingreduce</h1>
                    </div>
                </div>

                <div class="navbar-start">
                    <a class="navbar-item has-text-weight-bold">
                        About
                    </a>

                    <a class="navbar-item has-text-weight-bold">
                        Community
                    </a>

                    <a class="navbar-item has-text-weight-bold">
                        Company
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        ©Copyright
                    </div>
                </div>

            </div>
      
        </nav>
    );
}

export default Footer;