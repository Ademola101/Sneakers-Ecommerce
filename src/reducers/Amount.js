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
    },

    setToZero: (state) => {
      state = 0;
      return state;

    }

  }

});

export default Amount.reducer;

export const { increaseAmount, decreaseAmount, setToZero } = Amount.actions;