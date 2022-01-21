import { useEffect, useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Navbar1 from "./components/Navbar1/Navbar1";
import Portfolio from "./components/Portfolio/Portfolio";
import Preloader from "./components/Preloader/Preloader";
import Sidebars from "./components/Sidebars/Sidebars";

function App() {
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 3000);
  }, []);

  return (
    <div className="App">
      {loading ? (
        <Preloader />
      ) : (
        <>
          <Sidebars />
          <BrowserRouter>
            <Navbar1 />
            <Route
              path="/"
              exact
              render={(...routerProps) => <Home props={routerProps} />}
            />
            <Route
              path="/portfolio"
              exact
              render={(...routerProps) => <Portfolio props={routerProps} />}
            />
            <Footer />
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
