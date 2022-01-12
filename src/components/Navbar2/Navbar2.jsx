import { Link, withRouter } from "react-router-dom";
import "./navbar2.css";

const Navbar2 = (props) => {
  return (
    <div className="big-container">
      <div className="container navbar2">
        <h1 className="logo" onClick={() => props.history.push("/")}>
          Luna Sarmiento
        </h1>
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
