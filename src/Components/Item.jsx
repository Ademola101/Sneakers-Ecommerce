import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ItemStyle } from '../Styles/Item.style';
import { useSelector } from 'react-redux';
import NextLeft from './NextLeft';
import NextRight from './RightNext';
import Thumbnail from './Thumbnail';
import Modal from '@mui/material/Modal';
import { useMediaQuery } from '../Hooks';
import { ItemCloseStyle } from '../Styles/ItemClose.style';




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
        <div style = {{
          width: '400px',
          marginRight: 'auto',
          marginLeft: 'auto',
          marginTop: '70px',
          display: 'flex',
          outline: '0',
          flexDirection: 'column'
        }}>

          <ItemCloseStyle>

            <svg onClick={handleClose}  width="14" height="15" xmlns="http://www.w3.org/2000/svg"><path d="m11.596.782 2.122 2.122L9.12 7.499l4.597 4.597-2.122 2.122L7 9.62l-4.595 4.597-2.122-2.122L4.878 7.5.282 2.904 2.404.782l4.595 4.596L11.596.782Z" fill="#a58048" fillRule="evenodd"/></svg>
          </ItemCloseStyle>


          <img style = {{
            borderRadius: '10px',
            boxShadow: '0px 0px 10px 0px rgba(0,0,0,0.75)',
          }}   src={products[index]?.img} alt="sneakers" />

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
    <NextRight  />

  </div>
  );
}
