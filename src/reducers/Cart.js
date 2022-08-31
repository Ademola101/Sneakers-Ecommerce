import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  initialState: {
    name: [],
    index: []
  },
  name: 'cart',
  reducers: {

    addToCart: (state, { payload:{ cart, index } }) => {

      // if (state.some(arr => arr?.id=== cart.id)) {
      //   return state;
      // }

      // return state = state.concat(cart.payload);
      state.index = [...state.index, index];
      state.name = [...state.name, cart];

    }


  }

}

);

export default CartSlice.reducer;

export const { addToCart } = CartSlice.actions;