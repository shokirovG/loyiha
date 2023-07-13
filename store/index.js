import { createStore } from "redux";
import userReducer from "./reducers/userReducer";
const initialState = {
  users: [],
  isLoading: "none",
};
const store = createStore(userReducer, initialState);

export default store;
