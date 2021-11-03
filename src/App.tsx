import React from "react";
import { BrowserRouter, Redirect, Route, Switch } from "react-router-dom";
import './App.css';
import { Home } from "./component/Home"
import { WorkList } from "./component/WorkList";

function App() {
  return (
    <BrowserRouter>
      <Switch>
        <Route path="/work-list" exact component={WorkList} />
        <Route path="/" exact component={Home} />
        <Redirect to="/" />
      </Switch>
    </BrowserRouter>
  );
}

export default App;
