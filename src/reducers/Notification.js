import { createSlice } from '@reduxjs/toolkit';

const NotificationSlice = createSlice({
  initialState: {
    message: '',
  },
  name: 'Notification',
  reducers: {
    setNotification: (state, action) => {
      state.message = action.payload;
    },

    clearNotification: (state) => {
      state.message = '';
    }

  }
});

export const { clearNotification, setNotification } = NotificationSlice.actions;
export default NotificationSlice.reducer;

export const createNotification = (message) => {
  return async (dispatch) => {
    dispatch(setNotification(message));

    setTimeout(() => {
      dispatch(clearNotification());
    }, 5000);
  };
};