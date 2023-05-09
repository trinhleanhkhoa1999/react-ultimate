import React from "react";
import "./Signup.scss";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { AiFillEyeInvisible, AiFillEye } from "react-icons/ai";
import { postRegister } from "../../services/apiService";
import { toast } from "react-toastify";

const Signup = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");
  const [showHidePassword, setShowHidePassword] = useState(false);
  const [icon, setIcon] = useState(false);

  const navigate = useNavigate();
  // validate email
  const validateEmail = (email) => {
    return String(email)
      .toLowerCase()
      .match(
        /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|.(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
      );
  };

  const handleSignup = async (event) => {
    //validate
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

    event.preventDefault();
    //submit data
    let data = await postRegister(email, password, username);
    console.log("checkdata", data);
    if (data.EC === 0) {
      toast.success(data.EM);
      navigate("/login");
    }
    if (data.EC !== 0) {
      toast.error(data.EM);
    }
  };
  const handleBackLogin = () => {
    navigate("/login");
  };
  const handleBackHomepage = () => {
    navigate("/");
  };
  return (
    <div className="signup-container ">
      <div className="signup-header ">
        <span>Already have an account?</span>
        <button className="btn btn-primary" onClick={() => handleBackLogin()}>
          Log in
        </button>
      </div>
      <div className="signup-title mt-3">
        <h1>Typeform</h1>
      </div>
      <div className="signup-welcome mt-3">
        Get better data with conversational forms, surveys, quizzes & more.
      </div>
      <div className="signup-content-form mt-5">
        <form>
          <div className="col-md-3 mx-auto">
            <label className="form-label">Email</label>
            <input
              type="email"
              className="form-control"
              value={email}
              onChange={(event) => setEmail(event.target.value)}
            />
          </div>
          <div className="col-md-3 mx-auto mt-3">
            <label className="form-label  ">Password</label>
            {!icon ? (
              <AiFillEyeInvisible
                onClick={() =>
                  setShowHidePassword(!showHidePassword) + setIcon(!icon)
                }
              />
            ) : (
              <AiFillEye
                onClick={() =>
                  setShowHidePassword(!showHidePassword) + setIcon(!icon)
                }
              />
            )}
            {!showHidePassword ? (
              <input
                type="password"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            ) : (
              <input
                type="text"
                className="form-control"
                value={password}
                onChange={(event) => setPassword(event.target.value)}
              />
            )}
          </div>
          <div className="col-md-3 mx-auto mt-3">
            <label className="form-label">User name</label>
            <input
              type="text"
              className="form-control"
              value={username}
              onChange={(event) => setUsername(event.target.value)}
            />
          </div>
          <div className="col-md-3 mx-auto mt-3">
            <button
              className="btn btn-primary"
              onClick={(event) => handleSignup(event)}
            >
              Create my free account
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

export default Signup;
