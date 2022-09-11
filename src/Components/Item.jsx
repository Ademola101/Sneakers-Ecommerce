import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ItemStyle } from '../Styles/Item.style';
import { useSelector } from 'react-redux';
import NextLeft from './NextLeft';
import NextRight from './RightNext';
import Thumbnail from './Thumbnail';
import Modal from '@mui/material/Modal';
import { useMediaQuery } from '../Hooks';
import { Typography, Box } from '@mui/material';




export default function Item() {
  const [isOpen, setisOpen] = useState(false);
  const isMobbile = useMediaQuery('(min-width: 768px)');
  const products = useSelector(state => state.products);
  const index = useSelector(state => state.index);
  const handleClose = () => {
    setisOpen(false);
  };




  return (<div>
    <ItemStyle>



      <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
        style={{
          outline: '0',
        }}
      >
        <div>


          <img style = {{
            width: '400px',
            marginRight: 'auto',
            marginLeft: 'auto',
            marginTop: '70px',
            display: 'flex',
            outline: '0',
          }} src={products[index]?.img} alt="sneakers" />

          <Thumbnail />
        </div>


      </Modal>
      <AnimatePresence>
        <motion.img className='image' key={index} src={products[index].img} alt={products[index].title}
          onClick={() => { isMobbile && setisOpen(!isOpen);}} />
        <Thumbnail/>

      </AnimatePresence>
    </ItemStyle>
    <NextLeft />
    <NextRight/>

  </div>
  );
}
