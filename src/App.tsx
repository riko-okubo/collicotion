import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./pages/Home"
import { Flowers } from "./pages/Flowers";
import { Earrings } from "./pages/Earrings";
import { AboutAccessories } from "./pages/AboutAccessories";
import { ProductionRecord } from "./pages/ProductionRecord";
import { Page404 } from "./pages/Page404";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Flowers" element={<Flowers />} />
        <Route path="/Earrings" element={<Earrings />} />
        <Route path="/AboutAccessories" element={<AboutAccessories />} />
        <Route path="/ProductionRecord" element={<ProductionRecord />} />
        <Route element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

