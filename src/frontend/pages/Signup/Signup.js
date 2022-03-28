import { useNavigate, Link } from "react-router-dom";

const Signup = () => {
  const navigate = useNavigate();

  return (
    <main className="form-container">
      <form className="ct-form">
        <h2>Sign up</h2>
        <div className="ct-input-div">
          <input
            type="text"
            className="ct-input"
            placeholder="First Name..."
            required
          />
        </div>
        <div className="ct-input-div">
          <input
            type="text"
            className="ct-input"
            placeholder="Last Name..."
            required
          />
        </div>
        <div className="ct-input-div">
          <input
            type="email"
            className="ct-input"
            placeholder="Email..."
            required
          />
        </div>
        <div className="ct-input-div">
          <input
            type="password"
            className="ct-input"
            placeholder="Password..."
            required
          />
        </div>

        <div className="ct-checkbox-div">
          <label htmlFor="checkbox" className="form-check-input">
            <input type="checkbox" id="checkbox" required />
            <span>I accept all Terms & Conditions.</span>
          </label>
        </div>

        <button className="ct-form-btn form-btn" type="submit">
          CREATE NEW ACCOUNT
        </button>

        <Link to="/login" className="form-link">
          <span>Already have an account</span>
          <span className="material-icons">chevron_right</span>
        </Link>
      </form>
    </main>
  );
};

export { Signup };
