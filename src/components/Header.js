import React from "react";
import logo from "../images/tmdb-logo.svg";
import account_logo from "../images/account-logo.svg";
import "../components/Header.css";


function Header() {
  return (
    <header>
      <nav className="navbar">
      <div>
        <img className="navbar-logo" src={logo} alt="tmdb" />
      </div>
      <div className="navbar-links">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">TV Shows</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">New &amp; popular</a></li>
          <li><a href="#">My List</a></li>
        </ul>
      </div>
      </nav>
      <div>
        <img className="account-logo" src={account_logo} alt="account" />
      </div>
    </header>
  );
}

export default Header;
