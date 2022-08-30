import { configureStore } from '@reduxjs/toolkit';
import ShowCart from './reducers/ShowCart';
import Cart from './reducers/Cart';
import Amount from './reducers/Amount';
import ProductIndex from './reducers/ProductIndex';
import ProudctReducer from './reducers/ProductSlice';




export const store = configureStore({
  reducer: {
    Cart: Cart,
    Amount: Amount,
    products: ProudctReducer,
    index: ProductIndex,
    showCart: ShowCart,



  }
}
);
