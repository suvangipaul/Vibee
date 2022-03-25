import React from "react";
import "./header.styles.css";
import logo from "../../assets/logo-black.png";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";

import { signOut } from "supertokens-auth-react/recipe/thirdpartyemailpassword";

export default function Header() {
  const navigate = useNavigate();
  async function logoutClicked() {
    await signOut();
    navigate("/");
  }
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
            <li>
              <button onClick={logoutClicked}>Sign Out</button>
            </li>
          </ul>
        </nav>
      </div>
    </header>
  );
}
