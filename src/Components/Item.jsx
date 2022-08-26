import React from 'react';
import { useSelector } from 'react-redux';

export default function Item() {

  const product = useSelector(state => state.product);
  const firstimage = product[0].img;
  return (
    <div>

      <img src={firstimage} alt="" />
    </div>
  );
}
