import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./component/Home"
import { Flowers } from "./component/Flowers";
import { Earrings } from "./component/Earrings";
import { AboutAccessories } from "./component/AboutAccessories";
import { ProductionRecord } from "./component/ProductionRecord";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Flowers" element={<Flowers />} />
        <Route path="/Earrings" element={<Earrings />} />
        <Route path="/AboutAccessories" element={<AboutAccessories />} />
        <Route path="/ProductionRecord" element={<ProductionRecord />} />
      </Routes>
    </BrowserRouter>
  );
};

