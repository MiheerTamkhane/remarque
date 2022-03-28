import { useState } from "react";
import "./Sidebar.css";
const Sidebar = () => {
  const [isSidebar, setIsSidebar] = useState(false);
  return (
    <div
      className={
        isSidebar ? "sidebar-container-show" : "sidebar-container-hide"
      }
    >
      <div className="items-container">
        <div className="sidebar-arrow">
          <span
            class="material-icons-outlined arrow"
            onClick={() => setIsSidebar(!isSidebar)}
          >
            {isSidebar ? "close" : "arrow_forward_ios"}
          </span>
        </div>
        <div className="sidebar-items">
          <span class="material-icons-outlined">note_add</span>
          <span>Notes</span>
        </div>
        <div className="sidebar-items">
          <span class="material-icons-outlined">notifications_none</span>
          <span>Reminders</span>
        </div>
        <div className="sidebar-items">
          <span class="material-icons-outlined">label</span>
          <span>Label</span>
        </div>
        <div className="sidebar-items">
          <span class="material-icons-outlined">archive</span>
          <span>Archive</span>
        </div>
        <div className="sidebar-items">
          <span class="material-icons-outlined">delete_outline</span>
          <span>Trash</span>
        </div>
      </div>
    </div>
  );
};

export { Sidebar };