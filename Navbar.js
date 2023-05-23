import React from 'react';
import { Link } from "react-router-dom";
import './Navbar.css'; // Import your CSS file for styling

//Functional component to create the Navbar component
function Navbar() {
  return (
    <nav className="navbar">
      <ul className="nav-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/register">Register</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </ul>
    </nav>
  );
}

export default Navbar;
