import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export const Router = () => (
  <Routes>
    <Route index element={<Home />} />
  </Routes>
);
