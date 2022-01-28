import React from "react";
import { BrowserRouter, Route } from "react-router-dom";
import './App.css';
import { Home } from "./component/Home"
import { TopPage } from "./component/TopPage";
import { EarringImg_Quilted } from "./component/EarringImg_Quilted";
import { EarringImg_Masonry } from "./component/EarringImg_Masonry";
import { Routes } from "react-router";
import { TopPage2 } from "./component/TopPage2";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/EarringImg_Quilted" element={<EarringImg_Quilted />} />
        <Route path="/EarringImg_Masonry" element={<EarringImg_Masonry />} />
        <Route path="/" element={<TopPage2 />} />
        {/* <Route exact path="/" component={Home} /> */}
        {/* <Redirect to="/" /> */}
      </Routes>
    </BrowserRouter>
  );
}

export default App;
