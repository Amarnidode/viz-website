import React from "react";
import { Link } from "react-router-dom";  // Import Link for navigation
import "./navbar.css";
import vzImage from "../assets/vz.png";

function Navbar() {
  return (
    <nav className="navbar">
      <img src={vzImage} alt="VZ Logo" className="logo" />

      <div className="container">
        <ul className="list-container">
          <Link to="/Home">Home</Link>
          <Link to="/">Products</Link>
          <Link to="/">Services</Link>
          <Link to="/contact" >Contact</Link>
          <Link to="/About">About Us</Link>  
        </ul>
        <input type="text" className="search-box" placeholder="Search..." />
        <button className="search-btn">🔍</button>
      </div>
    </nav>
  );
}

export default Navbar;
