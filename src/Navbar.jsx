import React from 'react';
import Cart from './Cart';
import './index.css'; // Import the CSS module


const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md fixed-top navbar-dark bg-secondary">
      <div className="container">
        <a class="navbar-brand" href="#">Navbar 🍽️</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" 
      data-target="#navbarNavAltMarkup" aria-controls="navbarNavAltMarkup" 
      aria-expanded="false" aria-label="Toggle navigation">
    <span class="navbar-toggler-icon"></span>
  </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item"> Home
            </li>
            <li className="nav-item px-2"> Menu
            </li>
            <li className="nav-item"> Contact
            </li>
          </ul>
        </div>
        <Cart/>
      </div>
    </nav>
  );
};

export default Navbar;
