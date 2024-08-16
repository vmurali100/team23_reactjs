import React, { Component } from 'react';

class PasswordStrengthIndicator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: '',
      strength: '',
      borderColor: '#ccc',
      color: '#fff'
    };
  }

  handleChange = (event) => {
    const password = event.target.value;
    let strength = '';
    let borderColor = '#ccc';
    let color = '#fff';

    if (password.length > 0) {
      if (password.length < 4) {
        strength = 'weak';
        borderColor = '#ff5925';
        color = '#ff5925';
      } else if (password.length >= 4 && password.length < 8) {
        strength = 'medium';
        borderColor = 'yellow';
        color = 'yellow';
      } else if (password.length >= 8) {
        strength = 'strong';
        borderColor = '#26d720';
        color = '#26d720';
      }
    }

    this.setState({ password, strength, borderColor, color });
  };

  render() {
    const { strength, borderColor, color } = this.state;

    return (
      <div style={styles.container}>
        <div style={styles.inputBox}>
          <input
            type="password"
            placeholder="Password"
            style={{ ...styles.input, borderColor }}
            onChange={this.handleChange}
          />
          <button style={styles.button} type="submit">
            <img src="./arrow.png" alt="Submit" style={styles.buttonImg} />
          </button>
          {this.state.password && (
            <p style={{ ...styles.message, color }}>
              Password is <span>{strength}</span>
            </p>
          )}
        </div>
      </div>
    );
  }
}

const styles = {
  container: {
    height: '100vh',
    width: '100%',
    background: '#201f21',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  inputBox: {
    width: '400px',
    maxWidth: '90%',
    position: 'relative',
  },
  input: {
    width: '100%',
    height: '60px',
    padding: '0 20px',
    border: '1px solid #ccc',
    outline: 'none',
    color: '#fff',
    background: 'transparent',
  },
  button: {
    background: 'transparent',
    border: 0,
    outline: 'none',
    borderRadius: '50%',
    cursor: 'pointer',
    position: 'absolute',
    top: '50%',
    transform: 'translateY(-50%)',
    right: '15px',
  },
  buttonImg: {
    width: '35px',
  },
  message: {
    position: 'absolute',
    bottom: '-30px',
    fontSize: '15px',
  }
};

export default PasswordStrengthIndicator;
