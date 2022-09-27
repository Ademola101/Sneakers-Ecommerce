import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  initialState: [],
  name: 'cart',
  reducers: {

    addToCart: (state, { payload:{ id, product, amount } }) => {
      const productAmount = { id, product, amount };
      return [...state, productAmount];

    },
    removeFromCart: (state, action) => {
      const id = action.payload;

      const productToBeRemoved = state.find((product) => product.id === id);
      return state =  state.filter((product) => product !== productToBeRemoved);

    },




  }

}

);

export default CartSlice.reducer;

export const { addToCart, removeFromCart } = CartSlice.actions;