import React from "react";
import { Link } from "react-router-dom";
import "./LandingPage.css";
import { useAuth } from "../../contexts/contextExport";
const LandingPage = () => {
  const { auth } = useAuth();
  return (
    <main className="landing-container">
      <section className="landing-img">
        <img src="/assets/svg/note-list.svg" alt="landin-page-img" />
      </section>
      <section className="landing-content">
        <div className="landing-brand-name">REMARQUE</div>
        <span>Quick notes anytime, anywhere.</span>
        <span>
          Remarque(Note) is the best place to Note down quick thoughts or to
          save longer notes filled with images, web links, scanned documents,
          handwritten notes, or sketches. And with iBee, it's easy to keep all
          your devices in sync, so you’ll always have your notes with you.
        </span>
        {auth.status ? (
          <Link
            to="/notespage"
            className="ct-btn ct-green-bd landing-cta-to-notes"
          >
            <span>Go to Notes</span>
            <span className="material-icons-outlined">chevron_right</span>
          </Link>
        ) : (
          <>
            <Link to="/signup" className="ct-btn ct-green-bd landing-cta">
              <span>Join Now</span>
              <span className="material-icons-outlined">chevron_right</span>
            </Link>
            <Link to="/login" className="landing-link">
              Already have an account?
            </Link>
          </>
        )}
      </section>
    </main>
  );
};

export { LandingPage };
