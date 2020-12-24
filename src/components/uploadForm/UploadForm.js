import React, { useState } from 'react';
import ProgressBar from '../../components/progressBar/ProgressBar.js'
import './UploadForm.css';

const UploadForm = () => {
      const [file, setFile] = useState(null);
      const [error, setError] = useState(null);

      const types = ["image/png", "image/jpg", "image/jpeg"]

      const changeHandler = (e) => {
            let selected = e.target.files[0];
            console.log(selected)
            if(selected && types.includes(selected.type)) {
                  setFile(selected);
                  setError('')
            } else {
                  setFile(null)
                  setError('Please select an image of type -- ')
            }
      }

      return (
            <form>
                  <label>
                        <input type="file" onChange={changeHandler} />
                        <span>Select image to upload</span>
                  </label>

                  <div className = "output">
                        {error && <div className = "error"> {error} </div>}
                        {file && <div> {file.name} </div>}
                        {file && <ProgressBar file = {file} setFile = {setFile} />}
                  </div>
            </form>
      )
}

export default UploadForm;
