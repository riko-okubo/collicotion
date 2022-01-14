import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import { Home } from "./component/Home"
import { EarringImg } from "./component/EarringImg";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/work-list" exact component={EarringImg} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
