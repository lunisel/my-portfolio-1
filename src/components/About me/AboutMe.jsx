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
              Hi! I'm a <span>software developer</span> with a passion for
              crafting engaging, functional, and visually appealing{" "}
              <span>web</span> and <span>mobile applications</span>. What
              excites me most about this field is the perfect blend of{" "}
              <span>creativity</span> and <span>logical problem-solving</span>.
            </p>
            <p>
              Currently, I work at <span>Enhancers</span>, where I develop
              applications using <span>React Native</span>, continuously
              refining my skills in both <span>front-end</span> and{" "}
              <span>mobile development</span>. Through my past experiences, I've
              honed my ability to collaborate effectively in <span>teams</span>{" "}
              and maintain a <span>patient, solution-oriented mindset</span>{" "}
              even under pressure.
            </p>
            <p>
              In May 2021, I joined <span>Strive School</span>, a transformative
              experience that allowed me to develop numerous{" "}
              <span>team-based</span> and <span>individual projects</span> in a
              fully <span>remote, international environment</span>. This journey
              not only strengthened my technical skills but also refined my
              ability to adapt and excel in dynamic, fast-paced settings.
            </p>
          </div>
          <div className="img-cont">
            <img
              src="https://res.cloudinary.com/lunisel/image/upload/v1643645564/mioPortfolio/Schermata_2022-01-31_alle_1.20.38_PM_obg8cy.jpg"
              alt="my face"
            />
            <div className="border"></div>
          </div>
        </div>
        <div className="skills-container">
          <p>
            Here are a few of the technologies I've been working with recently:
          </p>
          <div className="skills-list-container">
            <div className="skills-list">
              <span>Languages</span>
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
              </ul>
            </div>
            <div className="skills-list">
              <span>FrontEnd frameworks</span>
              <ul>
                <li>
                  <TiStarOutline /> React.js
                </li>
                <li>
                  <TiStarOutline /> React Native
                </li>
                <li>
                  <TiStarOutline /> Next.js
                </li>
                <li>
                  <TiStarOutline /> Vite
                </li>
              </ul>
            </div>
            <div className="skills-list">
              <span>BackEnd</span>
              <ul>
                <li>
                  <TiStarOutline /> Node.js
                </li>
                <li>
                  <TiStarOutline /> Express
                </li>
                <li>
                  <TiStarOutline /> REST APIs
                </li>
                <li>
                  <TiStarOutline /> MongoDB
                </li>
              </ul>
            </div>
            <div className="skills-list">
              <span>Git providers</span>
              <ul>
                <li>
                  <TiStarOutline /> GitHub
                </li>
                <li>
                  <TiStarOutline /> AWS code commit
                </li>
                <li>
                  <TiStarOutline /> BitBucket
                </li>
              </ul>
            </div>
            <div className="skills-list">
              <span>Other technologies</span>
              <ul>
                <li>
                  <TiStarOutline /> xCode
                </li>
                <li>
                  <TiStarOutline /> Android Studio
                </li>
                <li>
                  <TiStarOutline /> Miro / Figram
                </li>
                <li>
                  <TiStarOutline /> Jira
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
