import React from 'react';
import { SelectedProductStyle } from '../Styles/SelectedProduct.style';

export default function SelectedProduct() {
  return (
    <SelectedProductStyle>

      <div className='header'>
        Cart
      </div>

      <div className='cartcontent'>

Your cart is empty

      </div>
    </SelectedProductStyle>
  );
}

