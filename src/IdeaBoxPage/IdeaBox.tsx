import React, { useState, useEffect } from 'react';
import { storage } from '../firebase'
import { ref, getDownloadURL, getStream } from "firebase/storage";

const IdeaBox = () => {
    const [backgroundUrl, setBackgroundUrl] = useState('');
  
    /* Get the background */
    useEffect(() => {
      getDownloadURL(ref(storage, 'background/winter.jpg'))
      .then((url) => {
        console.log(url);
        setBackgroundUrl(url);
      })
      .catch(err => console.error(err));
    });

    return (
        <img src={backgroundUrl} />
    )
}

export default IdeaBox;