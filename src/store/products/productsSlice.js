import { createSlice } from "@reduxjs/toolkit";

const productsSlice = createSlice({
  name: "products",
  initialState: {
    list: [],
  },
  reducers: {
    addProduct: (state, action) => {
      state.list.push(action.payload);
    },
    removeProduct: (state, action) => {
      state.list = state.list.filter(product => product.title !== action.payload.title);
    }
  },
});

export const { addProduct, removeProduct } = productsSlice.actions;
export default productsSlice.reducer;
