import "./skills.css";

const Skills = () => {
  return (
    <div className="big-container" id="skills">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320" id="top">
        <path
          fill="#D8CCD3"
          fill-opacity="1"
          d="M0,64L34.3,90.7C68.6,117,137,171,206,176C274.3,181,343,139,411,149.3C480,160,549,224,617,256C685.7,288,754,288,823,245.3C891.4,203,960,117,1029,117.3C1097.1,117,1166,203,1234,224C1302.9,245,1371,203,1406,181.3L1440,160L1440,0L1405.7,0C1371.4,0,1303,0,1234,0C1165.7,0,1097,0,1029,0C960,0,891,0,823,0C754.3,0,686,0,617,0C548.6,0,480,0,411,0C342.9,0,274,0,206,0C137.1,0,69,0,34,0L0,0Z"
        ></path>
      </svg>
      <h2 className="skills-title">MY SKILLS</h2>
      <div className="skills-container">
        <div className="skill">
          <img
            src="https://res.cloudinary.com/lunisel/image/upload/v1642087463/mioPortfolio/HTML5_mexpku.jpg"
            alt="logo"
          />
        </div>
        <div className="skill">
          <img
            src="https://res.cloudinary.com/lunisel/image/upload/v1642087463/mioPortfolio/css_e41yhb.jpg"
            alt="logo"
          />
        </div>
        <div className="skill">
          <img
            src="https://res.cloudinary.com/lunisel/image/upload/v1642087462/mioPortfolio/Javascript_x2pbgg.png"
            alt="logo"
          />
        </div>
        <div className="skill">
          <img
            src="https://res.cloudinary.com/lunisel/image/upload/v1642087462/mioPortfolio/node-js-icon-29_ocrlej.jpg"
            alt="logo"
          />
        </div>
        <div className="skill">
          <img
            src="https://res.cloudinary.com/lunisel/image/upload/v1642087462/mioPortfolio/logo-bootstrap_vkqrwh.jpg"
            alt="logo"
          />
        </div>
        <div className="skill">
          <img
            src="https://res.cloudinary.com/lunisel/image/upload/v1642087462/mioPortfolio/react-js_mhj1t7.jpg"
            alt="logo"
          />
        </div>
        <div className="skill">
          <img
            src="https://res.cloudinary.com/lunisel/image/upload/v1642087463/mioPortfolio/logo-redux_r9sgvv.jpg"
            alt="logo"
          />
        </div>
        <div className="skill">
          <img
            src="https://res.cloudinary.com/lunisel/image/upload/v1642087462/mioPortfolio/typescript_rm6n0c.jpg"
            alt="logo"
          />
        </div>
        <div className="skill">
          <img
            src="https://res.cloudinary.com/lunisel/image/upload/v1642087462/mioPortfolio/express_q6gwph.jpg"
            alt="logo"
          />
        </div>
      </div>
      <svg
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 1440 320"
        id="bottom"
      >
        <path
          fill="#D8CCD3"
          fill-opacity="1"
          d="M0,320L34.3,293.3C68.6,267,137,213,206,197.3C274.3,181,343,203,411,213.3C480,224,549,224,617,213.3C685.7,203,754,181,823,160C891.4,139,960,117,1029,138.7C1097.1,160,1166,224,1234,218.7C1302.9,213,1371,139,1406,101.3L1440,64L1440,320L1405.7,320C1371.4,320,1303,320,1234,320C1165.7,320,1097,320,1029,320C960,320,891,320,823,320C754.3,320,686,320,617,320C548.6,320,480,320,411,320C342.9,320,274,320,206,320C137.1,320,69,320,34,320L0,320Z"
        ></path>
      </svg>
    </div>
  );
};

export default Skills;
