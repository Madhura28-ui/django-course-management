import { createSlice } from "@reduxjs/toolkit";

const cartSlice = createSlice({
  name: "cart",

  initialState: {
    items: []
  },

  reducers: {
    addItem: (state, action) => {
      const product = action.payload;

      const existingItem = state.items.find(
        (item) => item.name === product.name
      );

      if (existingItem) {
        existingItem.quantity += 1;
      } else {
        state.items.push({
          ...product,
          cost: product.cost ?? product.price,
          price: product.price ?? product.cost,
          quantity: 1
        });
      }
    },

    removeItem: (state, action) => {
      const name =
        typeof action.payload === "string"
          ? action.payload
          : action.payload.name;

      state.items = state.items.filter(
        (item) => item.name !== name
      );
    },

    updateQuantity: (state, action) => {
      const { id, name, quantity } = action.payload;

      const item = state.items.find(
        (product) =>
          product.name === (name ?? id) ||
          product.id === id
      );

      if (!item) return;

      if (quantity <= 0) {
        state.items = state.items.filter(
          (product) => product !== item
        );
      } else {
        item.quantity = quantity;
      }
    }
  }
});

export const {
  addItem,
  removeItem,
  updateQuantity
} = cartSlice.actions;

export default cartSlice.reducer;
