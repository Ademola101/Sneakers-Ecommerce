import React from 'react';
import { NextStyleRight } from '../Styles/NextRightStyle';
import { useDispatch, useSelector } from 'react-redux';
import { moveright } from '../reducers/ProductIndex';

export default function NextRight() {

  const dispatch = useDispatch();
  const products = useSelector(state => state.products);
  const img = products.map(product => product.img);
  const index = useSelector(state => state.index);
  const handleClick = () => {
    dispatch(moveright());
  };
  return (
    <NextStyleRight  onClick={handleClick} display = {index >= img.length -1? 'none' : 'block'}><svg width="13" height="18" xmlns="http://www.w3.org/2000/svg"><path d="m2 1 8 8-8 8"
      stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg></NextStyleRight>
  );
}
