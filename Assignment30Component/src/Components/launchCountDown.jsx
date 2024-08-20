import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import logo from './LaunchImages/logo.png';
import background from './LaunchImages/background.png';
import triangle from './LaunchImages/triangle.png'
import rocket from './LaunchImages/rocket.png'

const rocketAnimation = keyframes`
  0% {
    bottom: 0;
    opacity: 0;
  }
  100% {
    bottom: 105%;
    opacity: 1;
  }
`;

const Container = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  padding: 0 8px;
  position: relative;
`;

const Logo = styled.img`
  width: 120px;
  padding: 20px 0;
`;

const Content = styled.div`
  top: 50%;
  left: 50%;
  position: absolute;
  transform: translate(-50%, -50%);
  color: #fff;
  text-align: center;
`;

const Heading = styled.h1`
  color: #ff3753;
`;

const Button = styled.button`
  background: transparent;
  border: 2px solid #fff;
  outline: none;
  padding: 12px 25px;
  color: #fff;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const ButtonImage = styled.img`
  margin-left: 10px;
`;

const LaunchTime = styled.div`
  font-size: 60px;
  display: flex;
  justify-content: space-around;
  margin: 20px 0;
`;

const TimeSection = styled.div`
  text-align: center;
`;

const TimeValue = styled.p`
  margin: 0;
  font-size: 60px;
`;

const TimeLabel = styled.span`
  font-size: 20px;
`;

const Rocket = styled.img`
  width: 250px;
  position: absolute;
  right: 10%;
  bottom: 0;
  animation: ${rocketAnimation} 4s linear infinite;
`;

class ComingSoon extends Component {
  constructor(props) {
    super(props);
    this.state = {
      days: '00',
      hours: '00',
      mins: '00',
      sec: '00'
    };
  }

  componentDidMount() {
    const countDownDate = new Date("Oct 17, 2024 00:00:00").getTime();
    this.interval = setInterval(() => {
      const now = new Date().getTime();
      const distance = countDownDate - now;

      const days = Math.floor(distance / (1000 * 60 * 60 * 24));
      const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
      const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
      const seconds = Math.floor((distance % (1000 * 60)) / 1000);

      if (distance < 0) {
        clearInterval(this.interval);
        this.setState({
          days: '00',
          hours: '00',
          mins: '00',
          sec: '00'
        });
      } else {
        this.setState({
          days: days < 10 ? '0' + days : days,
          hours: hours < 10 ? '0' + hours : hours,
          mins: minutes < 10 ? '0' + minutes : minutes,
          sec: seconds < 10 ? '0' + seconds : seconds
        });
      }
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.interval);
  }

  render() {
    return (
      <Container>
        <Logo src={logo} alt="Logo" />
        <Content>
          <p>Website is under Maintenance</p>
          <Heading>We are Launching Soon</Heading>
          <LaunchTime>
            <TimeSection>
              <TimeValue>{this.state.days}</TimeValue>
              <TimeLabel>Days</TimeLabel>
            </TimeSection>
            <TimeSection>
              <TimeValue>{this.state.hours}</TimeValue>
              <TimeLabel>Hours</TimeLabel>
            </TimeSection>
            <TimeSection>
              <TimeValue>{this.state.mins}</TimeValue>
              <TimeLabel>Minutes</TimeLabel>
            </TimeSection>
            <TimeSection>
              <TimeValue>{this.state.sec}</TimeValue>
              <TimeLabel>Seconds</TimeLabel>
            </TimeSection>
          </LaunchTime>
          <Button>
            Learn More <ButtonImage src={triangle} alt="Triangle Icon" />
          </Button>
        </Content>
        <Rocket src={rocket} alt="Rocket" />
      </Container>
    );
  }
}

export default ComingSoon;
