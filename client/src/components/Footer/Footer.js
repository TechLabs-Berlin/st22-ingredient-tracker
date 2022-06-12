import React from "react";

const Footer = () => {
    return (
        <nav class="footer">
            <div class="navbar-brand">
                <a class="navbar-item">
                    <img src="https://www.vhv.rs/dpng/d/82-821105_cooking-png-icon-food-transparent-png.png"/>
                    <h1 class="subtitle">Ingreduce</h1>
                </a>
            </div>

            <div class="navbar-menu">

                <div class="navbar-start">
                    <a class="navbar-item">
                        About
                    </a>

                    <a class="navbar-item">
                        Community
                    </a>

                    <a class="navbar-item">
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