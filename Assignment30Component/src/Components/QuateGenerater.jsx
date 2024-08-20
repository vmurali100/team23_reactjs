import React, { Component } from 'react';
import styled from 'styled-components';

const QuoteBox = styled.div`
  background: #fff;
  width: 700px;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 40px;
  border-radius: 10px;
  text-align: center;
  box-shadow: 0 10px 20px 0px rgba(0, 0, 0, 0.15);
`;

const Heading = styled.h2`
  font-size: 32px;
  margin-bottom: 40px;
  position: relative;

  &::after {
    content: '';
    width: 75px;
    height: 3px;
    border-radius: 3px;
    background: rgb(23, 124, 229);
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
  }
`;

const Blockquote = styled.blockquote`
  min-height: 110px;
  font-size: 26px;

  &::before, &::after {
    content: '"';
  }
`;

const Author = styled.span`
  display: block;
  margin-top: 10px;
  float: right;
  position: relative;

  &::before {
    content: "";
    width: 20px;
    height: 2px;
    background: rgb(23, 124, 229);
    position: absolute;
    top: 50%;
    left: -30px;
  }
`;

const ButtonContainer = styled.div`
  width: 100%;
  margin-top: 50px;
  display: flex;
  justify-content: center;
`;

const Button = styled.button`
  background: rgb(23, 124, 229);
  color: #fff;
  border-radius: 25px;
  border: 1px solid rgb(23, 124, 229);
  width: 150px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 5px;
  cursor: pointer;

  & img {
    width: 20px;
    margin-right: 10px;
  }

  &:nth-child(2) {
    background: transparent;
    color: #333;
  }
`;

class QuoteOfTheDay extends Component {
  state = {
    quote: 'Loading....',
    author: 'Loading...',
  };

  api_url = 'https://api.quotable.io/random';

  componentDidMount() {
    this.getQuote();
  }

  getQuote = async () => {
    const response = await fetch(this.api_url);
    const data = await response.json();
    this.setState({
      quote: data.content,
      author: data.author,
    });
  };

  tweet = () => {
    const { quote, author } = this.state;
    window.open(
      `https://twitter.com/intent/tweet?text=${quote} ----- by ${author}`,
      'Tweet window',
      'width=600, height=300'
    );
  };

  render() {
    const { quote, author } = this.state;

    return (
      <QuoteBox>
        <Heading>Quote of the day</Heading>
        <Blockquote>{quote}</Blockquote>
        <Author>{author}</Author>
        <ButtonContainer>
          <Button onClick={this.getQuote}>New Quote</Button>
          <Button onClick={this.tweet}>
            <img src="https://abs.twimg.com/favicons/twitter.2x.png" alt="Twitter icon" /> Tweet
          </Button>
        </ButtonContainer>
      </QuoteBox>
    );
  }
}

export default QuoteOfTheDay;
