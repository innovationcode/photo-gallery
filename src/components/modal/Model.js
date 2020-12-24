import React from 'react';
import { motion } from 'framer-motion';

import './Model.css'

const Modal = ({ setSelectedImg, image, name }) => {
      console.log("selectedImg  :  ", name)

  const handleClick = (e) => {
    if (e.target.classList.contains('backdrop')) {
      setSelectedImg(null);
    }
  }

  return (
    <motion.div className="backdrop" onClick={handleClick}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
    >
      <motion.img src={image} alt="enlarged pic" 
        initial={{ y: "-100vh" }}
        animate={{ y: 0 }}
      />

      <h2>{name} </h2>
    </motion.div>
  )
}

export default Modal;