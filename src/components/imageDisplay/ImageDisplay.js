import React from 'react'
import useFirestore from '../../hooks/useFirestore.js';
import { motion } from 'framer-motion';
import FavoriteBorderIcon from '@material-ui/icons/FavoriteBorder';

import './ImageDisplay.css';
import { projectFirestore } from '../../firebase/firebase.js';

const ImageDisplay = ({ setSelectedImg }) => {
      const { docs } = useFirestore('images');
      // console.log("DOCS... : ", docs)

      const handleLikes = async (likes,  id ) => {
             
            likes = ++likes;
            const objectToUpdate = projectFirestore.collection('images').doc(id);
            await  objectToUpdate.update( {likes:likes} ) 
          //  await projectFirestore.collection('images').where('name' , '==' ,'Mango').onSnapshot(snap => { console.log(snap.doc)})//.where('name', '==', 'Banana').get().then((snapshot) => console.log(snapshot.doc))
            // console.log(imageref)
      }

      return (
            <div className = "img-display">
                  { docs && docs.map(doc => (
                        <>
                        <motion.div className="img-wrap" key={doc.id} 
                              layout
                              whileHover={{ opacity: 1 }}
                        >
                        
                        <motion.img src={doc.url} key={doc.id}  alt="uploaded pic"
                              initial={{ opacity: 0 }}
                              animate={{ opacity: 1 }}
                              transition={{ delay: 1 }}
                              onClick={() => setSelectedImg({url: doc.url, name: doc.name})}

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
                                                     handleLikes(doc.likes, doc.id  )
                                                      
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
