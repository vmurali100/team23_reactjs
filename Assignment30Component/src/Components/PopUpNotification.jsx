import React, { Component } from 'react';

// Define styles as JavaScript objects
const styles = {
  container: {
    width: '100%',
    height: '100vh',
    background: '#3c5077',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  button: {
    padding: '10px 60px',
    background: '#fff',
    border: '0',
    outline: 'none',
    cursor: 'pointer',
    fontSize: '22px',
    fontWeight: '500',
    borderRadius: '30px',
  },
  popup: (open) => ({
    width: '400px',
    background: '#fff',
    borderRadius: '6px',
    position: 'absolute',
    top: '0',
    left: '50%',
    transform: `translate(-50%, -50%) scale(${open ? 1 : 0.1})`,
    textAlign: 'center',
    padding: '0 30px 30px',
    color: '#333',
    visibility: open ? 'visible' : 'hidden',
    transition: 'transform 0.4s, top 0.4s',
  }),
  popupImage: {
    width: '100px',
    marginTop: '-50px',
    borderRadius: '50%',
    boxShadow: '0 2px 5px rgba(0, 0, 0, 0.2)',
  },
  popupTitle: {
    fontSize: '38px',
    fontWeight: '500',
    margin: '30px 0 10px',
  },
  popupButton: {
    width: '100%',
    marginTop: '50px',
    padding: '10px 0',
    background: '#6fd649',
    color: '#fff',
    border: '0',
    outline: 'none',
    fontSize: '18px',
    borderRadius: '4px',
    cursor: 'pointer',
    boxShadow: '0 5px 5px rgba(0, 0, 0, 0.2)',
  },
};

class PopupNotification extends Component {
  state = {
    popupOpen: false,
  };

  openPopup = () => {
    this.setState({ popupOpen: true });
  };

  closePopup = () => {
    this.setState({ popupOpen: false });
  };

  render() {
    const { popupOpen } = this.state;

    return (
      <div style={styles.container}>
        <button style={styles.button} type="button" onClick={this.openPopup}>
          Submit
        </button>
        <div style={styles.popup(popupOpen)}>
          <img
            src="./9872e5fc-a04a-4d8e-b1ea-15cf99bc62f2.jpg"
            alt=""
            style={styles.popupImage}
          />
          <h2 style={styles.popupTitle}>Thank you</h2>
          <p>Your details have been successfully submitted. Thanks!</p>
          <button style={styles.popupButton} type="button" onClick={this.closePopup}>
            OK
          </button>
        </div>
      </div>
    );
  }
}

export default PopupNotification;
