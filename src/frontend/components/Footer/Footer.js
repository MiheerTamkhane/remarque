import React from "react";
import "./Footer.css";
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-links">
        <a href="https://github.com/MiheerTamkhane/remarque" target="_blank">
          <img src="/assets/svg/github.svg" alt="github" />
        </a>
        <a
          href="https://www.linkedin.com/in/miheer-tamkhane-19417b19a/"
          target="_blank"
        >
          <img src="/assets/svg/linkedin.svg" alt="linkedin" />
        </a>
        <a href="https://twitter.com/MiheerTamkhane" target="_blank">
          <img src="/assets/svg/twitter.svg" alt="twitter" />
        </a>
      </div>
      <p>Developed By Miheer</p>
    </footer>
  );
};

export { Footer };
