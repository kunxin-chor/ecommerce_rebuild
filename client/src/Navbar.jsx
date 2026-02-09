import React, { useState, useEffect } from 'react';
import { Link } from 'wouter';

function Navbar() {
  const [isNavbarShowing, setNavbarShowing] = useState(false);

  const toggleNavbar = () => {
    setNavbarShowing(!isNavbarShowing);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container">
        <Link className="navbar-brand" href="/">E-Shop</Link>
        <button
          className="navbar-toggler"
          type="button"
          onClick={toggleNavbar}
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className={`collapse navbar-collapse ${isNavbarShowing ? "show" : ""}`} id="navbarNav">
          <ul className="navbar-nav ms-auto">
            <li className="nav-item">
              <Link className={`nav-link ${location=="/" ? 'active' : ''}`} aria-current="page" href="/">Home</Link>
            </li>
            <li className={`nav-item ${location=="/products" ? 'active' : ''}`}>
              <Link className="nav-link" href="/products">Products</Link>
            </li>
            <li className={`nav-item ${location=="/register" ? 'active' : ''}`}>
              <Link className="nav-link" href="/register">Register</Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;