import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import { Home } from "./component/Home"
import { EarringImg } from "./component/EarringImg";
import { Routes } from "react-router";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/EarringImg" element={<EarringImg />} />
        <Route path="/" element={<Home />} />
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Redirect to="/" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
