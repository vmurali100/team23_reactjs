import React, { useState } from 'react';


const PassWordValidation = () => {
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  
  const [nameError, setNameError] = useState('');
  const [phoneError, setPhoneError] = useState('');
  const [emailError, setEmailError] = useState('');
  const [messageError, setMessageError] = useState('');
  const [submitError, setSubmitError] = useState('');

  const validateName = () => {
    if (name.length === 0) {
      setNameError('Name is required');
      return false;
    }
    if (!name.match(/^[A-Za-z]*\s{1}[A-Za-z]*$/)) {
      setNameError('Write full name');
      return false;
    }
    setNameError('');
    return true;
  };

  const validatePhone = () => {
    if (phone.length === 0) {
      setPhoneError('Phone No is required');
      return false;
    }
    if (phone.length !== 10) {
      setPhoneError('Phone no should be 10 digits');
      return false;
    }
    if (!phone.match(/^[0-9]{10}$/)) {
      setPhoneError('Only digits please.');
      return false;
    }
    setPhoneError('');
    return true;
  };

  const validateEmail = () => {
    if (email.length === 0) {
      setEmailError('Email is required');
      return false;
    }
    if (!email.match(/^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Za-z]{2,}$/)) {
      setEmailError('Email id is Invalid');
      return false;
    }
    setEmailError('');
    return true;
  };

  const validateMessage = () => {
    const required = 30;
    const left = required - message.length;
    if (left > 0) {
      setMessageError(`${left} more characters required`);
      return false;
    }
    setMessageError('');
    return true;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validateName() && validatePhone() && validateEmail() && validateMessage()) {
      setSubmitError('');
      // Form submission logic here
      alert('Form submitted successfully!');
    } else {
      setSubmitError('Please fix errors to submit');
      setTimeout(() => setSubmitError(''), 3000);
    }
  };

  return (
    <div className="container">
      <form onSubmit={handleSubmit}>
        <i className="fas fa-paper-plane"></i>

        <div className="input-group">
          <label>Full Name</label>
          <input
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e) => setName(e.target.value)}
            onBlur={validateName}
          />
          <span>{nameError}</span>
        </div>

        <div className="input-group">
          <label>Phone No.</label>
          <input
            type="tel"
            placeholder="123 456 7890"
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
            onBlur={validatePhone}
          />
          <span>{phoneError}</span>
        </div>

        <div className="input-group">
          <label>Email Id</label>
          <input
            type="email"
            placeholder="Enter Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            onBlur={validateEmail}
          />
          <span>{emailError}</span>
        </div>

        <div className="input-group">
          <label>Your Message</label>
          <textarea
            rows="5"
            placeholder="Enter your message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            onBlur={validateMessage}
          ></textarea>
          <span>{messageError}</span>
        </div>

        <button type="submit">Submit</button>
        <span id="submit-error">{submitError}</span>
      </form>
    </div>
  );
};

export default PassWordValidation;
