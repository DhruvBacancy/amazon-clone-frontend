import React, { useEffect } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/user entry/Login";
import Register from "../components/user entry/Register";
import NavigationBar from "../components/NavigationBar";
import ProductsView from "../components/products/ProductsView";
import Home from "../components/Home";
import Cart from "../components/Cart";
import ProductDetail from "../components/products/ProductDetail";
import UserDashboard from "../components/dashboard/UserDashboard";
import Logout from "../components/user entry/Logout";
import { AuthContextExport } from "../util/context/AuthContext";
import Error from "../components/Error";

const router = () => {
  const token = localStorage.getItem("token");
  const { login } = AuthContextExport();
  useEffect(() => {
    if (token) {
      login(token);
    }
  }, []);
  return (
    <div>
      <NavigationBar />
      <Routes>
        {!token ? (
          <>
            <Route path="login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </>
        ) : (
          <>
            <Route path="logout" element={<Logout />} />
            <Route path="/dashboard" element={<UserDashboard />} />
          </>
        )}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Navigate to="/" replace={true} />} />
        <Route path="/products" element={<ProductsView />} />
        <Route path="/cart" element={<Cart />} />
        <Route path="/product/:id" element={<ProductDetail />} />
        <Route path="/*" element={<Error />} />
      </Routes>
    </div>
  );
};

export default router;
