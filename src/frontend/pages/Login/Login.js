import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Form.css";
import { Link } from "react-router-dom";
import { loginHandler } from "../../services/servicesExport";
import { useAuth } from "../../contexts/AuthContext";
const Login = () => {
  const navigate = useNavigate();
  const { setAuth } = useAuth();
  const [userLogged, setUserLogged] = useState({
    email: "",
    password: "",
  });
  const handleLogin = async (userLogged) => {
    const data = await loginHandler(userLogged);
    setAuth((auth) => ({
      ...auth,
      user: data.foundUser.firstName,
      status: true,
      authToken: data.encodedToken,
    }));
    localStorage.setItem("user", data.foundUser.firstName);
    localStorage.setItem("authToken", data.encodedToken);
    navigate("/notespage");
  };
  return (
    <main className="form-container">
      <form
        className="ct-form"
        onSubmit={(e) => {
          e.preventDefault();
          handleLogin(userLogged);
        }}
      >
        <h2>Login</h2>
        <div className="ct-input-div">
          <input
            type="email"
            className="ct-input"
            placeholder="Email..."
            required
            onChange={(e) =>
              setUserLogged({ ...userLogged, email: e.target.value })
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
              setUserLogged({ ...userLogged, password: e.target.value })
            }
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
        <button
          className="ct-btn ct-gray login-guest"
          onClick={(e) => {
            e.preventDefault();
            handleLogin({
              email: "miheer@gmail.com",
              password: "miheer123",
            });
          }}
        >
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
