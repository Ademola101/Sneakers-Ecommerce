import { createSlice } from '@reduxjs/toolkit';



const initialState = [
  { id: 1,
    name: 'Full Limited Edition Sneaker',
    thumbnail: '/product-image/image-product-1-thumbnail.jpg',
    img: '/product-image/image-product-1.jpg',
  },

  { id: 2,
    name: 'product2',
    thumbnail: '/product-image/image-product-2-thumbnail.jpg',
    img: '/product-image/image-product-2.jpg',
  },
  { id: 3,
    name: 'product3',
    thumbnail: '/product-image/image-product-3-thumbnail.jpg',
    img: '/product-image/image-product-3.jpg',
  },
  { id: 4,
    name: 'product4',
    thumbnail: '/product-image/image-product-4-thumbnail.jpg',
    img: '/product-image/image-product-4.jpg',
  }
];

const Product = createSlice({

  initialState,
  name: 'products',
  reducers: {

  }

});



export default Product.reducer;
