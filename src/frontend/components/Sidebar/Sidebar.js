import { NavLink } from "react-router-dom";
import "./Sidebar.css";
import { useTheme } from "../../contexts/ThemeContext";

const Sidebar = () => {
  const { isSidebar, setIsSidebar } = useTheme();
  return (
    <div className={isSidebar ? "sidebar-container" : "sidebar-container hide"}>
      <div className="items-container">
        <div className="sidebar-arrow">
          <span
            className="material-icons-outlined arrow"
            onClick={() => setIsSidebar(!isSidebar)}
          >
            {isSidebar ? "close" : "menu"}
          </span>
        </div>
        <NavLink
          to="/notespage"
          className={({ isActive }) =>
            isActive ? "sidebar-items active" : "sidebar-items"
          }
        >
          <span className="material-icons-outlined">note_add</span>
          <span>Notes</span>
        </NavLink>

        <NavLink
          to="/labels"
          className={({ isActive }) =>
            isActive ? "sidebar-items active" : "sidebar-items"
          }
        >
          <span className="material-icons-outlined">label</span>
          <span>Label</span>
        </NavLink>

        <NavLink
          to="/archive"
          className={({ isActive }) =>
            isActive ? "sidebar-items active" : "sidebar-items"
          }
        >
          <span className="material-icons-outlined">archive</span>
          <span>Archive</span>
        </NavLink>

        <NavLink
          to="/trash"
          className={({ isActive }) =>
            isActive ? "sidebar-items active" : "sidebar-items"
          }
        >
          <span className="material-icons-outlined">delete_outline</span>
          <span>Trash</span>
        </NavLink>
      </div>
    </div>
  );
};

export { Sidebar };
