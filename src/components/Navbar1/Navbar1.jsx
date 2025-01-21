import { Link } from "react-router-dom";
import { GoThreeBars, GoX } from "react-icons/go";
import React from "react";
import logo from "../../assets/LogoWOName.png";
import "./navbar1.css";
import cv from "../../assets/CV.pdf";

export default class Navbar1 extends React.Component {
  constructor() {
    super();
    this.ref = React.createRef();
    this.state = {
      show: true,
      scrollPos: 0,
      navToggle: false,
    };
  }

  componentDidMount() {
    window.addEventListener("scroll", this.handleScroll);
    window.addEventListener("mousedown", this.clickOut);
  }

  componentWillUnmount() {
    window.removeEventListener("scroll", this.handleScroll);
    window.removeEventListener("mousedown", this.clickOut);
  }

  handleScroll = () => {
    const currentScrollPos = window.scrollY;

    this.setState((prevState) => ({
      scrollPos: currentScrollPos,
      show: prevState.navToggle
        ? true
        : prevState.scrollPos > currentScrollPos || currentScrollPos < 10,
    }));
  };

  clickOut = (e) => {
    if (!this.ref.current.contains(e.target)) {
      this.setState({
        ...this.state,
        navToggle: false,
      });
    }
  };

  render() {
    return (
      <nav id="main-nav" style={{ top: this.state.show ? "0" : "-8rem" }}>
        <div className="container">
          <div className="logo-container">
            <img src={logo} alt="logo" />
          </div>
          <GoThreeBars
            className={this.state.navToggle ? "d-none" : "burger-icon"}
            onClick={() =>
              this.setState({
                ...this.state,
                navToggle: true,
              })
            }
          />
          <GoX
            className={this.state.navToggle ? "close-icon" : "d-none"}
            onClick={() =>
              this.setState({
                ...this.state,
                navToggle: false,
              })
            }
          />
          <ul
            className={
              this.state.navToggle
                ? "nav-links-container active"
                : "nav-links-container"
            }
            ref={this.ref}
          >
            <li>
              <a href="/" className="nav-link">
                HOME
              </a>
            </li>
            <li>
              <a href="/#about-me" className="nav-link">
                ABOUT ME
              </a>
            </li>
            <li>
              <Link to="/portfolio" className="nav-link">
                PORTFOLIO
              </Link>
            </li>
            <li>
              <a href="#footer" className="nav-link">
                CONTACT ME
              </a>
            </li>
            <li>
              <a href={cv} className="cv-button" download>
                Download CV
              </a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}
