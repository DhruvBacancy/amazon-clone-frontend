import { createStore } from "redux";
import rootReducer from "../reducers/CartReducers";

const store = createStore(rootReducer);

export default store;
