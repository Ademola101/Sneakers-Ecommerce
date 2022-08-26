import { createSlice } from '@reduxjs/toolkit';



const initialState = [
  { name: 'product1',
    thumbnail: '/product-image/image-product-1-thumbnail.jpg',
    img: '/product-image/image-product-1.jpg',
  },

  {
    name: 'product2',
    thumbnail: '/product-image/image-product-2-thumbnail.jpg',
    img: '/product-image/image-product-2.jpg',
  },
  {
    name: 'product3',
    thumbnail: '/product-image/image-product-3-thumbnail.jpg',
    img: '/product-image/image-product-3.jpg',
  },
  {
    name: 'product4',
    thumbnail: '/product-image/image-product-4-thumbnail.jpg',
    img: '/product-image/image-product-4.jpg',
  }
];

const Product = createSlice({

  initialState,
  name: 'products',
  reducers: {  }

});



export default Product.reducer;
