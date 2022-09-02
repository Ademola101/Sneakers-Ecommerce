import React from 'react';
import { PriceStyle } from '../Styles/Price.style';

export default function Price() {
  return (
    <PriceStyle>
      <div className='discount'>
      &#36;125.00

      </div>

      <div className='percent'>

        50%


      </div>

      <div className='original'>
      &#36;250
      </div>


    </PriceStyle>
  );
}
