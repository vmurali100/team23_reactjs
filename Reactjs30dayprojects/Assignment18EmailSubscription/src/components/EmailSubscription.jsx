
import React, { useState } from 'react';
import background from './background.png'


const EmailSubscription = () => {
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();

    const scriptURL = 'https://script.google.com/macros/s/AKfycbwfXRPRujAL_y6Yeipk6GAjHBhB251RBzlUnPul6DucboWZ6lG2_HEEiX2dHse3R7jdig/exec';

    try {
      const response = await fetch(scriptURL, {
        method: 'POST',
        body: new FormData(e.target),
      });

      if (response.ok) {
        setMessage('Thank you for subscribing!');
        setEmail('');
        setTimeout(() => {
          setMessage('');
        }, 5000);
      } else {
        throw new Error('Failed to submit');
      }
    } catch (error) {
      console.error('Error!', error.message);
    }
  };

  return (
    <div className="hero">
      <h3>Coming Soon!</h3>
      <h1>OurBrand New <br /> Website is on its Way</h1>
      <p>Subscribe for more details.</p>
      <form name="submit-to-google-sheet" onSubmit={handleSubmit}>
        <input
          type="email"
          name="Email"
          placeholder="Your email Id"
          required
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit">
          <img src="./send-icon.png" alt="Send Icon" />
        </button>
      </form>
      <span id="msg">{message}</span>
    </div>
  );
};

export default EmailSubscription;
