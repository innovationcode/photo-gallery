import React, { useEffect } from 'react';
import useStorage from '../../hooks/useStorage.js';

import './ProgressBar.css';

const ProgressBar = ({ file, setFile }) => {
      //console.log("In ProgressBar............", file, setFile)
      
      const { url, progress } = useStorage(file)
      console.log(url, " --- ", progress)

      useEffect(() => {
            if(url) {
                  setFile(null);
            }
      }, [url, setFile])

      return (
            <div className = 'progress-bar'
                 style = {{width: progress + '%'}}
            > </div>
      )
}

export default ProgressBar;
