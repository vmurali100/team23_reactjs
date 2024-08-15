import React, { useState, useRef, useEffect } from "react";
import "./468-thumbnail.png"


function MusicPlayer() {
  const [isPlaying, setIsPlaying] = useState(false);
  const [progress, setProgress] = useState(0);
  const audioRef = useRef(null);
  const progressRef = useRef(null);

  useEffect(() => {
    const audio = audioRef.current;
    const updateProgress = () => setProgress(audio.currentTime);

    if (audio) {
      audio.addEventListener("timeupdate", updateProgress);
      return () => {
        audio.removeEventListener("timeupdate", updateProgress);
      };
    }
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

  const handleProgressChange = (e) => {
    const audio = audioRef.current;
    audio.currentTime = e.target.value;
    if (!isPlaying) {
      playPause();
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
        <img src="./468-thumbnail.png" alt="Song Thumbnail" className="song-img" />
        <h1>Despacito</h1>
        <p>Telugu  song is playing </p>
        <audio ref={audioRef} id="song">
          <source src="./song2.mp3" type="audio/mp3" />
        </audio>
        <input
          type="range"
          value={progress}
          max={audioRef.current?.duration || 0}
          onChange={handleProgressChange}
          ref={progressRef}
          id="progress"
        />
        <div className="control">
          <div><i className="fa-solid fa-backward"></i></div>
          <div onClick={playPause}>
            <i className={`fa-solid ${isPlaying ? "fa-pause" : "fa-play"}`} id="ctrlIcon"></i>
          </div>
          <div><i className="fa-solid fa-forward"></i></div>
        </div>
      </div>
    </div>
  );
}

export default MusicPlayer;
