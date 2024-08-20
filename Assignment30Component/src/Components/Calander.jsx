import React, { Component } from 'react';
import styled from 'styled-components';

class MiniCalendar extends Component {
  constructor(props) {
    super(props);
    this.state = {
      date: '',
      day: '',
      month: '',
      year: ''
    };
  }

  componentDidMount() {
    const today = new Date();
    
    const weekDays = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
    
    this.setState({
      date: (today.getDate() < 10 ? "0" : "") + today.getDate(),
      day: weekDays[today.getDay()],
      month: months[today.getMonth()],
      year: today.getUTCFullYear()
    });
  }

  render() {
    return (
      <Hero>
        <Calendar>
          <Left>
            <DateText>{this.state.date}</DateText>
          </Left>
          <Left>
            <p id="day">{this.state.day}</p>
          </Left>
          <Right>
            <p id="month">{this.state.month}</p>
          </Right>
          <Right>
            <p id="year">{this.state.year}</p>
          </Right>
        </Calendar>
      </Hero>
    );
  }
}

const Hero = styled.div`
  width: 100%;
  min-height: 100vh;
  background: linear-gradient(45deg, #1d0000, #20205d);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Calendar = styled.div`
  width: 300px;
  height: 250px;
  background: #fff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  border-radius: 10px;
`;

const Left = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin: 10px 0;
`;

const Right = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;
  margin: 10px 0;
  background: #f4351e;
  color: #fff;
  border-top-left-radius: 10px;
  border-bottom-right-radius: 10px;
`;

const DateText = styled.p`
  font-size: 100px;
  line-height: 90px;
  margin: 0;
  color: #000; /* Ensures the date text is visible */
`;

export default MiniCalendar;
