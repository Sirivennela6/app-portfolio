import "./NavbarStyles.css";
import React from 'react';
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="header">
      <h1>
        <Link to="/">Portfolio</Link>
      </h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/project">Project</Link>
        </li>
        <li>
          <Link to="/about">About</Link>
        </li>
        <li>
          <Link to="/contact">Contact</Link>
        </li>
      </ul>
    </div>
  );
};

export default Navbar;
