import React, { Component } from 'react';

class CircularProgressBar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      counter: 0
    };
  }

  componentDidMount() {
    this.interval = setInterval(() => {
      if (this.state.counter >= 65) {
        clearInterval(this.interval);
      } else {
        this.setState(prevState => ({ counter: prevState.counter + 1 }));
      }
    }, 30);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    const { counter } = this.state;
    const percentage = `${counter}%`;

    return (
      <div style={styles.skill}>
        <div style={styles.outer}>
          <div style={styles.inner}>
            <div style={styles.number}>{percentage}</div>
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  skill: {
    width: '160px',
    height: '160px',
    position: 'relative'
  },
  outer: {
    height: '160px',
    width: '160px',
    borderRadius: '50%',
    background: 'conic-gradient(#7d2ae8 0%, #7d2ae8 65%, #ededed 65%)',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: '6px 6px 10px -1px rgba(0, 0, 0, 0.15), 6px 6px 10px -1px rgba(0, 0, 0, 0.15)'
  },
  inner: {
    height: '120px',
    width: '120px',
    borderRadius: '50%',
    background: '#e3edf7',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    boxShadow: 'inset 4px 4px 6px -1px rgba(0, 0, 0, 0.2), inset -4px -4px 6px -1px rgba(255, 255, 255, 0.7), -0.5px -0.5px 0px rgba(255, 255, 255, 1), 0.5px 0.5px 0px rgba(255, 255, 255, 1), 0px 12px 10px -10px rgba(0, 0, 0, 0.15), 0px 12px 10px rgba(0, 0, 0, 0.05)'
  },
  number: {
    fontWeight: 600
  }
};

export default CircularProgressBar;
