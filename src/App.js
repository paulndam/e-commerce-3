import React from "react";
import { Switch, Route } from "react-router-dom";
import "./Sass/App.scss";

import HomePage from "./pages/HomePage/HomePage.jsx";
import ShopPage from "./pages/ShopPage/ShopPage";
import Header from "./components/Header/Header.jsx";
import SignInAndSignUpPage from "./pages/SignInAndSignUpPage/SignInAndSignUpPage.jsx";

function App() {
  return (
    <div>
      <Header />
      <Switch>
        <Route exact path="/" component={HomePage} />
        <Route exact path="/shop" component={ShopPage} />
        <Route exact path="/signin" component={SignInAndSignUpPage} />
      </Switch>
    </div>
  );
}

export default App;
