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
    },

    showPicture: (state, action) => {
      const payload = action.payload;
      return payload-1;
    }

  }


});

export default ProductIndex.reducer;

export const { moveright, moveleft, showPicture } = ProductIndex.actions;