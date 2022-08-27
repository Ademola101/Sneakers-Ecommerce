import React from 'react';
import { useSelector } from 'react-redux';
import { ThumbnailStyle } from '../Styles/Thumbnail.style';

export default function Thumbnail() {
  const products = useSelector(state => state.products);
  const thumbnails = products.map(product => product.thumbnail);


  return (
    <ThumbnailStyle>
      {thumbnails.map(thumbnail => <img className='img' src={thumbnail} key = {thumbnail.id} alt="sneakers" />)}

    </ThumbnailStyle>
  );
}
