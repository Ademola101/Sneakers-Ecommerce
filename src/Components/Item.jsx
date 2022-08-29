import React from 'react';
import { ItemStyle } from '../Styles/Item.style';
import { useSelector, useDispatch } from 'react-redux';
import NextLeft from './NextLeft';
import NextRight from './RightNext';
import Thumbnail from './Thumbnail';
import Modal from './Modal';
import { useMediaQuery } from '../Hooks';
import { openModal } from '../reducers/Modal';

export default function Item() {
  const isMobbile = useMediaQuery('(min-width: 768px)');
  const dispatch = useDispatch();

  const products = useSelector(state => state.products);
  const displayImage = products.map(product => product.img);
  const index = useSelector(state => state.index);
  const isOpen = useSelector(state => state.modal.isOpen);


  return (<>
    <ItemStyle>

      <div onClick={() =>
        isMobbile && dispatch(openModal())} >
        <img className='image'  src={displayImage[index]} alt="" />


        <Modal isOpen={isOpen}  />

      </div>
      <Thumbnail />
    </ItemStyle>
    <NextLeft />
    <NextRight/>

  </>
  );
}
