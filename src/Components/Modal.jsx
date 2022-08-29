import React from 'react';
import { useSelector, } from 'react-redux';
import ReactModal from 'react-modal';
import '../Styles/Modal.css';

export default function Modal({ isOpen, handleClose }) {


  const products = useSelector(state => state.products);
  const index = useSelector(state => state.index);
  const displayImage = products.map(product => product.img);

  return (

    <ReactModal isOpen = {isOpen} ariaHideApp={false}   className = 'Modal'>
      <button onClick={handleClose}>
        close modal      </button>

      <img className='img' src= {displayImage[index]} alt="" />
      <div className='svg'>
        <svg width="12" height="18" xmlns="http://www.w3.org/2000/svg">
          <path d="M11 1 3 9l8 8" stroke="#1D2026" strokeWidth="3" fill="none" fillRule="evenodd"/></svg>


      </div>
    </ReactModal>

  );
}
