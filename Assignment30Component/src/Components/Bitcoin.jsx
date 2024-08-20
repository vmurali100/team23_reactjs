// App.js
import React, { Component } from 'react';
import styled from 'styled-components';
import logo from './BitCoinImg/logo.png';
import bitcoin from './BitCoinImg/bitcoin.png';
import ethereum from './BitCoinImg/ethereum.png';
import dogecoin from './BitCoinImg/dogecoin.png';
import background from './BitCoinImg/background.png';

class Bitcoin extends Component {
  render() {
    return (
      <Container>
        <Nav>
          <Logo src={logo} alt="Logo" />
          <NavList>
            <NavItem><NavLink href="#">Market</NavLink></NavItem>
            <NavItem><NavLink href="#">Features</NavLink></NavItem>
            <NavItem><NavLink href="#">White Paper</NavLink></NavItem>
            <NavItem><NavLink href="#">About Us</NavLink></NavItem>
          </NavList>
          <NavButton href="#">EN</NavButton>
        </Nav>
        <Content>
          <h1>BUY & SELL <span>Crypto</span></h1>
          <p>World's biggest cryptocurrency exchange available on web<br />as well as mobile phone.</p>
          <ContentButton href="#">Explore More</ContentButton>
        </Content>
        <CoinList>
          <Coin>
            <CoinImage src={bitcoin} alt="Bitcoin" />
            <CoinDetails>
              <h3>$00</h3>
              <p>Bitcoin</p>
            </CoinDetails>
          </Coin>
          <Coin>
            <CoinImage src={ethereum} alt="Ethereum" />
            <CoinDetails>
              <h3>$00</h3>
              <p>Ethereum</p>
            </CoinDetails>
          </Coin>
          <Coin>
            <CoinImage src={dogecoin} alt="Dogecoin" />
            <CoinDetails>
              <h3>$00</h3>
              <p>Dogecoin</p>
            </CoinDetails>
          </Coin>
        </CoinList>
      </Container>
    );
  }
}

export default Bitcoin;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  background-image: url(${background});
  background-position: center;
  background-size: cover;
  padding: 0 7%;
  color: #fff;
`;

const Nav = styled.nav`
  width: 100%;
  padding: 20px 0;
  display: flex;
  align-items: center;
`;

const Logo = styled.img`
  width: 50px;
  cursor: pointer;
`;

const NavList = styled.ul`
  flex: 1;
  display: flex;
  justify-content: space-between;
  list-style: none;
`;

const NavItem = styled.li`
  display: inline-block;
  margin: 0 20px;
`;

const NavLink = styled.a`
  color: #fff;
  text-decoration: none;
`;

const NavButton = styled.a`
  color: #fff;
  text-decoration: none;
  border: 1px solid #fff;
  padding: 10px 30px;
  border-radius: 20px;
`;

const Content = styled.div`
  margin-top: 12%;
  text-align: center;

  h1 {
    font-size: 88px;
    margin-bottom: 15px;

    span {
      color: #ff960b;
    }
  }

  p {
    line-height: 22px;
    font-size: 14px;
  }
`;

const ContentButton = styled.a`
  display: inline-block;
  margin-top: 30px;
  background: #ff960b;
  text-decoration: none;
  padding: 15px;
  border-radius: 30px;
  color: #fff;
`;

const CoinList = styled.div`
  position: absolute;
  right: 10%;
  bottom: 50px;
  display: flex;
  align-items: center;
`;

const Coin = styled.div`
  display: flex;
  align-items: center;
  font-size: 14px;
  margin: 0 15px;
  color: #ff960b;
  border: 1px solid #fff;
  padding: 20px 30px;
  border-radius: 8px;
`;

const CoinImage = styled.img`
  width: 40px;
  margin-right: 10px;
`;

const CoinDetails = styled.div`
  h3 {
    color: #fff;
    margin-bottom: 0;
  }
`;
