import { createSlice } from '@reduxjs/toolkit';

const initialState = [
  {  name: 'product1',
    img: '/product-image/image-product-1-thumbnail.jpg'
  }
];

const Product = createSlice({

  initialState,
  name: 'products',
  reducers: {
  }

});

export default Product.reducer;

