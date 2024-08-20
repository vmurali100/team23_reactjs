import React, { useState } from 'react';

const PasswordHide = () => {
    const [isPasswordVisible, setIsPasswordVisible] = useState(false);

    const togglePasswordVisibility = () => {
        setIsPasswordVisible(prevState => !prevState);
    };

    return (
        <div className="Input-box">
            <input
                type={isPasswordVisible ? "text" : "password"}
                placeholder="Password"
                id="password"
            />
            <img
                src={isPasswordVisible ? "./eyeopen.jpg" : "./eyeclose.jpg"}
                alt="Toggle Password Visibility"
                id="eyeicon"
                onClick={togglePasswordVisibility}
            />
        </div>
    );
};

export default PasswordHide;
