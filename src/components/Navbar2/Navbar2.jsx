import { Link, withRouter } from "react-router-dom";
import logo from "../../assets/LogoWName.png";
import "./navbar2.css";

const Navbar2 = (props) => {
  return (
    <div className="big-container" id="navbar">
      <div className="container navbar2">
        <img
          className="logo"
          src={logo}
          onClick={() => props.history.push("/")}
        />
        <div className="links-container">
          <Link to="/">Home</Link>
          <Link to="/portfolio">Portfolio</Link>
          <Link to="#about-me">About Me</Link>
          <Link to="/contacts">Contacts</Link>
        </div>
      </div>
    </div>
  );
};

export default withRouter(Navbar2);
