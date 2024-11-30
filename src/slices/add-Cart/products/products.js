import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";

const productSlice = createSlice({
  name: "products",
  initialState: {
    items: [],
    isToast: false,
    isProductAdded: false,
  },
  reducers: {
    addProducts: (state, action) => {
      const isExist = state.items.find((item) => item.id === action.payload.id);
      console.log(isExist, "isExist");

      if (isExist) {
        state.isToast = true;
      } else {
        state.isToast = false;
        state.isProductAdded = true;
        state.items.push({ ...action.payload, quantity: 1 });
      }
    },
    increasquantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product) {
        product.quantity += 1;
      }
    },
    decreasequantity: (state, action) => {
      const product = state.items.find((item) => item.id === action.payload.id);
      if (product && product.quantity > 1) {
        product.quantity -= 1;
      } else {
        state.items = state.items.filter(
          (items) => items.id !== action.payload.id
        );
      }
    },
    removeItems: (state, action) => {
      state.items = state.items.filter((item) => item.id !== action.payload.id);
    },

  },
});

export const { addProducts, increasquantity, decreasequantity, removeItems } =
  productSlice.actions;
export default productSlice.reducer;
