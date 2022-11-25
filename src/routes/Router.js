import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";

export const Router = () => (
  <Routes>
    <Route index element={<Home />} />
    {/* <Route path="/cursos" element={<Courses />} /> */}
    {/* <Route path="/registro/:id" element={<Registration />} /> */}
  </Routes>
);
