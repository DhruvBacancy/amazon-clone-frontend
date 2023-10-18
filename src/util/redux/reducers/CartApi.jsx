import axios from "axios";
import { addToCart, getCart } from "../actions/actions";

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
        console.log(response.data?.cart_items)
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
      const response = await axiosInstance.post("/cart/add/", {
        ProductId: productData.id,
        quantity: 1,
      });
      dispatch(addToCart(productData));
    } catch (error) {
      console.log(error.message);
    }
  };
};
