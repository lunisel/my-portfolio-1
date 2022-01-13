import "./section1.css";

const Section1 = () => {
  return (
    <div className="big-container" id="section1">
      <div className="container">
        <div className="left">
          <div className="background-color"></div>
          <img
            src="https://res.cloudinary.com/lunisel/image/upload/v1642095405/mioPortfolio/Schermata_2022-01-13_alle_6.36.23_PM_limu1t.jpg"
            alt="screen website"
          />
        </div>
        <div className="right">
          <div>
            <h2 className="section1-title">
              Build the perfect website for you
            </h2>
            <p className="section1-subtext">
              Look through my portfolio and see if there is something that
              catches your eye
            </p>
            <button>See more</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Section1;
