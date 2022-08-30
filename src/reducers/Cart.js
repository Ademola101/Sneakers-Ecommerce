import { createSlice } from '@reduxjs/toolkit';

import { store } from '../store';

const CartSlice = createSlice({
  initialState: {

  },
  name: 'cart',
  reducers: {
    addCart:(state, payload) => {
      const index = payload;

      const products = store.getState().products;
      const product = products.find(product => product.id === index);
      return state = state.name.push(product);

    }

  } }

);

export default CartSlice.reducer;

export const { addToCart } = CartSlice.actions;