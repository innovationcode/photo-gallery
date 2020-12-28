import React from 'react'
import useFirestore from '../../hooks/useFirestore.js';
import { motion } from 'framer-motion';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import './ImageDisplay.css';

const ImageDisplay = ({ setSelectedImg }) => {
      const { docs } = useFirestore('images');
      console.log("DOCS... : ", docs)

      return (
            <div className = "img-display">
                  { docs && docs.map(doc => (
                        <>
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
                        <div style = {{display: 'flex', 
                                       justifyContent:'flex-start',
                                       position: 'relative', 
                                       zIndex: '1', 
                                       marginLeft: '20px', 
                                       marginTop:'340px'}}>
                        <FavoriteBorderIcon style={{ fontSize: 40, 
                                                     cursor:'pointer' }}
                                            onClick={() => {
                                                      ++doc.likes;
                                                      
                                                    }}
                        />
                        <p style = {{fontSize: '20px', padding :'8px'}}>{doc.likes}</p>
                        </div>

                        </motion.div>
                      </>
                  ))}
                  
            </div>
      )
}

export default ImageDisplay;
