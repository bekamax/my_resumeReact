import React from "react";
import "./navbar.css"
import { Link, NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="contayner">
        <div className="logo">
          <h1>Bekamax05</h1>
        </div>
        <div className="nav_rigth">
          <Link to="/">HOME</Link>
          <Link to="/info">INFO</Link>
          <Link to="/opyt">EXPERIENCE</Link>
          <Link to="/myfoto">MY FOTO</Link>
          <Link to="/contact">CONTACT</Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
