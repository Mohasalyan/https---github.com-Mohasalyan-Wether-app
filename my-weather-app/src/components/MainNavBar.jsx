import React from 'react';
import { Link } from 'react-router-dom';
import './NavBar.css';

function MainNavBar() {
  return (
    <nav className="nav-bar">
      <ul>
        <li><Link to="/" className="nav-link">Home</Link></li>
        <li><Link to="/dashboard" className="nav-link">Dashboard</Link></li>
        <li><Link to="/favorites" className="nav-link">Favorites</Link></li>
        <li><Link to="/forecast" className="nav-link">Forecast</Link></li>
        <li><Link to="/signin" className="nav-link">Sign In</Link></li>
      </ul>
    </nav>
  );
}

export default MainNavBar;
