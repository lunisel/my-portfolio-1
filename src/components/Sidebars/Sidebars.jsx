import "./sidebars.css";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Sidebars = () => {
  return (
    <div className="big-container" id="sidebars">
      <div className="social-container">
        <div className="logo-cont">
          <a
            className="social-logo"
            href="https://www.instagram.com/lunisel"
            target="_blank"
            rel="noreferrer"
          >
            <BsInstagram />
          </a>
          <a
            className="social-logo"
            href="https://www.linkedin.com/in/lunisel"
            target="_blank"
            rel="noreferrer"
          >
            <BsLinkedin />
          </a>
          <a
            className="social-logo"
            href="https://github.com/lunisel"
            target="_blank"
            rel="noreferrer"
          >
            <BsGithub />
          </a>
        </div>
        <div className="line"></div>
      </div>
      <div className="mail-container">
        <a className="mail" href="mailto:lunisel99@gmail.com">
          lunisel99@gmail.com
        </a>
        <div className="line"></div>
      </div>
    </div>
  );
};

export default Sidebars;
