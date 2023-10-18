import axios from "axios";
import { getCart } from "../actions/actions";

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
        dispatch(getCart(response.data?.cart_items[0]));
      })
      .catch((error) => {
        console.log(error);
      });
  };
};

export const addToCartApi = (productData) => {
  console.log(productData);
  return async (dispatch) => {
    try {
      const response = await axiosInstance.post("/cart/add/", {
        ProductId: productData.id,
        quantity: 1,
      });
      console.log(response);
      //   dispatch({ type: "ADD_TO_CART_SUCCESS", payload: response.data });
    } catch (error) {
      console.log(error.message);
      //   dispatch({ type: "ADD_TO_CART_ERROR", error: error.message });
    }
  };
};
