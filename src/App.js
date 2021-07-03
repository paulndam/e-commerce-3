import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Sass/App.scss";

import HomePage from "./pages/HomePage/HomePage.jsx";

const HatsPage = () => {
  return (
    <div>
      <h1>Hats Page</h1>
    </div>
  );
};

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/hats" component={HatsPage} />
      </Switch>
    </div>
  );
}

export default App;
