import React, { useState } from 'react';


const PasswordStrengthIndicator = () => {
    const [password, setPassword] = useState('');
    const [strength, setStrength] = useState('');
    const [borderColor, setBorderColor] = useState('#ccc');
    const [messageColor, setMessageColor] = useState('#fff');

    const handlePasswordChange = (e) => {
        const pass = e.target.value;
        setPassword(pass);

        if (pass.length > 0) {
            if (pass.length < 4) {
                setStrength('weak');
                setBorderColor('#ff5925');
                setMessageColor('#ff5925');
            } else if (pass.length >= 4 && pass.length < 8) {
                setStrength('medium');
                setBorderColor('yellow');
                setMessageColor('yellow');
            } else if (pass.length >= 8) {
                setStrength('strong');
                setBorderColor('#26d720');
                setMessageColor('#26d720');
            }
        } else {
            setStrength('');
            setBorderColor('#ccc');
            setMessageColor('#fff');
        }
    };

    return (
        <div className="container">
            <div className="input-box">
                <input
                    type="password"
                    value={password}
                    onChange={handlePasswordChange}
                    placeholder="Password"
                    style={{ borderColor }}
                />
                <button type="submit">
                    <img src="./arrow.png" alt="Submit" />
                </button>
                {password.length > 0 && (
                    <p id="message" style={{ color: messageColor }}>
                        Password is <span id="strength">{strength}</span>
                    </p>
                )}
            </div>
        </div>
    );
};

export default PasswordStrengthIndicator;
