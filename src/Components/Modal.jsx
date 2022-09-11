import React from 'react';
import { useSelector, } from 'react-redux';
import Thumbnail from './Thumbnail';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
export default function ModalComponent({ open }) {


  const products = useSelector(state => state.products);
  const index = useSelector(state => state.index);
  const displayImage = products.map(product => product.img);

  return (
    <div>
      <Button >Open modal</Button>
    </div>

  );
}
