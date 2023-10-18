import axios from "axios";
import { emptyCart, getCart, removeFromCart } from "../actions/actions";

const axiosInstance = axios.create({
  baseURL: "http://localhost:3000/",
  headers: {
    Authorization: `${localStorage.getItem("token")}`,
    "Content-Type": "application/json",
  },
});

export const fetchCartApi = () => {
  const config = {
    method: "get",
    url: "http://localhost:3000/cart",
    headers: {
      Authorization: `${localStorage.getItem("token")}`,
      "Content-Type": "application/json",
    },
  };
  return async function (dispatch) {
    axios(config)
      .then((response) => {
        dispatch(getCart(response.data?.cart_items));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addToCartApi = (productData) => {
  return async (dispatch) => {
    try {
      await axiosInstance.post("/cart/add/", {
        ProductId: productData.id,
        quantity: 1,
      });
      dispatch(fetchCartApi());
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const emptyAllItems = () => {
  return async (dispatch) => {
    try {
      await axiosInstance.delete("/cart/removeAll");
      dispatch(emptyCart());
    } catch (error) {
      console.log(error.message);
    }
  };
};

export const removeProduct = (id) => {
  return async (dispatch) => {
    try {
      await axiosInstance.request({
        method: "delete",
        url: "/cart/remove",
        data: { ProductId: +id },
      });
      dispatch(removeFromCart(id));
    } catch (error) {
      console.log(error.message);
    }
  };
};
