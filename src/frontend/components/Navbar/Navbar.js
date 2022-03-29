import React from "react";
import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { useAuth } from "../../contexts/contextExport";
const Navbar = () => {
  const { auth, setAuth } = useAuth();
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
  return (
    <nav className="nav-bar">
      <NavLink to="/" className="ct-nav-logo brand-div">
        <img src="/assets/note.png" alt="remarque-logo" className="nav-logo" />
        <h1 className="brand-name">Remarque</h1>
      </NavLink>

      <div className="ct-right-nav">
        <div className="ct-nav-user">
          {auth.status ? (
            <div className="user-logged">
              <h3>Hi, {auth.user}</h3>
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
        </div>
      </div>
    </nav>
  );
};

export { Navbar };
