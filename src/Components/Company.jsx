import React from 'react';
import { CompanyStyle } from '../Styles/Company.style';
import Price from './Price';
import { useSelector } from 'react-redux';

export default function Company() {
  const index = useSelector(state => state.index);
  return (
    <CompanyStyle marginTop = {index > 0 && index < 3 ? '-50px' : '-20px'}>

      <div className='header'>
        SNEAKER COMPANY
      </div>
      <div className='fall'>
        Fall Limited Edition Sneaker
      </div>

      <div className='text'>
        <strong>
        These low-profile sneakers are your perfect casual wear companion.
        Featuring a durable rubber cuter sole, they&#39;ll withstand evertything the weather can offer.

        </strong>

      </div>

      <Price />


    </CompanyStyle>
  );
}
