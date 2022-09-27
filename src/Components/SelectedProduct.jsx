import React from 'react';
import { SelectedProductStyle } from '../Styles/SelectedProduct.style';
import { useSelector, useDispatch } from 'react-redux';
import SelectedProductExerpt from './SelectedProductExerpt';
import { removeFromCart } from '../reducers/Cart';

export default function SelectedProduct() {


  const dispatch = useDispatch();
  const Cart = useSelector(state => state.Cart);

  const handleDelete = (id) => {
    dispatch(removeFromCart(id));
  };


  return (
    <SelectedProductStyle>

      <div className='header'>
        Cart
      </div>


      { Cart.length > 0 && ( <>
        {Cart.map((product, i) => <SelectedProductExerpt key={i} product={product}
          deleteCart={() => handleDelete(product.id)}  />


        ) }
        <div className='checkout'>
          Checkout
        </div>
      </>
      ) }
      { Cart.length === 0 && <div className='empty'>Your cart is empty</div>}



    </SelectedProductStyle>
  );
}

