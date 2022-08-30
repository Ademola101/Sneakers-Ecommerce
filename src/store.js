import { configureStore } from '@reduxjs/toolkit';
import ProductIndex from './reducers/ProductIndex';
import ProudctReducer from './reducers/ProductSlice';



export const store = configureStore({
  reducer: {
    products: ProudctReducer,
    index: ProductIndex,

  }
}
);
