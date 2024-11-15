import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/add-Cart/addCartSlice";

export const store = configureStore({
  reducer: {
    counter: counterReducer,
  },
});
