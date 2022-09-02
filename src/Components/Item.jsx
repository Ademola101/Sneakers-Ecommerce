import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ItemStyle } from '../Styles/Item.style';
import { useSelector } from 'react-redux';
import NextLeft from './NextLeft';
import NextRight from './RightNext';
import Thumbnail from './Thumbnail';
import Modal from './Modal';
import { useMediaQuery } from '../Hooks';



export default function Item() {
  const [isOpen, setisOpen] = useState(false);
  const isMobbile = useMediaQuery('(min-width: 768px)');
  const products = useSelector(state => state.products);
  const index = useSelector(state => state.index);
  const handleClose = () => {
    setisOpen(false);
  };




  return (<>
    <ItemStyle>
      <AnimatePresence>
        <div onClick={() => {

          isMobbile && setisOpen(true);}
        } >
          <motion.img className='image'  src={products.find(
            product => product.id === index+1)?.img} alt="sneakers" initial={{ opacity: 0, y: 0 }
          }
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          key =  {products.find(
            product => product.id === index+1)?.img}/>
        </div>
        <Thumbnail />
      </AnimatePresence>
    </ItemStyle>
    <NextLeft />
    <NextRight/>

    <Modal isOpen={isOpen} handleClose = {handleClose}/>
  </>
  );
}
