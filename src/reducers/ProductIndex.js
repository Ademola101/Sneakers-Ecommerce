import { createSlice } from '@reduxjs/toolkit';

const ProductIndex = createSlice({
  initialState: 0,
  name: 'index',
  reducers: {
    moveright: (state) => {
      return state = state + 1;
    },
    moveleft: (state) => {
      return state = state - 1;
    }

  }


});

export default ProductIndex.reducer;

export const { moveright, moveleft } = ProductIndex.actions;