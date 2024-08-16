import React, { Component } from 'react';
import styled from 'styled-components';


const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(135deg, #4203a9, #90bafc);
  color: #fff;
  padding: 10px;
`;

const Calculator = styled.div`
  width: 100%;
  max-width: 600px;
  margin-left: 10%;
  margin-top: 10%;
`;

const Title = styled.h1`
  font-size: 60px;
`;

const Span = styled.span`
  color: #ffff76;
`;

const InputBox = styled.div`
  margin: 40px 0;
  padding: 35px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.3);
  display: flex;
  align-items: center;
`;

const Input = styled.input`
  flex: 1;
  margin-right: 20px;
  padding: 14px 20px;
  border: 0;
  outline: 0;
  font-size: 18px;
  border-radius: 5px;
  position: relative;

  &::-webkit-calendar-picker-indicator {
    position: absolute;
    right: 10px;
    top: 50%;
    transform: translateY(-50%);
    width: 30px;
    height: 30px;
    cursor: pointer;
  }
`;

const Button = styled.button`
  background: #ffff76;
  border: 0;
  outline: 0;
  padding: 15px 30px;
  border-radius: 5px;
  font-weight: 500;
  color: #333;
  cursor: pointer;
`;

const Result = styled.p`
  font-size: 20px;

  span {
    color: #ffff76;
  }
`;

class AgeCalculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      birthDate: '',
      result: ''
    };
    this.userInput = React.createRef();
  }

  componentDidMount() {
    const today = new Date().toISOString().split('T')[0];
    this.userInput.current.max = today;
  }

  calculateAge = () => {
    const { value } = this.userInput.current;
    const birthDate = new Date(value);
    const today = new Date();

    const d1 = birthDate.getDate();
    const m1 = birthDate.getMonth() + 1;
    const y1 = birthDate.getFullYear();

    const d2 = today.getDate();
    const m2 = today.getMonth() + 1;
    const y2 = today.getFullYear();

    let d3, m3, y3;

    y3 = y2 - y1;

    if (m2 >= m1) {
      m3 = m2 - m1;
    } else {
      y3--;
      m3 = 12 + m2 - m1;
    }
    if (d2 >= d1) {
      d3 = d2 - d1;
    } else {
      m3--;
      d3 = this.getDaysInMonth(y1, m1) + d2 - d1;
    }
    if (m3 < 0) {
      m3 = 11;
      y3--;
    }
    this.setState({
      result: `You are ${y3} years, ${m3} months, and ${d3} days old`
    });
  }

  getDaysInMonth = (year, month) => {
    return new Date(year, month, 0).getDate();
  }

  render() {
    return (
      <Container>
        <Calculator>
          <Title>JavaScript <br /><Span>Age Calculator</Span></Title>
          <InputBox>
            <Input
              type="date"
              ref={this.userInput}
            />
            <Button onClick={this.calculateAge}>Calculate</Button>
          </InputBox>
          <Result>{this.state.result}</Result>
        </Calculator>
      </Container>
    );
  }
}

export default AgeCalculator;
