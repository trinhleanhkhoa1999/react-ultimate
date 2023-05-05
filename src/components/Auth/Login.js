import React from "react";
import "./Login.scss";
import { useState } from "react";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    alert("ok");
  };
  return (
    <div className="login-container">
      <div className="login-header">Don't have an account yet?</div>
      <div className="login-title mx-auto">
        <h1>Typeform</h1>
      </div>
      <div className="login-welcome mx-auto">Hello, who’s this?</div>
      <div className="login-content-form ">
        <form>
          <div className=" col-md-3 mx-auto">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className=" col-md-3 mx-auto">
            <label className="form-label">Password </label>
            <input
              type="password"
              className="form-control"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
            />
          </div>
          <span>Forgot password?</span>
          <div className="col-md-3 mx-auto">
            <button
              type="submit"
              className="btn btn-primary"
              onClick={() => handleLogin()}
            >
              Log in
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Login;
