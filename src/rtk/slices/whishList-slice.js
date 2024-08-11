import { createSlice } from "@reduxjs/toolkit";

const whishLishSlice = createSlice({
  initialState: JSON.parse(localStorage.getItem("whishList")) || [],
  name: "whishLishSlice",
  reducers: {
    addToWhishList: (state, action) => {
      const productCopy = state.find(
        (product) => product.id == action.payload.id
      );
      productCopy ? null : state.push(action.payload);
      localStorage.setItem("whishList", JSON.stringify(state));
    },
    clearWhishList: (state, action) => {
      localStorage.removeItem("whishList");
      return [];
    },
  },
});

export const { addToWhishList, clearWhishList } = whishLishSlice.actions;
export default whishLishSlice.reducer;
