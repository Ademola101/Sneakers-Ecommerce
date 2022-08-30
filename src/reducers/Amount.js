import { createSlice } from '@reduxjs/toolkit';

const Amount = createSlice({

  initialState: 0,
  name: 'amount',
  reducers: {

    increaseAmount: (state) => {
      return state = state ++;
    }
  }

});

export default Amount.reducer;

export const { increaseAmount } = Amount.actions;