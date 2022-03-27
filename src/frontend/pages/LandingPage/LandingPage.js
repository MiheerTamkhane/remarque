import React from "react";
import { NavLink } from "react-router-dom";
import "./LandingPage.css";
const LandingPage = () => {
  return (
    <main className="landing-container">
      <section className="landing-img">
        <img src="/assets/svg/note-list.svg" alt="landin-page-img" />
      </section>
      <section className="landing-content">
        <div className="landing-brand-name">REMARQUE</div>
        <span>Quick notes anytime, anywhere.</span>
        <span>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda
          dolorum dignissimos tempore..
        </span>
        <button className="ct-btn ct-green-bd landing-cta">
          Join Now
          <span className="material-icons-outlined">chevron_right</span>
        </button>
        <NavLink to="/" className="landing-link">
          Already have an account?
        </NavLink>
      </section>
    </main>
  );
};

export { LandingPage };
