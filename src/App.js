import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";
import Navbar2 from "./components/Navbar2/Navbar2";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Navbar2 />
        <Route
          path="/"
          exact
          render={(...routerProps) => <Home props={routerProps} />}
        />
      </BrowserRouter>
    </div>
  );
}

export default App;
