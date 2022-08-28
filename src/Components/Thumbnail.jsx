import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { ThumbnailStyle } from '../Styles/Thumbnail.style';
import { showPicture } from '../reducers/ProductIndex';

export default function Thumbnail() {
  const products = useSelector(state => state.products);


  const dispatch = useDispatch();
  const handleShowPicture = (index) => {
    dispatch(showPicture(index));


  };

  return (
    <ThumbnailStyle>
      {products.map(product => <img onClick={() => handleShowPicture(product.id)} className='img'
        src={product.thumbnail} key = {product.id} alt="sneakers" />)}
    </ThumbnailStyle>
  );
}
