import { useEffect, useState } from "react";
import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Footer from "./components/Footer/Footer";
import Home from "./components/Home";
import Navbar2 from "./components/Navbar2/Navbar2";
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
            <Navbar2 />
            <Route
              path="/"
              exact
              render={(...routerProps) => <Home props={routerProps} />}
            />
            <Footer />
          </BrowserRouter>
        </>
      )}
    </div>
  );
}

export default App;
