import "./footer.css";
import FooterForm from "./FooterForm";
import { BsInstagram, BsLinkedin, BsGithub } from "react-icons/bs";

const Footer = () => {
  return (
    <div id="footer">
      <div className="social-media-container">
        <a
          className="social-logo"
          href="https://www.instagram.com/lunisel"
          target="_blank"
        >
          <BsInstagram />
        </a>
        <a
          className="social-logo"
          href="https://www.linkedin.com/in/lunisel"
          target="_blank"
        >
          <BsLinkedin />
        </a>
        <a
          className="social-logo"
          href="https://github.com/lunisel"
          target="_blank"
        >
          <BsGithub />
        </a>
      </div>
      <FooterForm />
      <div className="copyright-cont">
        Copyright © 2022 Luna Sarmiento. All Rights Reserved.
      </div>
    </div>
  );
};

export default Footer;
