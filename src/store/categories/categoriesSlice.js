import { createSlice } from "@reduxjs/toolkit";

const categoriesSlice = createSlice({
  name: "categories",
  initialState: {
    list: [],
  },
  reducers: {
    addCategory: (state, action) => {
      state.list.push(action.payload);
    },
    removeCategory: (state, action) => {
      state.list = state.list.filter(category => category.name !== action.payload.name);
    }
  },
});

export const { addCategory, removeCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;
