import { createSlice } from '@reduxjs/toolkit';

const Amount = createSlice({

  initialState: 0,
  name: 'amount',
  reducers: {

    increaseAmount: (state) => {
      return state = state + 1;
    },

    decreaseAmount: (state) => {
      return state = state -1;
    }
  }

});

export default Amount.reducer;

export const { increaseAmount, decreaseAmount } = Amount.actions;