import React from "react";
import logo from "../images/tmdb-logo.svg";
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
          <li><a href="#">Tv shows</a></li>
          <li><a href="#">Movies</a></li>
          <li><a href="#">New &amp; popular</a></li>
          <li><a href="#">My List</a></li>
        </ul>
      </div>
      </nav>
    </header>
  );
}

export default Header;
