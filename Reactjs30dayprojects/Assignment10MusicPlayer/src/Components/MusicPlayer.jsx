import React, { useState, useRef, useEffect } from 'react';
import '../App.css';

const MusicPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;

    const handleMetadataLoaded = () => {
      if (audio) {
        progressRef.current.max = audio.duration;
      }
    };

    const handleTimeUpdate = () => {
      if (audio) {
        setProgress(audio.currentTime);
      }
    };

    audio.addEventListener('loadedmetadata', handleMetadataLoaded);
    audio.addEventListener('timeupdate', handleTimeUpdate);

    return () => {
      audio.removeEventListener('loadedmetadata', handleMetadataLoaded);
      audio.removeEventListener('timeupdate', handleTimeUpdate);
    };
  }, []);

  const playPause = () => {
    const audio = audioRef.current;

    if (isPlaying) {
      audio.pause();
    } else {
      audio.play();
    }
    
    setIsPlaying(!isPlaying);
  };

  const handleProgressChange = () => {
    const audio = audioRef.current;
    audio.currentTime = progressRef.current.value;
    setProgress(audio.currentTime);
    if (!isPlaying) {
      playPause(); // Start playing if the user changes the progress
    }
  };

  return (
    <div className="container">
      <div className="music-player">
        <nav>
          <div className="circle">
            <i className="fa-solid fa-angle-left"></i>
          </div>
          <div className="circle">
            <i className="fa-solid fa-bars"></i>
          </div>
        </nav>
        <img src="./hamuman.png" className="song-img" alt="Album Art" />
        <h1>Despacito</h1>
        <p>Samskrutha SlokaMusic - Dr.Jayashree AravindSinger - Sriraksha Priyaram.</p>
        <audio ref={audioRef}>
          <source src="./Sri Ramadootha Stotram.mp3" />
        </audio>
        <input
          type="range"
          value={progress}
          onChange={handleProgressChange}
          ref={progressRef}
          id="progress"
        />
        <div className="control">
          <div><i className="fa-solid fa-backward"></i></div>
          <div onClick={playPause}>
            <i className={`fa-solid ${isPlaying ? 'fa-pause' : 'fa-play'}`} id="ctrlIcon"></i>
          </div>
          <div><i className="fa-solid fa-forward"></i></div>
        </div>
      </div>
    </div>
  );
};

export default MusicPlayer;
