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
      <div>
        {Cart.map(cart => <SelectedProductExerpt key={cart.id} product = {cart} deleteCart = {() => handleDelete(cart.id)} />)}
      </div>



    </SelectedProductStyle>
  );
}

