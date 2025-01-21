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
              src="https://res.cloudinary.com/lunisel/image/upload/v1737473898/Screenshot_2025-01-21_at_4.34.56_PM_iql5gj.png"
              alt="progetto1"
            />
            <h3>hOn mobile app</h3>
            <p>
              This is s cutting-edge system for smart home management. I
              collaborate daily with a team of approximately 30 people to ensure
              a smooth and responsive user interface. Responsible for both
              implementing new features and bug fixing.
            </p>
            <a
              href="https://hon-smarthome.com/"
              target="_blank"
              rel="noreferrer"
            >
              Go to project
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
