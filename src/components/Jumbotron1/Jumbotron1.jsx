import { Link } from "react-router-dom";
import "./jumbotron1.css";

const Jumbotron1 = () => {
  return (
    <div className="big-container">
      <div className="container jumbotron1">
        <div className="background"></div>
        <div className="info-container">
          <img
            src="http://www.placehold.it/500x500"
            alt="profile"
            className="profile-pic"
          />
          <p className="jumbotron-title">Hi, I'm Luna Sarmiento.</p>
          <p className="jumbotron-subtitle">Full stack Web Developer</p>
          <span className="text">
            Are you interested in hiring someone for your company or are you
            interested in someone to help you build the website of your dreams?
          </span>
          <a href="#footer" className="link-to-footer">
            Contact me
          </a>
        </div>
      </div>
    </div>
  );
};

export default Jumbotron1;
