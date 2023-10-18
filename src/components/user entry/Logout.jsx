import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContextExport } from "../../util/context/AuthContext";
import { useDispatch, useSelector } from "react-redux";
import { emptyCart } from "../../util/redux/actions/actions";

const Logout = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const { logout } = AuthContextExport();
  useEffect(() => {
    logout();
    localStorage.removeItem("token");
    dispatch(emptyCart());
    navigate("/");
  }, []);
};

export default Logout;
