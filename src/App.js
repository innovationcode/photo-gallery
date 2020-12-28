import React, { useState } from 'react';
import Title from './components/Title.js';
import UploadForm from './components/uploadForm/UploadForm.js';
import ImageDisplay from './components/imageDisplay/ImageDisplay.js';
import Modal from './components/modal/Model.js'

import './App.css';

function App() {
  const [selectedImg, setSelectedImg] = useState({url: null, name: null});
  console.log("APP.js  : ", selectedImg)

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageDisplay setSelectedImg={setSelectedImg}/>
      { selectedImg && (
        <Modal image={selectedImg.url} name={selectedImg.name} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
