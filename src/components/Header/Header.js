import React from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
  return (
    <div className="header-container">
      <div className="header-container-left">
        <Link className="header-container-left-link" to="/">
          Home
        </Link>
        <Link className="header-container-left-link" to="/about">
          About
        </Link>
      </div>
    </div>
  );
}

export default Header;
