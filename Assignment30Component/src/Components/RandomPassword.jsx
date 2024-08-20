import React, { Component } from 'react';
import styled from 'styled-components';

// Define the styled components
const Container = styled.div`
  margin: 12%;
  width: 90%;
  max-width: 700px;
`;

const Display = styled.div`
  width: 100%;
  margin-top: 50px;
  margin-bottom: 30px;
  background: #fff;
  color: #333;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 26px 20px;
  border-radius: 5px;
`;

const Button = styled.button`
  border: 0;
  background: #019f55;
  color: #fff;
  font-size: 22px;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 16px 26px;
  border-radius: 5px;
  cursor: pointer;
`;

const PasswordInput = styled.input`
  border: 0;
  outline: 0;
  font-size: 24px;
`;

const Img = styled.img`
  width: 30px;
  cursor: pointer;
`;

const Heading = styled.h1`
  font-weight: 500;
  font-size: 45px;

  span {
    color: #019f55;
    border-bottom: 4px solid #019f55;
    padding-bottom: 7px;
  }
`;

class PasswordGenerator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      password: ''
    };
  }

  length = 12;
  upperCase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  lowerCase = "abcdefghijklmnopqrstuvwxyz";
  numbers = "1234567890";
  symbols = "!@#$%^&*()_+{}:\"<>?-=[];',./";

  createPassword = () => {
    let password = "";
    password += this.upperCase.charAt(Math.floor(Math.random() * this.upperCase.length));
    password += this.lowerCase.charAt(Math.floor(Math.random() * this.lowerCase.length));
    password += this.numbers.charAt(Math.floor(Math.random() * this.numbers.length));
    password += this.symbols.charAt(Math.floor(Math.random() * this.symbols.length));

    while (this.length > password.length) {
      const randomType = Math.floor(Math.random() * 4);
      switch (randomType) {
        case 0:
          password += this.upperCase.charAt(Math.floor(Math.random() * this.upperCase.length));
          break;
        case 1:
          password += this.lowerCase.charAt(Math.floor(Math.random() * this.lowerCase.length));
          break;
        case 2:
          password += this.numbers.charAt(Math.floor(Math.random() * this.numbers.length));
          break;
        case 3:
          password += this.symbols.charAt(Math.floor(Math.random() * this.symbols.length));
          break;
        default:
          break;
      }
    }

    this.setState({ password });
  }

  copyPassword = () => {
    navigator.clipboard.writeText(this.state.password).then(() => {
      alert('Password copied to clipboard!');
    });
  }

  render() {
    return (
      <Container>
        <Heading>
          Generate a <br />
          <span>Random Password</span>
        </Heading>
        <Display>
          <PasswordInput
            type="text"
            value={this.state.password}
            readOnly
            placeholder="Password"
          />
          <Img
            src="https://via.placeholder.com/30" // Use a placeholder image URL
            alt="Copy Password"
            onClick={this.copyPassword}
          />
        </Display>
        <Button onClick={this.createPassword}>Generate Password</Button>
      </Container>
    );
  }
}

export default PasswordGenerator;
