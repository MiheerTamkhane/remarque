import { useState } from "react";
import "./Navbar.css";
import { NavLink, useLocation } from "react-router-dom";
import { useAuth, useNote } from "../../contexts/contextExport";
import { ThemeToggler } from "../componentsExport";
const Navbar = () => {
  const { auth, setAuth } = useAuth();
  const { q, setQ } = useNote();
  const logoutHandler = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("authToken");
    setAuth((auth) => ({
      ...auth,
      user: "",
      status: false,
      authToken: null,
    }));
  };
  const { pathname } = useLocation();

  return (
    <nav className="nav-bar">
      <NavLink to="/" className="ct-nav-logo brand-div">
        <img src="/assets/note.png" alt="remarque-logo" className="nav-logo" />
        <h1 className="brand-name">Remarque</h1>
      </NavLink>

      <div className="ct-right-nav right-nav">
        {pathname === "/notespage" && (
          <div className="search-bar-container">
            <input
              type="search"
              value={q}
              className="ct-input search-bar"
              placeholder="Seach notes..."
              onChange={(e) => setQ(e.target.value)}
            />
          </div>
        )}

        <div className="ct-nav-user">
          <span className="material-icons user-account">person</span>
          {auth.status ? (
            <div className="user-logged">
              <h2>Hi, {auth.user}</h2>
              <NavLink
                to="/"
                className="dialog ct-btn ct-green-bd active"
                onClick={logoutHandler}
              >
                <span className="material-icons">logout</span>
              </NavLink>
            </div>
          ) : (
            <div className="dialog-box">
              <NavLink
                to="/login"
                className={({ isActive }) =>
                  isActive
                    ? "dialog ct-btn ct-green-bd active"
                    : "dialog ct-btn ct-green-bd"
                }
              >
                <span className="material-icons">login</span>
              </NavLink>
              <NavLink
                to="/signup"
                className={({ isActive }) =>
                  isActive
                    ? "dialog ct-btn ct-green-bd active"
                    : "dialog ct-btn ct-green-bd"
                }
              >
                <span className="material-icons-outlined">person_add</span>
              </NavLink>
            </div>
          )}
          <ThemeToggler />
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
