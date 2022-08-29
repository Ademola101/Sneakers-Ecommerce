import React, { useState } from 'react';
import { ItemStyle } from '../Styles/Item.style';
import { useSelector } from 'react-redux';
import NextLeft from './NextLeft';
import NextRight from './RightNext';
import Thumbnail from './Thumbnail';
import Modal from './Modal';
import { useMediaQuery } from '../Hooks';


export default function Item() {
  const isMobbile = useMediaQuery('(min-width: 768px)');
  const [isOpen, setisOpen] = useState(false);
  const products = useSelector(state => state.products);
  const displayImage = products.map(product => product.img);
  const index = useSelector(state => state.index);


  return (<>
    <ItemStyle>

      <div >
        <img className='image' onClick={() =>
          isMobbile && setisOpen(true)} src={displayImage[index]} alt="" />


        <Modal isOpen={isOpen} />

      </div>
      <Thumbnail />
    </ItemStyle>
    <NextLeft />
    <NextRight/>

  </>
  );
}
