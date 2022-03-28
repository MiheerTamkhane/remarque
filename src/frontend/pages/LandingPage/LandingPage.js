import React from "react";
import { Link } from "react-router-dom";
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
        <Link to="/notespage" className="ct-btn ct-green-bd landing-cta">
          <span>Join Now</span>
          <span className="material-icons-outlined">chevron_right</span>
        </Link>
        <Link to="/login" className="landing-link">
          Already have an account?
        </Link>
      </section>
    </main>
  );
};

export { LandingPage };
