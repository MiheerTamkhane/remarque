import React, { useState } from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  const [isUser, setIsUser] = useState(false);
  return (
    <nav className="nav-bar">
      <NavLink to="/" className="ct-nav-logo brand-div">
        <img src="/assets/note.png" alt="remarque-logo" className="nav-logo" />
        <h1 className="brand-name">Remarque</h1>
      </NavLink>

      <div className="ct-right-nav">
        <div className="ct-nav-user">
          <span
            className="material-icons-outlined nav-user"
            onClick={() => setIsUser(!isUser)}
          >
            account_circle
          </span>
        </div>
      </div>
      <div className={isUser ? "dialog-box-show" : "dialog-box-hide"}>
        <NavLink to="/login" className="dialog ct-btn ct-green-bd">
          Login
        </NavLink>
        <NavLink to="/signup" className="dialog ct-btn ct-green-bd">
          Signup
        </NavLink>
      </div>
    </nav>
  );
};

export { Navbar };
