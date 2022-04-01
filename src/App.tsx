import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./pages/Home"
import { Flowers } from "./pages/Flowers";
import { Earrings } from "./pages/Earrings";
import { AboutAccessories } from "./pages/AboutAccessories";
import { ProductionRecord } from "./pages/ProductionRecord";
import { Page404 } from "./pages/Page404";
import { Record1 } from "./component/Records/Record1";
import { Record2 } from "./component/Records/Record2";
import { Record3 } from "./component/Records/Record3";
import { Record4 } from "./component/Records/Record4";
import { Record5 } from "./component/Records/Record5";
import { Record6 } from "./component/Records/Record6";
import { Record7 } from "./component/Records/Record7";
import { Record8 } from "./component/Records/Record8";

export const App = () => {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Flowers" element={<Flowers />} />
        <Route path="/Earrings" element={<Earrings />} />
        <Route path="/AboutAccessories" element={<AboutAccessories />} />
        <Route path="/ProductionRecord" element={<ProductionRecord />} />
        <Route path="/record1" element={<Record1 />} /> 
        <Route path="/record2" element={<Record2 />} /> 
        <Route path="/record3" element={<Record3 />} /> 
        <Route path="/record4" element={<Record4 />} /> 
        <Route path="/record5" element={<Record5 />} /> 
        <Route path="/record6" element={<Record6 />} /> 
        <Route path="/record7" element={<Record7 />} /> 
        <Route path="/record8" element={<Record8 />} /> 
        <Route element={<Page404 />} />
      </Routes>
    </BrowserRouter>
  );
};

