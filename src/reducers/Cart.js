import { createSlice } from '@reduxjs/toolkit';

const CartSlice = createSlice({
  initialState: [],
  name: 'cart',
  reducers: {

    addToCart: (state, action) => {

      if (state.some(arr => arr?.id=== action.payload.id)) {
        return state;
      }

      return state = state.concat(action.payload);

    }


  }

}

);

export default CartSlice.reducer;

export const { addToCart } = CartSlice.actions;