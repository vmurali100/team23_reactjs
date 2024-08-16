import React, { Component } from 'react';
import start_icon from './start.png';
import reset_icon from './reset.png';
import stop_icon from './stop.png';

class Stopwatch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      time: { hours: 0, minutes: 0, seconds: 0 },
      timer: null,
    };
  }

  componentWillUnmount() {
    if (this.state.timer) clearInterval(this.state.timer);
  }

  formatTime = (value) => (value < 10 ? `0${value}` : value);

  startWatch = () => {
    if (this.state.timer !== null) clearInterval(this.state.timer);
    this.setState({ timer: setInterval(this.updateTime, 1000) });
  };

  stopWatch = () => {
    if (this.state.timer !== null) clearInterval(this.state.timer);
    this.setState({ timer: null });
  };

  resetWatch = () => {
    if (this.state.timer !== null) clearInterval(this.state.timer);
    this.setState({
      time: { hours: 0, minutes: 0, seconds: 0 },
      timer: null,
    });
  };

  updateTime = () => {
    this.setState((prevState) => {
      let { hours, minutes, seconds } = prevState.time;
      seconds++;
      if (seconds === 60) {
        seconds = 0;
        minutes++;
        if (minutes === 60) {
          minutes = 0;
          hours++;
        }
      }
      return { time: { hours, minutes, seconds } };
    });
  };

  render() {
    const { hours, minutes, seconds } = this.state.time;

    return (
      <div className="stopWatch">
        <h1 id="displayTime">
          {this.formatTime(hours)}:{this.formatTime(minutes)}:{this.formatTime(seconds)}
        </h1>
        <div className="buttons">
          <img src={stop_icon} alt="Stop" onClick={this.stopWatch} />
          <img src={start_icon} alt="Start" onClick={this.startWatch} />
          <img src={reset_icon} alt="Reset" onClick={this.resetWatch} />
        </div>
      </div>
    );
  }
}

export default Stopwatch;
