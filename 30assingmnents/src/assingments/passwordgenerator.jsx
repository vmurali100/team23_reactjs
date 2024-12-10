import React, { useState } from "react";

const PasswordGenerator = () => {
  const [password, setPassword] = useState("");

  const length = 12;
  const uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const lowercase = "abcdefghijklmnopqrstuvwxyz";
  const number = "0123456789";
  const symbol = "!£$%^&*()_+{}~?<>/-=#~";
  const allchr = uppercase + lowercase + number + symbol;

  const createPassword = () => {
    let newPassword = "";
    newPassword += uppercase[Math.floor(Math.random() * uppercase.length)];
    newPassword += lowercase[Math.floor(Math.random() * lowercase.length)];
    newPassword += number[Math.floor(Math.random() * number.length)];
    newPassword += symbol[Math.floor(Math.random() * symbol.length)];

    while (length > newPassword.length) {
      newPassword += allchr[Math.floor(Math.random() * allchr.length)];
    }

    setPassword(newPassword);
  };

  const copyToClipboard = () => {
    navigator.clipboard.writeText(password);
    alert("Password copied to clipboard!");
  };

  return (
    <div className="container">
      <h1>
        Generate a <br /> <span>Random password</span>
      </h1>
      <div className="display">
        <input type="text" value={password} readOnly placeholder="password" />
        <button  onClick={copyToClipboard} alt="Copy"> copy</button> 
      </div>
      <button onClick={createPassword}>
        <img src="./lightning-charge.svg" alt="" /> Generate password
      </button>
    </div>
  );
};

export default PasswordGenerator;
