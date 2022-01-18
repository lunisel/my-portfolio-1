import "./preloader.css";
import logo from "../../assets/LogoWName.png";

const Preloader = () => {
  return (
    <div className="big-container" id="preloader">
      <img src={logo} alt="" />
    </div>
  );
};

export default Preloader;
