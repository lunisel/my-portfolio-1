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
              Hi ! My name is Luna and I love to Lorem ipsum dolor sit amet
              consectetur adipisicing elit. Ipsam ut officia nisi, dolore quo
              impedit, dolores suscipit necessitatibus accusamus aliquam ratione
              laborum, amet dolor sunt possimus <span>fugiat omnis fugit</span>{" "}
              voluptatum.
            </p>
            <p>
              Ipsam ut officia nisi, dolore quo impedit, dolores suscipit
              necessitatibus accusamus aliquam ratione laborum, amet dolor sunt
              possimus fugiat omnis fugit <span>voluptatum</span>.
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
            <img src="http://placehold.it/500x500" alt="my face" />
            <div className="border"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
