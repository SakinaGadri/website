import React, { useState, useEffect } from 'react';
import { storage } from '../firebase'
import { ref, getDownloadURL } from "firebase/storage";

const Home = () => {
    const [fallUrl, setFallUrl] = useState('');
  
    useEffect(() => {
      getDownloadURL(ref(storage, 'background/fall.jpg'))
      .then((url) => {
        console.log(url);
        setFallUrl(url);
      });
    })

    return (
        <img src={fallUrl} />
    )
}

export default Home;