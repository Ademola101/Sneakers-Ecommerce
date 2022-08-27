import React from 'react';
import { NextStyleLeft } from '../Styles/NextLeft.style';
import { moveleft } from '../reducers/ProductIndex';
import { useDispatch, useSelector } from 'react-redux';

export default function NextLeft() {
  const dispatch = useDispatch();
  const index = useSelector(state => state.index);

  const handleClick = () => {
    if (index !== 0) {
      dispatch(moveleft());
    }

  };

  return (
    <NextStyleLeft onClick={handleClick} display = {index === 0 ? 'none' : 'block'}>
      <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
        <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>
    </NextStyleLeft>
  );
}