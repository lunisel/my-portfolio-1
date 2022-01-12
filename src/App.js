import { Route, BrowserRouter } from "react-router-dom";
import "./App.css";
import Home from "./components/Home";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
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
