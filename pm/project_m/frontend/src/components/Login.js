import React, { useState } from "react";
import { Link } from "react-router-dom";
import "../../static/css/login.css";

const Login = () => {
  //let history = useHistory();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        password: password,
      }),
    };
    fetch("/authorization/login", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <section className="login-section">
      <div className="login-container">
        <div className="login__left">
          <h1 className="phrase-login">Clean and tidy</h1>
          <ul className="features-list-login">
            <li>Unlimited Projects</li>
            <li>Email Deadline Reminders</li>
            <li>Simple dashboard</li>
            <li>Free</li>
            <li>Detailed analysis</li>
            <li>Other awesome features</li>
          </ul>
        </div>
        <div className="login__right">
          <nav className="login-nav">
            <div className="logo-login">
              <Link to="/">
                <div>Projectile</div>
              </Link>
            </div>

            <Link className="register-button-link">
              <div className="register-button">Register</div>
            </Link>
            <div className="burger">
              <div className="line1"></div>
              <div className="line2"></div>
              <div className="line3"></div>
            </div>
          </nav>

          <h2 className="login-title">Login</h2>

          <form onSubmit={(e) => handleSubmit(e)} className="login-form">
            <label className="login-label">Username</label>
            <input
              onChange={(e) => setUsername(e.target.value)}
              className="username-field-login"
            ></input>

            <label className="login-label">Password</label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="password-field-login"
            ></input>

            <Link className="forgot-password-link">
              <h5 className="forgot-password">Forgot Password?</h5>
            </Link>

            <button type="" className="login-button">
              Login
            </button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Login;
