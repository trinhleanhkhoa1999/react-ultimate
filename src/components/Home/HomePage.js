import React from "react";
import "../../App.scss";
import videoHomePage from "../../assets/video/video-homePage.webm";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

const HomePage = (props) => {
  const navigate = useNavigate();
  const isAuthenticated = useSelector((state) => state.user.isAuthenticated);
  return (
    <div className="homepage-container">
      <video autoPlay muted loop>
        <source src={videoHomePage} type="video/mp4" />
      </video>
      <div className="homepage-content">
        <div className="homepage-title">There's a better way to ask</div>
        <div className="homepage-deps">
          You don't want to make a boring form. And your audience won't answer
          one. Create a typeform instead—and make everyone happy.
        </div>
        {isAuthenticated === false ? (
          <button className="homepage-btn" onClick={() => navigate("/login")}>
            Get started - it's free
          </button>
        ) : (
          <button className="homepage-btn" onClick={() => navigate("/users")}>
            Start Now!
          </button>
        )}
      </div>
    </div>
  );
};

export default HomePage;
