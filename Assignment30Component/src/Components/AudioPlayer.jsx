import React, { Component } from 'react';
import Hanuman from "./hamuman.png"
import Song from "./Sri Ramadootha Stotram.mp3"

const styles = {
  container: {
    width: '100%',
    height: '100vh',
    background: '#333',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    flexWrap: 'wrap',
  },
  musicPlayer: {
    background: '#ffe0e5',
    width: '400px',
    padding: '25px 35px',
    textAlign: 'center',
  },
  nav: {
    display: 'flex',
    justifyContent: 'space-between',
    marginBottom: '30px',
  },
  circle: {
    borderRadius: '50%',
    width: '40px',
    height: '40px',
    lineHeight: '40px',
    background: '#fff',
    color: 'rgba(255, 26, 26, 0.22)',
    textAlign: 'center',
  },
  songImg: {
    width: '220px',
    borderRadius: '50%',
    border: '8px solid #fff',
    boxShadow: '0 10px 60px rgba(255, 26, 26, 0.22)',
  },
  progress: {
    WebkitAppearance: 'none',
    width: '100%',
    height: '6px',
    background: '#f53192',
    borderRadius: '4px',
    cursor: 'pointer',
    margin: '40px 0',
  },
  progressThumb: {
    WebkitAppearance: 'none',
    background: '#f53192',
    width: '30px',
    height: '30px',
    borderRadius: '50%',
    border: '8px solid #fff',
    boxShadow: '0 5px 5px rgba(255, 26, 26, 0.22)',
  },
  control: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  controlButton: {
    width: '60px',
    height: '60px',
    margin: '20px',
    background: '#fff',
    display: 'inline-flex',
    alignItems: 'center',
    borderRadius: '50%',
    color: '#f53192',
    boxShadow: '0 10px 20px rgba(255, 26, 26, 0.22)',
    cursor: 'pointer',
    justifyContent: 'center',
    fontSize: '24px',
  },
  controlButtonActive: {
    transform: 'scale(1.5)',
    background: '#f53192',
    color: '#fff',
  },
  songInfo: {
    fontSize: '14px',
    color: '#333',
  }
};

class MusicPlayer extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPlaying: false,
    };
    this.progressRef = React.createRef();
    this.songRef = React.createRef();
    this.ctrlIconRef = React.createRef();
  }

  componentDidMount() {
    this.songRef.current.onloadedmetadata = () => {
      this.progressRef.current.max = this.songRef.current.duration;
      this.progressRef.current.value = this.songRef.current.currentTime;
    };

    this.interval = setInterval(() => {
      if (this.state.isPlaying) {
        this.progressRef.current.value = this.songRef.current.currentTime;
      }
    }, 500);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  playPause = () => {
    if (this.state.isPlaying) {
      this.songRef.current.pause();
      this.setState({ isPlaying: false });
      this.ctrlIconRef.current.classList.remove('fa-pause');
      this.ctrlIconRef.current.classList.add('fa-play');
    } else {
      this.songRef.current.play();
      this.setState({ isPlaying: true });
      this.ctrlIconRef.current.classList.add('fa-pause');
      this.ctrlIconRef.current.classList.remove('fa-play');
    }
  };

  handleProgressChange = () => {
    this.songRef.current.currentTime = this.progressRef.current.value;
    if (!this.state.isPlaying) {
      this.songRef.current.play();
      this.setState({ isPlaying: true });
      this.ctrlIconRef.current.classList.add('fa-pause');
      this.ctrlIconRef.current.classList.remove('fa-play');
    }
  };

  render() {
    return (
      <div style={styles.container}>
        <div style={styles.musicPlayer}>
          <nav style={styles.nav}>
            <div style={styles.circle}>
              <i className="fa-solid fa-angle-left"></i>
            </div>
            <div style={styles.circle}>
              <i className="fa-solid fa-bars"></i>
            </div>
          </nav>
          <img src={Hanuman} alt="Song" style={styles.songImg} />
          <h1>Despacito</h1>
          <p style={styles.songInfo}>
            Samskrutha Sloka Music - Dr.Jayashree Aravind Singer - Sriraksha Priyaram.
          </p>
          <audio ref={this.songRef}>
            <source src={Song} />
          </audio>
          <input
            type="range"
            ref={this.progressRef}
            style={styles.progress}
            onChange={this.handleProgressChange}
          />
          <div style={styles.control}>
            <div style={styles.controlButton}>
              <i className="fa-solid fa-backward"></i>
            </div>
            <div
              style={{ ...styles.controlButton, ...styles.controlButtonActive }}
              onClick={this.playPause}
            >
              <i
                ref={this.ctrlIconRef}
                className="fa-solid fa-play"
              ></i>
            </div>
            <div style={styles.controlButton}>
              <i className="fa-solid fa-forward"></i>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default MusicPlayer;
