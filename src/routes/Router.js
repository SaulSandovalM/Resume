import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "../pages/Home";
import Courses from "../pages/Courses";
import Registration from "../pages/Registration";

export const Router = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/cursos" element={<Courses />} />
    <Route path="/registro/:id" element={<Registration />} />
  </Routes>
);
