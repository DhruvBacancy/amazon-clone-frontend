import React from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Login from "../components/user entry/Login";
import Register from "../components/user entry/Register";
import NavigationBar from "../components/NavigationBar";

const router = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<NavigationBar />} />
        <Route path="/home" element={<Navigate to="/" replace={true} />} />
        <Route path="/register" element={<Register />} />
        <Route path="login" element={<Login />} />
      </Routes>
    </div>
  );
};

export default router;
