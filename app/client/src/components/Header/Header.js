import React, { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import logo from "../../images/logo.svg";
import "./Header.css"
import { getUserBySession } from "../../API/user.api";
import axios from 'axios';

const Header = () => {

    let id = '';
    let selectedItems = ['thiswillalwaysjustreturnundefined'];
    const location = useLocation();

    const handleLogout = async () => {
        try {
            console.log('Sending post to logout');
            await axios({
                method: 'post',
                withCredentials: true,
                url: 'http://localhost:5000/user/logout',
            });
            window.location = "/login";
        }
        catch (err) {
            console.log(err.message);
        }
    }

    const [user, setUser] = useState([]);

    const getData = async () => {
        const response = await getUserBySession();
        if (response != null) {
            console.log('Found user:', response);
            setUser(response.data)
        } else if (response.status = null) {
            console.log([{ name: 'Please log into your account and try again' }]);
        }
    }

    useEffect(() => {
        getData();
    }, [])

    function userGreeting(user) {
        return <p id="username-display" className="has-text-primary">Welcome back, <i><span>{user.username}</span></i></p>;
    }

    function guestGreeting() {
        return <p id="username-display" className="has-text-primary">Please log in</p>;
    }

    return (
        <nav className="navbar is-light is-fixed-top has-background-white" role="navigation" aria-label="main navigation">
            <div className="navbar-brand">
                <Link to="/" className="navbar-item">
                    <img src={logo} alt="Ingreduce logo" />
                </Link>

                <a role="button" className="navbar-burger" aria-label="menu" aria-expanded="false">
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                    <span aria-hidden="true"></span>
                </a>
            </div>

            <div className="navbar-menu">

                <div className="navbar-start">
                    <Link to="/groceries" state={{ ingredients: selectedItems }} className="navbar-item has-text-primary">
                        My Ingredients
                    </Link>

                    <a className="navbar-item has-text-primary">
                        My Recipes
                    </a>
                </div>
                <div className="navbar-end">
                    <div className="navbar-item">
                        {user.username && userGreeting(user)}
                        {!user.username && guestGreeting()}
                        <div className="buttons">
                            {!user.username && <Link to="/login" className="button is-primary">Login</Link>}
                            {user.username && <button onClick={() => handleLogout()} className="button is-primary">Logout</button>}
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