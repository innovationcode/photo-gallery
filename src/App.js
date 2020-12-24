import React from 'react';
import Title from './components/Title.js';
import UploadForm from './components/uploadForm/UploadForm.js';

import './App.css';
import ImageDisplay from './components/imageDisplay/ImageDisplay.js';

function App() {
  return (
    <div className="App">
      <Title />
      <UploadForm />
      <ImageDisplay />
    </div>
  );
}

export default App;
