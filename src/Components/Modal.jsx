import React from 'react';
import { useSelector, } from 'react-redux';
import ReactModal from 'react-modal';
import '../Styles/Modal.css';
import Thumbnail from './Thumbnail';

export default function Modal({ isOpen, handleClose }) {


  const products = useSelector(state => state.products);
  const index = useSelector(state => state.index);
  const displayImage = products.map(product => product.img);

  return (

    <ReactModal isOpen = {isOpen} ariaHideApp={false}  className = 'content' overlayClassName= 'Overlay'>

      <svg style={ {
        marginLeft:370
      }} onClick={handleClose} width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#69707D" fillRule="evenodd"/></svg>


      <img className='img' src= {displayImage[index]} alt="" />
      <Thumbnail />
      <div className='svg'>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>


      </div>
    </ReactModal>

  );
}
