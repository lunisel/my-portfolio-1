import "./portfolio.css";

const Portfolio = () => {
  return (
    <div className="big-container" id="portfolio">
      <div className="container">
        <h1>MY PORTFOLIO</h1>
        <div className="projects-container">
          <div className="project-card">
            <img
              src="https://res.cloudinary.com/lunisel/image/upload/v1642087463/mioPortfolio/Schermata_2022-01-13_alle_1.44.05_PM_qxjku1.jpg"
              alt="progetto1"
            />
            <h3>Pet Book</h3>
            <p>
              This is a social media for pet owners, where you can keep in touch
              with friends in your area and keep track of all your pet's needs.
              This is still a beta version, to log-in use email: ari@yahoo.it
              and password: password
            </p>
            <a
              href="https://pet-book-frontentd.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Go to project
            </a>
          </div>
          <div className="project-card">
            <img
              src="https://res.cloudinary.com/lunisel/image/upload/v1642094498/mioPortfolio/Schermata_2022-01-13_alle_6.21.21_PM_ffhq9y.jpg"
              alt="progetto1"
            />
            <h3>Risi Graph</h3>
            <p>
              This is the portfolio I made for a friend of mine. It's meant to
              show to his potencial clients all of his renders, but it's still a
              work in progress
            </p>
            <a
              href="https://risigraphstudio.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Go to project
            </a>
          </div>
          <div className="project-card">
            <img
              src="https://res.cloudinary.com/lunisel/image/upload/v1642779835/mioPortfolio/Schermata_2022-01-21_alle_4.43.28_PM_sbf2xp.jpg"
              alt="progetto1"
            />
            <h3>Search Jobs</h3>
            <p>
              It's a small project I did as a homework for Strive School. It
              connects to an API and show you some jobs searched with querys.
            </p>
            <a
              href="https://searchforjobs.vercel.app"
              target="_blank"
              rel="noreferrer"
            >
              Go to project
            </a>
          </div>
          {/* <div className="project-card">
            <img src="http://placehold.it/500x300" alt="progetto1" />
            <h3>Title of Project</h3>
            <p>
              Small description of the project and if it's a commition or a
              homework for Strive School
            </p>
            <a href="" target="_blank">
              Go to project
            </a>
          </div> */}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
