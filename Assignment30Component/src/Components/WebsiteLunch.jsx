import React, { Component } from 'react';
import sendIcon from './send-icon.png'; 
import background from './background.png'; 

const styles = {
  hero: {
    width: '100%',
    height: '100vh',
    backgroundImage: `linear-gradient(rgba(0,0,0,0.8), rgba(0,0,0,0.8)), url(${background})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    padding: '10px 10px',
    color: '#fff',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    textAlign: 'center'
  },
  heading3: {
    marginTop: '30px',
    fontWeight: 400,
    fontSize: '30px'
  },
  heading1: {
    marginTop: '30px',
    fontSize: '50px'
  },
  paragraph: {
    margin: '10px 0 50px',
    fontSize: '20px'
  },
  form: {
    display: 'flex'
  },
  input: {
    border: '0',
    outline: 'none',
    padding: '10px 20px',
    height: '70px',
    width: '300px',
    fontSize: '16px',
    borderRadius: '5px 0 0 5px'
  },
  button: {
    background: '#61b752',
    border: 'none',
    outline: 'none',
    height: '70px',
    width: '70px',
    cursor: 'pointer',
    borderRadius: '0 5px 5px 0',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  buttonImage: {
    width: '30px'
  },
  message: {
    color: '#61b752',
    marginTop: '10px',
    display: 'block'
  }
};

class WedSiteLunch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleSubmit(event) {
    event.preventDefault();

    const form = event.target;
    const scriptURL = 'https://script.google.com/macros/s/AKfycbwfXRPRujAL_y6Yeipk6GAjHBhB251RBzlUnPul6DucboWZ6lG2_HEEiX2dHse3R7jdig/exec';

    fetch(scriptURL, {
      method: 'POST',
      body: new FormData(form)
    })
      .then(response => {
        this.setState({ message: 'Thank you for subscribing!' });
        setTimeout(() => {
          this.setState({ message: '' });
        }, 5000);
        form.reset();
      })
      .catch(error => console.error('Error!', error.message));
  }

  render() {
    return (
      <div style={styles.hero}>
        <h3 style={styles.heading3}>Coming Soon!</h3>
        <h1 style={styles.heading1}>OurBrand New <br /> Website is on its Way</h1>
        <p style={styles.paragraph}>Subscribe for more details.</p>
        <form name="submit-to-google-sheet" onSubmit={this.handleSubmit} style={styles.form}>
          <input type="email" name="Email" placeholder="Your email Id" required style={styles.input} />
          <button type="submit" style={styles.button}>
            <img src={sendIcon} alt="Send Icon" style={styles.buttonImage} />
          </button>
        </form>
        <span style={styles.message}>{this.state.message}</span>
      </div>
    );
  }
}

export default WedSiteLunch;
