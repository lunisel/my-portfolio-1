import AboutMe from "./About me/AboutMe.jsx";
import Jumbotron1 from "./Jumbotron1/Jumbotron1.jsx";
import Section1 from "./Section1/Section1.jsx";

const Home = (props) => {
  return (
    <div className="home-container">
      <Jumbotron1 />
      <Section1 props={props} />
      <AboutMe />
    </div>
  );
};

export default Home;
