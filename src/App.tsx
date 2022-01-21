import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import './App.css';
import { Home } from "./component/Home"
import { EarringImg_Quilted } from "./component/EarringImg_Quilted";
import { EarringImg_Masonry } from "./component/EarringImg_Masonry";
import { Header } from "./molecules/Header";
// import { Routes } from "react-router";

export const App = () => {
  return (
    <BrowserRouter>
    <Home />
      <Routes>
        <Route path="/" element={Home} />
        <Route path="/EarringImg_Quilted" element={EarringImg_Quilted} />
        <Route path="/EarringImg_Maisonry" element={EarringImg_Masonry} />
      </Routes>
    </BrowserRouter>
  );
};

