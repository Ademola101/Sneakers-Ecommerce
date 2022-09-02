import { createSlice, nanoid } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  initialState: [],
  name: 'cart',
  reducers: {

    addToCart: (state, { payload:{ product, amount } }) => {
      const productAmount = { ...product, amount };
      return [...state, productAmount];

    },
    removeFromCart: (state, action) => {
      const id = action.payload;

      const productToBeRemoved = state.find((product) => product.id === id);
      return state =  state.filter((product) => product !== productToBeRemoved);

    },

    prepare(product, amount) {
      return { payload: { id: nanoid(), product, amount } };
    }


  }

}

);

export default CartSlice.reducer;

export const { addToCart, removeFromCart } = CartSlice.actions;