import { Link } from "react-router-dom";
import { GoThreeBars, GoX } from "react-icons/go";
import { useState } from "react";
import logo from "../../assets/LogoWOName.png";
import "./navbar1.css";

const Navbar1 = () => {
  const [navToggle, setNavToggle] = useState(false);
  return (
    <nav id="main-nav">
      <div className="container">
        <div className="logo-container">
          <img src={logo} alt="logo" />
        </div>
        <GoThreeBars
          className={navToggle ? "d-none" : "burger-icon"}
          onClick={() => setNavToggle(true)}
        />
        <GoX
          className={navToggle ? "close-icon" : "d-none"}
          onClick={() => setNavToggle(false)}
        />
        <ul
          className={
            navToggle ? "nav-links-container active" : "nav-links-container"
          }
        >
          <li>
            <Link to="/" className="nav-link">
              HOME
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              ABOUT ME
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              PORTFOLIO
            </Link>
          </li>
          <li>
            <Link to="/" className="nav-link">
              CONTACT ME
            </Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar1;
