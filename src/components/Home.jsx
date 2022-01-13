import Jumbotron1 from "./Jumbotron1/Jumbotron1.jsx";
import Section1 from "./Section1/Section1.jsx";
import Skills from "./Skills/Skills.jsx";

const Home = () => {
  return (
    <div className="home-container">
      <Jumbotron1 />
      <Section1 />
      <Skills />
    </div>
  );
};

export default Home;
