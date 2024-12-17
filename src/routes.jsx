import React from "react";
import { Routes, Route } from "react-router-dom";
import HomePage from "./components/HomePage";
import ProductPage from "./components/ProductPage";
import NotFoundPage from "./components/NotFoundPage";

const RoutesComponent = () => (
  <Routes>
    <Route path="/" element={<HomePage />} />
    <Route path="/product/:id" element={<ProductPage />} />
    <Route path="*" element={<NotFoundPage />} />
  </Routes>
);

export default RoutesComponent;
