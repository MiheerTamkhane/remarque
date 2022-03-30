import React from "react";
import "./ThemeToggler.css";
import { useTheme } from "../../contexts/contextExport";
const ThemeToggler = () => {
  const { theme, setTheme } = useTheme();
  return (
    <div
      className="dark-light"
      onClick={() =>
        setTheme((theme) => (theme === "light" ? "dark" : "light"))
      }
    >
      {theme === "light" ? (
        <span className="material-icons ">dark_mode</span>
      ) : (
        <span className="material-icons ">wb_sunny</span>
      )}
    </div>
  );
};

export { ThemeToggler };
