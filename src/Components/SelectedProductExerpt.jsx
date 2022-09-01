import React from 'react';
import { RiDeleteBinLine } from 'react-icons/ri';
import { SeletedExceptStyle } from '../Styles/SelectedProductExceptstyle';
export default function SelectedProductExerpt({ product, deleteCart }) {
  return (
    <SeletedExceptStyle>

      <div className='img'>
        <img src= {product.thumbnail} alt=" sneakers" />

      </div>

      <div className='product'>
        <div className='product-text'>
          {product.name}
        </div>

        <div>
      &#36;{125.00} &times; {product.amount} <span className='bold-result'> &#36;{125 * product.amount}</span>
        </div>

      </div>

      <div className='icon'>

        <RiDeleteBinLine onClick={deleteCart}/>


      </div>

    </SeletedExceptStyle>
  );
}
