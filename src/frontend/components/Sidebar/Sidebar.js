import { useState } from "react";
import { NavLink } from "react-router-dom";
import "./Sidebar.css";

const Sidebar = ({ isSidebar, onSetSidebar }) => {
  return (
    <div className={isSidebar ? "sidebar-container" : "sidebar-container hide"}>
      <div className="items-container">
        <div className="sidebar-arrow">
          <span
            className="material-icons-outlined arrow"
            onClick={() => onSetSidebar(!isSidebar)}
          >
            {isSidebar ? "close" : "arrow_forward_ios"}
          </span>
        </div>
        <NavLink to="/notespage" className="sidebar-items">
          <span className="material-icons-outlined">note_add</span>
          <span>Notes</span>
        </NavLink>
        <NavLink to="/notespage" className="sidebar-items">
          <span className="material-icons-outlined">notifications_none</span>
          <span>Reminders</span>
        </NavLink>
        <NavLink to="/notespage" className="sidebar-items">
          <span className="material-icons-outlined">label</span>
          <span>Label</span>
        </NavLink>
        <NavLink to="/notespage" className="sidebar-items">
          <span className="material-icons-outlined">archive</span>
          <span>Archive</span>
        </NavLink>
        <NavLink to="/notespage" className="sidebar-items">
          <span className="material-icons-outlined">delete_outline</span>
          <span>Trash</span>
        </NavLink>
      </div>
    </div>
  );
};

export { Sidebar };
