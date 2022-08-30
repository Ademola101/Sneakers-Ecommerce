import { configureStore } from '@reduxjs/toolkit';
import ProductIndex from './reducers/ProductIndex';
import ProudctReducer from './reducers/ProductSlice';
import ShowCart from './reducers/ShowCart';
import Cart from './reducers/Cart';



export const store = configureStore({
  reducer: {
    products: ProudctReducer,
    index: ProductIndex,
    showCart: ShowCart,
    Cart: Cart

  }
}
);
