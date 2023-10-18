import { combineReducers } from "redux";

const cartReducer = (state = [], action) => {
  switch (action.type) {
    case "GET_CART":
      return action.payload;
    case "ADD_TO_CART":
      return [...state, action.payload];
    case "REMOVE_FROM_CART":
      return state.filter((item) => item.product_id !== action.payload);
    case "EMPTY_CART":
      return [];
    default:
      return state;
  }
};

const rootReducer = combineReducers({ cartReducer });

export default rootReducer;
