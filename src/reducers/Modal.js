import { createSlice } from '@reduxjs/toolkit';
const ModalSlice = createSlice({
  name: 'modal',
  initialState: {
    isOpen: false,
  },
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    }
  }
});
export default ModalSlice.reducer;
export const { openModal, closeModal } = ModalSlice.actions;