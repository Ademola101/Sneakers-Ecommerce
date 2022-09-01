import React from 'react';
import { SelectedProductStyle } from '../Styles/SelectedProduct.style';
import { useSelector, useDispatch } from 'react-redux';
import { RiDeleteBinLine } from 'react-icons/ri';
import { removeFromCart } from '../reducers/Cart';


export default function SelectedProduct() {
  const dispatch = useDispatch();
  const cart = useSelector(state => state.Cart);
  const products = useSelector(state => state.products);
  const id = cart.name[0]?.id;
  const product = products.find(product => product.id === id);
  const handleRemoveCart = () => {
    dispatch(removeFromCart());

  };
  return (
    <SelectedProductStyle>

      <div className='header'>
        Cart
      </div>

      <div >

        <div className='container'>
          { cart.name.length > 0 && <img src= {product?.thumbnail} alt="sneakers" />}


          <div className='cartcontent'>
            <div>

              {cart.name.length > 0 ? (<div>
                <div>
                  {cart.name[0].name}
                </div>

                <div>
              &#36;{125} &times; {cart.index[0]}  <span className='mulresult'> &#36;{125 * cart.index}</span>
                  < RiDeleteBinLine className='icon'/>
                </div>


              </div> ) : 'Your cart is empty'}
            </div>

          </div></div>



        { cart.name.length > 0 && <div className='checkout'>Checkout</div>}



      </div>
    </SelectedProductStyle>
  );
}

