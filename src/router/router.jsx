import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/user entry/Login";
import Register from "../components/user entry/Register";
import NavigationBar from "../components/NavigationBar";
import ProductsView from "../components/products/ProductsView";
import Home from "../components/Home";

const router = () => {
  return (
    <div>
      <NavigationBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace={true} />} />
        <Route path="/register" element={<Register />} />
        <Route path="login" element={<Login />} />
        <Route path="/products" element={<ProductsView />} />
      </Routes>
    </div>
  );
};

export default router;
