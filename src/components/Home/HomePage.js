import React from "react";
import "../../App.scss";
import videoHomePage from "../../assets/video/video-homePage.webm";
import { useSelector } from "react-redux";

const HomePage = (props) => {
  const account = useSelector((state) => state.user.account);
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
        <button className="homepage-btn">Get started - it's free</button>
      </div>
    </div>
  );
};

export default HomePage;
