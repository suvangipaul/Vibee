import React from 'react';
import './header.styles.css';
import logo from '../../assets/logo-black.png';
import { Link } from 'react-router-dom';


export default function Header(){
    return (
      <header>
      <div className="container">
        <nav className="navbar">
          <div className="Applogo">
            {/* App logo */}
            <Link to="/">
              <img src={logo} className="AppLogo" alt="logo" />
            </Link>
          </div>
  
          {/* Application navigation options */}
          <ul className="nav-list">
            <li><Link className="options" to="/contact">About</Link></li>
            <li><Link className="options" to="/contact">Support</Link></li>
            <li><Link className="options" to="/contact">Download</Link></li>
            </ul>
      </nav>
    </div>
    </header>
    )
}