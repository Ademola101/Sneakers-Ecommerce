import { createSlice } from '@reduxjs/toolkit';

const showCartSlice = createSlice({
  initialState: false,
  name: 'showCart',
  reducers: {
    showCart: (state) => {
      return state = !state;
    }
  }
});

export default showCartSlice.reducer;
export const { showCart } = showCartSlice.actions;