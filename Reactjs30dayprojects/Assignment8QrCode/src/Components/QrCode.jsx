import React, { useState } from 'react';

const QRCodeGenerator = () => {
  const [qrText, setQrText] = useState('');
  const [imgSrc, setImgSrc] = useState('');
  const [error, setError] = useState(false);

  const generateQR = () => {
    if (qrText.length > 0) {
      setImgSrc(`https://api.qrserver.com/v1/create-qr-code/?size=150x150&data=${qrText}`);
      setError(false);
    } else {
      setError(true);
      setTimeout(() => {
        setError(false);
      }, 1000);
    }
  };

  return (
    <div style={styles.container}>
      <p style={styles.paragraph}>Enter your text or URL</p>
      <input
        type="text"
        placeholder=" Text or URL"
        value={qrText}
        onChange={(e) => setQrText(e.target.value)}
        style={{ ...styles.input, ...(error ? styles.error : {}) }}
      />
      <div style={{ ...styles.imgBox, ...(imgSrc ? styles.showImg : {}) }}>
        <img src={imgSrc} alt="QR Code" style={styles.qrImage} />
      </div>
      <button onClick={generateQR} style={styles.button}>Generate QR Code</button>
    </div>
  );
};

const styles = {
  container: {
    width: '400px',
    padding: '25px 35px',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    background: '#fff',
    borderRadius: '10px',
    position: 'absolute',
  },
  paragraph: {
    fontWeight: 600,
    fontSize: '15px',
    marginBottom: '8px',
  },
  input: {
    width: '100%',
    height: '50px',
    border: '1px solid #494eca',
    outline: 0,
    padding: '10px',
    margin: '10px 0 20px',
    borderRadius: '5px',
    transition: 'border-color 0.1s',
  },
  button: {
    width: '100%',
    height: '50px',
    background: '#494eea',
    color: '#fff',
    border: 0,
    outline: 0,
    borderRadius: '5px',
    boxShadow: '0 10px 10px rgba(0, 0, 0, 0.1)',
  },
  imgBox: {
    width: '200px',
    borderRadius: '5px',
    maxHeight: '0',
    overflow: 'hidden',
    transition: 'max-height 1s',
  },
  showImg: {
    maxHeight: '300px',
    margin: '10px auto',
    border: '1px solid #d1d1d1',
  },
  qrImage: {
    width: '100%',
    padding: '10px',
  },
  error: {
    animation: 'shake 0.1s linear 10',
    borderColor: 'red',
  },
};



export default QRCodeGenerator;