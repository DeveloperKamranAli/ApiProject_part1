import { configureStore } from "@reduxjs/toolkit";
import counterReducer from "./slices/add-Cart/addCartSlice";
import ProductsReducer from './slices/add-Cart/products/products'

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    products: ProductsReducer,
  },
});
