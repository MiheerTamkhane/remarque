import { useNavigate } from "react-router-dom";
import "./Form.css";
import { Link } from "react-router-dom";
const Login = () => {
  const navigate = useNavigate();
  return (
    <main className="form-container">
      <form className="ct-form">
        <h2>Login</h2>
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
            <input type="checkbox" id="checkbox" />
            <span>Remember me</span>
          </label>
          <a href="####">Forgot your password?</a>
        </div>
        <button className="ct-form-btn  form-btn" type="submit">
          LOGIN
        </button>
        <button className="ct-btn ct-gray login-guest" type="submit">
          LOGIN AS GUEST
        </button>

        <Link to="/signup" className="form-link">
          <span>Create new account</span>
          <span className="material-icons">chevron_right</span>
        </Link>
      </form>
    </main>
  );
};

export { Login };
