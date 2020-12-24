import React, { useState } from 'react';
import Title from './components/Title.js';
import UploadForm from './components/uploadForm/UploadForm.js';
import ImageDisplay from './components/imageDisplay/ImageDisplay.js';
import Modal from './components/modal/Model.js'

import './App.css';

function App() {
  const [selectedImg, setSelectedImg] = useState(null);

  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageDisplay setSelectedImg={setSelectedImg} />
      { selectedImg && (
        <Modal selectedImg={selectedImg} setSelectedImg={setSelectedImg} />
      )}
    </div>
  );
}

export default App;
