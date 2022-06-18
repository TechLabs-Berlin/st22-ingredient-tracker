import React from "react";

const Header = () => {
    return (
        <nav class="navbar is-light is-fixed-top" role="navigation" aria-label="main navigation">
            <div class="navbar-brand">
                <a class="navbar-item">
                    <img src="https://www.vhv.rs/dpng/d/82-821105_cooking-png-icon-food-transparent-png.png"/>
                    <h1 class="title">Ingreduce</h1>
                </a>

                <a role="button" class="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div class="navbar-menu">

                <div class="navbar-start">
                    <a class="navbar-item has-text-primary">
                        My Ingredients
                    </a>

                    <a class="navbar-item has-text-primary">
                        My Recipes
                    </a>
                </div>

                <div class="navbar-end">
                    <div class="navbar-item">
                        <div class="buttons">
                            <a class="button has-text-primary">
                                Log in
                            </a>
                            <a class="button is-primary">
                                <strong>Register</strong>
                            </a>
                        </div>
                    </div>
                </div>

            </div>
      
        </nav>
    );
}

export default Header;