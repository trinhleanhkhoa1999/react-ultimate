import React from "react";
import "./Login.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { postLogin } from "../../services/apiService";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { doLogin } from "../../redux/action/userAction";
const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const navigate = useNavigate();
  const dispatch = useDispatch();

  // validate email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };
  const handleLogin = async (event) => {
    // validate email
    const isValidateEmail = validateEmail(email);
    if (!isValidateEmail) {
      toast.error("invalidation failed email");
      return;
    }
    // validate password
    if (!password) {
      toast.error("invalidation failed password");
      return;
    }

    //submit login apis
    event.preventDefault();
    let data = await postLogin(email, password);
    if (data.EC === 0) {
      dispatch(doLogin(data));
      toast.success(data.EM);
      navigate("/");
    }
    if (data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  const handleSignup = () => {
    navigate("/signup");
  };

  const handleBackHomepage = () => {
    navigate("/");
  };
  return (
    <div className="login-container">
      <div className="login-header">
        <span>Don't have an account yet?</span>
        <button className="btn btn-primary" onClick={() => handleSignup()}>
          Sign up
        </button>
      </div>
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
              onClick={(event) => handleLogin(event)}
            >
              Log in
            </button>
            <span onClick={() => handleBackHomepage()}>
              {" "}
              &lt;&lt; Go to Homepage{" "}
            </span>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
