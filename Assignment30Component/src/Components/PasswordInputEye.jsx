import React, { Component } from 'react';

const styles = {
  body: {
    backgroundColor: '#250057',
    margin: 0,
    padding: 0,
    boxSizing: 'border-box',
    fontFamily: "'Poppins', sans-serif",
  },
  inputBox: {
    backgroundColor: '#fff',
    width: '90%',
    maxWidth: '500px',
    borderRadius: '5px',
    padding: '10px 20px',
    margin: '300px auto',
    display: 'flex',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: '10px 0',
    border: '0',
    outline: '0',
    fontSize: '24px',
    color: '#555',
  },
  eyeIcon: {
    width: '35px',
    cursor: 'pointer',
  },
};

class PasswordInputEye extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isPasswordVisible: false,
    };
    this.handleToggle = this.handleToggle.bind(this);
  }

  handleToggle() {
    this.setState(prevState => ({
      isPasswordVisible: !prevState.isPasswordVisible,
    }));
  }

  render() {
    const { isPasswordVisible } = this.state;
    return (
      <div style={styles.inputBox}>
        <input
          type={isPasswordVisible ? 'text' : 'password'}
          placeholder="Password"
          style={styles.input}
        />
        <img
          src={isPasswordVisible ? './eyeopen.jpg' : './eyeclose.jpg'}
          alt="Toggle Password Visibility"
          onClick={this.handleToggle}
          style={styles.eyeIcon}
        />
      </div>
    );
  }
}

export default PasswordInputEye;
