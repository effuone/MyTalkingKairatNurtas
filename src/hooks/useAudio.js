import React from "react";
import { useState, useEffect } from "react";
const useAudio = url => {
    const [audio, setAudio] = useState(new Audio(url));
    const [playing, setPlaying] = useState(false);
  
    const toggle = () => setPlaying(!playing);
    
    useEffect(() => {
        if(playing)
        {
            audio.play()
            console.log(audio.src)
        }
        else
        {
            audio.pause()
        }
        // playing ? audio.play() : audio.pause();
      },
      [playing]
    );
  
    useEffect(() => {
      audio.addEventListener('ended', () => setPlaying(false));
      return () => {
        audio.removeEventListener('ended', () => setPlaying(false));
      };
    }, []);
  
    return [playing, setPlaying, toggle, setAudio];
  };
export default useAudio