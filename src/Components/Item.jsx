import React from 'react';
import { ItemStyle } from '../Styles/Item.style';
import { useSelector } from 'react-redux';
import NextLeft from './NextLeft';
import NextRight from './RightNext';


export default function Item() {

  const products = useSelector(state => state.products);
  const displayImage = products.map(product => product.img);
  const index = useSelector(state => state.index);


  return (<>
    <ItemStyle>

      <div >
        <img className='image' src={displayImage[index]} alt="sneakers" />
      </div>

    </ItemStyle>
    <NextLeft />
    <NextRight/>
  </>
  );
}
