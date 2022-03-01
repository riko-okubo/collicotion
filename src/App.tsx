import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./component/Home"
import { Flowers } from "./component/Flowers";
import { Earrings } from "./component/Earrings";
import { EarringImg_Quilted } from "./component/EarringImg_Quilted";
import { EarringImg_Masonry } from "./component/EarringImg_Masonry";
import { Header } from "./molecules/Header";
// import { Routes } from "react-router";

export const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Flowers" element={<Flowers />} />
        <Route path="/Earrings" element={<Earrings />} />
      </Routes>
    </BrowserRouter>
  );
};

