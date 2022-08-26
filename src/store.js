import { configureStore } from '@reduxjs/toolkit';
import ProudctReducer from './reducers/ProductSlice';

export const store = configureStore({
  reducer: {
    product: ProudctReducer

  }
}
);