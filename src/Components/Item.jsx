import React from 'react';

import { useSelector } from 'react-redux';

export default function Item() {

  const products = useSelector(state => state.products);
  const displayImage = products.map(product => product.img);
  const index = useSelector(state => state.index);


  return (
    <div>

      <img src={displayImage[index]} alt="sneakers" />
    </div>
  );
}
