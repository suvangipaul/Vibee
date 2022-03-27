import React, { useState } from "react";
import "./header.styles.css";
import logo from "../../assets/logo-black.png";
import { Link } from "react-router-dom";
import { useAuth0 } from "@auth0/auth0-react";
import { TextField } from '@mui/material'
import users from '../../assets/users.json'
export default function Header() {
  const [ search, setSearch ] = useState('')
  const [ displaysearch, setdisplaySearch ] = useState(true)

  const searchClass = displaysearch ? "search-list-dropdown search-display-none" : "search-list-dropdown"
  const filteredUser = users.filter((user) =>
  user.username.toLowerCase().includes(search.toLowerCase()) )
  const handleChange = (e) => {
    setSearch(e.target.value)
    
  }
  const { user, isAuthenticated, logout } = useAuth0();
  const logoutWithRedirect = () =>
    logout({
      returnTo: window.location.origin,
    });
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
          {!isAuthenticated ? (
            <ul className="nav-list">
              <li>
                <Link className="options" to="/">
                  About
                </Link>
              </li>
              <li>
                <Link className="options" to="/">
                  Support
                </Link>
              </li>
              <li>
                <Link className="options" to="/">
                  Download
                </Link>
              </li>
            </ul>
          ) : (
            <div className="right-corner-header">
              <div className="search-bar">
                <TextField value={search}  className="search-user" id="search" label="Search" variant="outlined" onChange={handleChange} />
                <div onMouseLeave={() => setdisplaySearch(false)} className={searchClass}>
                  {
                    filteredUser.map((filuser) => (
                      <div className="filter-div">
                        <img src={filuser.avatar} alt="" />
                        <a href={`/${filuser.username}`}>{filuser.username}</a>
                      </div>
                    ))
                  }
                </div>
              </div>

              <div className="dropdown">
                <img
                  className="drop-icon"
                  src={`https://img.icons8.com/external-those-icons-fill-those-icons/24/000000/external-down-arrows-those-icons-fill-those-icons-6.png`}
                  alt=""
                />
                <div className="dropdown-list">
                  <a href="/profile">Visit Profile</a>
                  <a href="/settings">settings</a>
                  <p onClick={() => logoutWithRedirect()}>
                    Log Out
                  </p>
                </div>
              </div>
              <img className="profile-pic" src={user.picture} alt="" />
            </div>
          )}
        </nav>
      </div>
    </header>
  );
}
