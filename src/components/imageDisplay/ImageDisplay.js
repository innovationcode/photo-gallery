import React from 'react'
import useFirestore from '../../hooks/useFirestore.js';

import './ImageDisplay.css';

const ImageDisplay = () => {
      const { docs } = useFirestore('images');
      
      return (
            <div className = "img-display">
                  { docs && docs.map(doc => (
                        <div className = "img-wrap" key = {doc.id}>
                              <img src = {doc.url} alt = "uploaded pic" />
                        </div>
                  ))}
                  
            </div>
      )
}

export default ImageDisplay;
