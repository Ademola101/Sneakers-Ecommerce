import React from 'react';
import { SelectedProductStyle } from '../Styles/SelectedProduct.style';
import { useSelector } from 'react-redux';

export default function SelectedProduct() {
  const cart = useSelector(state => state.Cart);
  return (
    <SelectedProductStyle>

      <div className='header'>
        Cart
      </div>

      <div >
        <div className='img'>

        </div>
        <div className='cartcontent'>
          <div>

            {cart.name.length > 0 ? (<div>
              <div>
                {cart.name[0].name}
              </div>

              <div>
              &#36;{125} &times; {cart.index[0]}  <span className='mulresult'> &#36;{125 * cart.index}</span>
              </div>
            </div>) : 'Your cart is empty'}
          </div>

        </div>



        <div className='checkout'>Checkout</div>



      </div>
    </SelectedProductStyle>
  );
}

