import React, { useState } from "react";
import { Button, TextField } from "@material-ui/core";
import { Link } from "react-router-dom";
import "../../static/css/reg-login.css";

function getCookie(name) {
  let cookieValue = null;
  if (document.cookie && document.cookie !== "") {
    const cookies = document.cookie.split(";");
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      // Does this cookie string begin with the name we want?
      if (cookie.substring(0, name.length + 1) === name + "=") {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

const Registration = () => {
  const [username, setUsername] = useState();
  const [firstname, setfirstname] = useState();
  const [lastname, setlastname] = useState();
  const [email, setemail] = useState();
  const [password, setpassword] = useState();
  const [password2, setpassword2] = useState();
  const handleSubmit = (e) => {
    e.preventDefault();
    const csrfToken = getCookie("csrstoken");
    console.log("yo");
    const requestOptions = {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username: username,
        first_name: firstname,
        last_name: lastname,
        email: email,
        password: password,
        password2: password2,
      }),
    };
    fetch("/authorization/register", requestOptions)
      .then((response) => response.json())
      .then((data) => console.log(data));
  };
  return (
    <section className="register-section">
      <div className="reg-container">
        <div className="reg__right">
          <h2 className="logo-registration">PM</h2>
          <h1 className="sub-text-reg">Create Account</h1>
          {/*
                    <TextField className="text-field" label="Username" variant="outlined" />
                    <TextField label="First Name" variant="outlined" />
                    <TextField label="Last Name" variant="outlined" />
                    <TextField label="Email" variant="outlined" />
                    <TextField label="Password" variant="outlined" />
                    <TextField label="Confirm Password" variant="outlined" />
                    */}

          <form onSubmit={(e) => handleSubmit(e)}>
            <table>
              <tr>
                <td>
                  <label className="label-reg" for="username">
                    Username
                  </label>
                  <input
                    onChange={(e) => setUsername(e.target.value)}
                    className="input-form"
                    type="text"
                    placeholder="Username"
                    id="username"
                    name="username"
                  />
                </td>
                <td>
                  <label className="label-reg" for="firstName">
                    First Name
                  </label>
                  <input
                    onChange={(e) => setfirstname(e.target.value)}
                    className="input-form"
                    type="text"
                    placeholder="First name"
                    id="firstName"
                    name="firstName"
                  />
                </td>
              </tr>

              <tr>
                <td>
                  <label className="label-reg" for="lastName">
                    Last Name
                  </label>
                  <input
                    onChange={(e) => setlastname(e.target.value)}
                    className="input-form"
                    type="text"
                    placeholder="Last Name"
                    id="lastName"
                    name="lastName"
                  />
                </td>
                <td>
                  <label className="label-reg" for="Email">
                    Email
                  </label>
                  <input
                    onChange={(e) => setemail(e.target.value)}
                    className="input-form"
                    type="text"
                    placeholder="Email"
                    id="Email"
                    name="Email"
                  />
                </td>
              </tr>
              <tr>
                <td>
                  <label className="label-reg" for="Password">
                    Password
                  </label>
                  <input
                    onChange={(e) => setpassword(e.target.value)}
                    className="input-form"
                    type="text"
                    placeholder="Password"
                    id="Password"
                    name="Password"
                  />
                </td>
                <td>
                  <label className="label-reg" for="ConfirmPassword">
                    Confirm Password
                  </label>
                  <input
                    onChange={(e) => setpassword2(e.target.value)}
                    className="input-form"
                    type="text"
                    placeholder="Confirm Password"
                    id=" ConfirmPassword"
                    name="ConfirmPassword"
                  />
                </td>
              </tr>
            </table>
            <input
              type="submit"
              className="send-message-cta"
              value="Create Account"
            />
          </form>

          <p className="already-have-acc">
            Already have an account? <Link className="login-link">Log In</Link>
          </p>
        </div>

        <div className="reg__left">
          <p className="subtitle-registration">
            The leading project management system to keep your company running
          </p>

          <img
            src="../../static/images/undraw_All_the_data_re_hh4w.svg"
            className="reg-img"
            alt="illustration"
          />
        </div>
      </div>
    </section>
  );
};

export default Registration;
