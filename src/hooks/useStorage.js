import { useState, useEffect } from 'react';
import { projectStorage, projectFirestore, timestamp } from '../firebase/firebase.js';

const useStorage = (file) => {
  //console.log("file in useStorage.....", file)
  const [progress, setProgress] = useState(0);
  const [error, setError] = useState(null);
  const [url, setUrl] = useState(null);
  
  useEffect(() => {
    // references
    const storageRef = projectStorage.ref(file.name);
    const collectionRef = projectFirestore.collection('images');
    let likes = 0
    let name = file.name;
    name = name.split(".")[0]
    name = name.charAt(0).toUpperCase()+ name.slice(1);
    console.log("name in use storage hpok   ",name)
    
    storageRef.put(file).on('state_changed', (snap) => {
      let percentage = (snap.bytesTransferred / snap.totalBytes) * 100;
      setProgress(percentage);
    }, (err) => {
      setError(err);
    }, async () => {
      const url = await storageRef.getDownloadURL();
      const createdAt = timestamp();
      await collectionRef.add({ url, createdAt, name, likes});
      setUrl(url);
    });
  }, [file]);


  return { progress, url, error };
}

export default useStorage;