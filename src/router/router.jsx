import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/user entry/Login";
import Register from "../components/user entry/Register";
import NavigationBar from "../components/NavigationBar";
import ProductsView from "../components/products/ProductsView";
import Home from "../components/Home";
import Cart from "../components/Cart";
import ProductDetail from "../components/products/ProductDetail";
import UserDashboard from "../components/dashboard/UserDashboard";

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
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/dashboard" element={<UserDashboard />} />
      </Routes>
    </div>
  );
};

export default router;
