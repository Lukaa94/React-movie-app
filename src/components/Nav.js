import React from 'react';
import logo from "../images/tmdb-logo.svg";
import "../components/Nav.css";

function Nav() {
    return (
        <div>
            <img class="tmdb-logo" src={logo} alt="tmdb"/>
        </div>
    )
}

export default Nav
