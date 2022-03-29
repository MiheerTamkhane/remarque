import { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { signupHandler } from "../../services/servicesExport";
import { useAuth } from "../../contexts/contextExport";
const Signup = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [userSignup, setUserSignup] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });

  const handleSignup = async (userSignup) => {
    const data = await signupHandler(userSignup);
    setAuth((auth) => ({
      ...auth,
      user: data.createdUser.firstName,
      status: true,
      authToken: data.encodedToken,
    }));
    localStorage.setItem("user", data.createdUser.firstName);
    localStorage.setItem("authToken", data.encodedToken);
    navigate("/notespage");
  };
  return (
    <main className="form-container">
      <form
        className="ct-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleSignup(userSignup);
        }}
      >
        <h2>Sign up</h2>
        <div className="ct-input-div">
          <input
            type="text"
            className="ct-input"
            placeholder="First Name..."
            required
            onChange={(e) =>
              setUserSignup((user) => ({ ...user, firstName: e.target.value }))
            }
          />
        </div>
        <div className="ct-input-div">
          <input
            type="text"
            className="ct-input"
            placeholder="Last Name..."
            required
            onChange={(e) =>
              setUserSignup((user) => ({ ...user, lastName: e.target.value }))
            }
          />
        </div>
        <div className="ct-input-div">
          <input
            type="email"
            className="ct-input"
            placeholder="Email..."
            required
            onChange={(e) =>
              setUserSignup((user) => ({ ...user, email: e.target.value }))
            }
          />
        </div>
        <div className="ct-input-div">
          <input
            type="password"
            className="ct-input"
            placeholder="Password..."
            required
            onChange={(e) =>
              setUserSignup((user) => ({ ...user, password: e.target.value }))
            }
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
