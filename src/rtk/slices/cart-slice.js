import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  initialState:
    (JSON.parse(localStorage.getItem("cart")) &&
      JSON.parse(localStorage.getItem("cart")).filter(
        (product) => product.quantity != 0
      )) ||
    [],
  name: "cartSlice",
  reducers: {
    addToCart: (state, action) => {
      const foundProduct = state.find(
        (product) => product.id == action.payload.id
      );

      if (!foundProduct) {
        state.push({ ...action.payload, quantity: 1 });
      }

      localStorage.setItem("cart", JSON.stringify(state));
    },
    increaseQuantityBy1: (state, action) => {
      const foundProduct = state.find(
        (product) => product.id == action.payload.id
      );
      if (foundProduct) {
        foundProduct.quantity++;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    increaseQuantityBySpecificQunatity: (state, action) => {
      const foundProduct = state.find(
        (product) => product.id == action.payload.id
      );
      if (foundProduct) {
        if (foundProduct.quantity == 1) {
          // if the product added to the first time set the quantity of the product to the quantity from the reducer
          foundProduct.quantity = action.payload.quantity;
        } else {
          // if this isn't the first add for the product add the quantity of the product to the quantity of the reducer
          foundProduct.quantity += action.payload.quantity;
        }
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    decreaseQuantity: (state, action) => {
      const productCopy = state.find(
        (product) => product.id == action.payload.id
      );
      if (productCopy && productCopy.quantity > 0) {
        productCopy.quantity--;
      }
      localStorage.setItem("cart", JSON.stringify(state));
    },
    updateCart: (state, action) => {
      return (
        (JSON.parse(localStorage.getItem("cart")) &&
          JSON.parse(localStorage.getItem("cart")).filter(
            (product) => product.quantity != 0
          )) ||
        []
      );
    },
    clearCart: (state, action) => {
      localStorage.removeItem("cart");
      return [];
    },
  },
});

export const {
  addToCart,
  decreaseQuantity,
  updateCart,
  clearCart,
  increaseQuantityBy1,
  increaseQuantityBySpecificQunatity,
} = cartSlice.actions;
export default cartSlice.reducer;
