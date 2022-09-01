import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  initialState: {
    name: [],
    index: []
  },
  name: 'cart',
  reducers: {

    addToCart: (state, { payload:{ cart, index } }) => {
      state.index = [...state.index, index];
      state.name = [...state.name, cart];

    },

    removeFromCart: (state, { payload:{ cart, index } }) => {
      state.index = state.index.filter(item => item !== index);
      state.name = state.name.filter(item => item !== cart);
    }


  }

}

);

export default CartSlice.reducer;

export const { addToCart, removeFromCart } = CartSlice.actions;