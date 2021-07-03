import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Sass/App.scss";

import HomePage from "./pages/HomePage/HomePage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage";

function App() {
  return (
    <div>
      {/* <HomePage /> */}
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
