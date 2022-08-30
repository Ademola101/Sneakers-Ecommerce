import React from 'react';
import { SelectedProductStyle } from '../Styles/SelectedProduct.style';
import { useSelector } from 'react-redux';

export default function SelectedProduct() {
  const cart = useSelector(state => state.Cart);
  const cartname = cart[0]?.name;
  const amount = useSelector(state => state.Amount);
  return (
    <SelectedProductStyle>

      <div className='header'>
        Cart
      </div>

      <div className='cartcontent'>

        {cartname ? ` ${cartname } $ ${125.00} * ${amount} ${125 * amount}` :'Your cart is empty'}



      </div>
    </SelectedProductStyle>
  );
}

