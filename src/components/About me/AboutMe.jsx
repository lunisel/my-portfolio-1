import "./aboutMe.css";
import { TiStarOutline } from "react-icons/ti";

const AboutMe = () => {
  return (
    <div className="big-container" id="about-me">
      <div className="container">
        <div className="about-me-title-cont">
          <h1>About Me</h1>
          <div className="about-me-line"></div>
        </div>
        <div className="about-me-content-container">
          <div className="text-cont">
            <p>
              Hi ! My name is Luna, I'm 22 and I love to code websites. The
              thing that I like most about this field is the fact that it allows
              me to be creative while using my logical thinking skills. Thanks
              to my previous experiences, I'm really good at{" "}
              <span>working in teams</span> and I'm also very{" "}
              <span>patient</span>.
            </p>
            <p>
              I joined <span>Strive School</span> in May 2021 and it changed my
              life because it allowed me to build a lot of team and individual
              projects developed in a fully <span>remote</span> and{" "}
              <span>international</span> enviroment.
            </p>
            <p>
              Here are a few of the technologies I've been working with
              recently:
            </p>
            <ul>
              <li>
                <TiStarOutline /> HTML5
              </li>
              <li>
                <TiStarOutline /> CSS3
              </li>
              <li>
                <TiStarOutline /> JavaScript
              </li>
              <li>
                <TiStarOutline /> TypeScript
              </li>
              <li>
                <TiStarOutline /> React
              </li>
              <li>
                <TiStarOutline /> Node.js
              </li>
              <li>
                <TiStarOutline /> Express
              </li>
              <li>
                <TiStarOutline /> Bootstrap
              </li>
              <li>
                <TiStarOutline /> Redux
              </li>
            </ul>
          </div>
          <div className="img-cont">
            <img
              src="https://res.cloudinary.com/lunisel/image/upload/v1643645564/mioPortfolio/Schermata_2022-01-31_alle_1.20.38_PM_obg8cy.jpg"
              alt="my face"
            />
            <div className="border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
