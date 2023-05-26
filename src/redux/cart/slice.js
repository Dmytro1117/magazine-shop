import { createSlice } from '@reduxjs/toolkit';

//cart slice
const cartSlice = createSlice({
  name: 'cart',
  initialState: {
    items: [],
    total: 0,
  },
  reducers: {
    //add product with verification
    addItem: (state, action) => {
      const { id, name, price, quantity = 1, image_link } = action.payload;
      const existingItemIndex = state.items.findIndex(item => item.id === id);

      if (existingItemIndex !== -1) {
        const existingItem = state.items[existingItemIndex];
        const newQuantity = existingItem.quantity + quantity;
        const newSum = newQuantity * price;

        state.items[existingItemIndex] = {
          ...existingItem,

          quantity: newQuantity,
          sum: newSum,
        };
      } else {
        const sum = price * quantity;
        state.items.push({
          id,
          name,
          image_link,
          price,
          quantity,
          sum,
        });
      }

      state.total += price * quantity;
    },

    //remove product with verification
    removeItem: (state, action) => {
      const itemId = action.payload;
      const removedItem = state.items.find(item => item.id === itemId);
      if (removedItem) {
        state.items = state.items.filter(item => item.id !== itemId);
        state.total -= removedItem.price * removedItem.quantity;
      }
    },
    //update product with verification
    updateItemQuantity: (state, action) => {
      const { id, quantity } = action.payload;
      const itemToUpdate = state.items.find(item => item.id === id);

      if (itemToUpdate) {
        const oldSum = itemToUpdate.sum;
        itemToUpdate.quantity = quantity;
        itemToUpdate.sum = itemToUpdate.price * quantity;
        state.total += itemToUpdate.sum - oldSum;
      }
    },
  },
});

export const { addItem, removeItem, updateItemQuantity } = cartSlice.actions;
export const cartReducer = cartSlice.reducer;
