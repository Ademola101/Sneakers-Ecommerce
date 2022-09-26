import { createSlice } from '@reduxjs/toolkit';

const Notification = createSlice({
  initialState: {
    message: '',
  },
  name: 'notification',
  reducers: {
    createNotification: (state, action) => {
      state.message = action.payload;
    },

    clearNotification: (state) => {
      state.message = '';
    }

  }
});

export const { clearNotification, createNotification } = Notification.actions;
export default Notification.reducer;