import React, { Component } from 'react';
import styled, { keyframes } from 'styled-components';
import { FaCheckCircle, FaTimesCircle, FaExclamationCircle } from 'react-icons/fa';

const slideIn = keyframes`
  100% {
    width: 0;
  }
`;

const Container = styled.div`
  background-color: #f7edff;
  margin: 50px;
`;

const Button = styled.button`
  background: #333;
  color: #fff;
  border: 0;
  outline: none;
  width: 120px;
  height: 40px;
  margin: 5px;
  cursor: pointer;
`;

const ToastBox = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  overflow: hidden;
  padding: 20px;
`;

const Toast = styled.div`
  width: 400px;
  height: 80px;
  background: #fff;
  margin: 15px 0;
  box-shadow: 0 0 20px rgba(0, 0, 0, 0.3);
  display: flex;
  align-items: center;
  position: relative;
  font-weight: 500;

  i {
    margin: 0 20px;
    font-size: 35px;
  }

  &.error {
    i {
      color: red;
    }

    &::after {
      background: red;
    }
  }

  &.invalid {
    i {
      color: orange;
    }

    &::after {
      background: orange;
    }
  }

  &::after {
    content: '';
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 5px;
    background: green;
    animation: ${slideIn} 5s linear forwards;
  }
`;

class ToastNotification extends Component {
  constructor(props) {
    super(props);
    this.state = {
      toasts: []
    };
  }

  showToast = (msg, type) => {
    this.setState(prevState => ({
      toasts: [...prevState.toasts, { msg, type }]
    }), () => {
      setTimeout(() => {
        this.setState(prevState => ({
          toasts: prevState.toasts.slice(1)
        }));
      }, 6000);
    });
  }

  render() {
    const { toasts } = this.state;
    return (
      <Container>
        <Button onClick={() => this.showToast('Successfully submitted', 'success')}>Success</Button>
        <Button onClick={() => this.showToast('Please fix the error!', 'error')}>Error</Button>
        <Button onClick={() => this.showToast('Invalid input, check again', 'invalid')}>Invalid</Button>

        <ToastBox>
          {toasts.map((toast, index) => (
            <Toast key={index} className={toast.type}>
              {toast.type === 'success' && <FaCheckCircle />}
              {toast.type === 'error' && <FaTimesCircle />}
              {toast.type === 'invalid' && <FaExclamationCircle />}
              <span>{toast.msg}</span>
            </Toast>
          ))}
        </ToastBox>
      </Container>
    );
  }
}

export default ToastNotification;
