import React from "react";
import { Routes, Route } from "react-router-dom";
import Blog from "../pages/Blog";
import Home from "../pages/Home";
import Article from "../pages/Article";
import Login from "../pages/Login";
import CreatePost from "../pages/CreatePost";
import ProtectedRoute from "../components/ProtectedRoute";

export const Router = () => (
  <Routes>
    <Route index element={<Home />} />
    <Route path="/login" element={<Login />} />
    <Route path="/blog" element={<Blog />} />
    <Route path="/articulo/:id" element={<Article />} />
    <Route
      path="/crearPost"
      element={
        <ProtectedRoute>
          <CreatePost />
        </ProtectedRoute>
      }
    />
  </Routes>
);
