import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextExport } from "../../util/context/AuthContext";

const Logout = () => {
  const navigate = useNavigate();
  const { logout } = AuthContextExport();
  useEffect(() => {
    logout();
    localStorage.removeItem("token");
    navigate("/");
  });
};

export default Logout;
