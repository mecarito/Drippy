import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./counterSlice";
import multiplyby10 from "./multiplyBy10";

export default configureStore({
  reducer: {
    counter: counterReducer,
    multiply: multiplyby10,
  },
});
