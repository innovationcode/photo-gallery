import React from 'react'
import useFirestore from '../../hooks/useFirestore.js';
import { motion } from 'framer-motion';

import './ImageDisplay.css';

const ImageDisplay = ({ setSelectedImg }) => {
      const { docs } = useFirestore('images');
      
      return (
            <div className = "img-display">
                  { docs && docs.map(doc => (
                        <motion.div className="img-wrap" key={doc.id} 
                              layout
                              whileHover={{ opacity: 1 }}
                              onClick={() => setSelectedImg({url: doc.url, name: doc.name})}
                        >
                        <motion.img src={doc.url} alt="uploaded pic"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1 }}
                        />
                      </motion.div>
                  ))}
                  
            </div>
      )
}

export default ImageDisplay;