import React, { useState } from 'react';
import { ItemStyle } from '../Styles/Item.style';
import { useSelector } from 'react-redux';
import NextLeft from './NextLeft';
import NextRight from './RightNext';
import Thumbnail from './Thumbnail';
import Modal from './Modal';
import { useMediaQuery } from '../Hooks';
import SelectedProduct from './SelectedProduct';



export default function Item() {
  const [isOpen, setisOpen] = useState(false);
  const isMobbile = useMediaQuery('(min-width: 768px)');
  const showCartState = useSelector(state => state.showCart);



  const products = useSelector(state => state.products);


  const index = useSelector(state => state.index);
  const handleClose = () => {
    setisOpen(false);
    console.log(isOpen);
  };




  return (<>
    <ItemStyle>

      <div onClick={() => {

        isMobbile && setisOpen(true);}
      } >
        <img className='image'  src={products.find(
          product => product.id === index+1)?.img} alt="sneakers" />
      </div>
      <Thumbnail />
    </ItemStyle>
    <NextLeft />
    <NextRight/>
    {showCartState && <SelectedProduct />}
    <Modal isOpen={isOpen} handleClose = {handleClose}/>
  </>
  );
}
