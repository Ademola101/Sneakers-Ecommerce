import React from 'react';
import { SelectedProductStyle } from '../Styles/SelectedProduct.style';
import { useSelector, useDispatch } from 'react-redux';
import SelectedProductExerpt from './SelectedProductExerpt';
import { RiDeleteBinLine } from 'react-icons/ri';
// import { removeFromCart } from '../reducers/Cart';


export default function SelectedProduct() {
  const dispatch = useDispatch();
  const Cart = useSelector(state => state.Cart);
  // const products = useSelector(state => state.products);
  // const id = cart.name[0]?.id;
  // const product = products.find(product => product.id === id);
  // const handleRemoveCart = () => {
  //   dispatch(removeFromCart());

  // };
  return (
    <SelectedProductStyle>

      <div className='header'>
        Cart
      </div>
      <div>
        {Cart.map(cart => <SelectedProductExerpt key={cart.id} product = {cart}/>)}
      </div>



    </SelectedProductStyle>
  );
}

