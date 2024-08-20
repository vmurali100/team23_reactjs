import React, { Component } from 'react';
import styled from 'styled-components';
import facebookIcon from './SelectMenu_Img/facebook.png';
import youtubeIcon from './SelectMenu_Img/youtube.png';
import instagramIcon from './SelectMenu_Img/instagram.png';
import pinterestIcon from './SelectMenu_Img/pinterest.png';
import arrowIcon from './SelectMenu_Img/arrow.png';

const Hero = styled.div`
  width: 100%;
  height: 100vh;
  background-image: linear-gradient(#f44336, #730228);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Selector = styled.div`
  width: 350px;
`;

const SelectField = styled.div`
  width: 100%;
  padding: 15px;
  margin-bottom: 15px;
  box-sizing: border-box;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 6px;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const ArrowIcon = styled.img`
  width: 12px;
  transition: transform 0.5s;
  transform: ${props => (props.rotate ? 'rotate(180deg)' : 'rotate(0deg)')};
`;

const List = styled.ul`
  width: 100%;
  background: rgba(255, 255, 255, 0.7);
  border-radius: 6px;
  overflow: hidden;
  visibility: ${props => (props.hide ? 'hidden' : 'visible')};
  list-style: none;
  padding: 0;
  margin: 0;
  position: absolute;
  top: 60px;
  z-index: 1;
`;

const Option = styled.li`
  width: 100%;
  padding: 15px;
  cursor: pointer;
  box-sizing: border-box;
  position: relative;
  display: flex;
  align-items: center;

  &:hover {
    background: rgba(255, 255, 255, 0.7);
  }
`;

const OptionIcon = styled.img`
  width: 25px;
  position: absolute;
  top: 12px;
  left: 25px;
`;

const OptionText = styled.p`
  margin-left: 50px;
`;

class SelectMenu extends Component {
  state = {
    isOpen: false,
    selected: 'Select Social Media'
  };

  toggleList = () => {
    this.setState(prevState => ({
      isOpen: !prevState.isOpen
    }));
  };

  selectOption = (option) => {
    this.setState({
      selected: option,
      isOpen: false
    });
  };

  render() {
    const { isOpen, selected } = this.state;

    return (
      <Hero>
        <Selector>
          <SelectField onClick={this.toggleList}>
            <span>{selected}</span>
            <ArrowIcon src={arrowIcon} rotate={isOpen} />
          </SelectField>
          <List hide={!isOpen}>
            <Option onClick={() => this.selectOption('Facebook')}>
              <OptionIcon src={facebookIcon} />
              <OptionText>Facebook</OptionText>
            </Option>
            <Option onClick={() => this.selectOption('Youtube')}>
              <OptionIcon src={youtubeIcon} />
              <OptionText>Youtube</OptionText>
            </Option>
            <Option onClick={() => this.selectOption('Instagram')}>
              <OptionIcon src={instagramIcon} />
              <OptionText>Instagram</OptionText>
            </Option>
            <Option onClick={() => this.selectOption('Pinterest')}>
              <OptionIcon src={pinterestIcon} />
              <OptionText>Pinterest</OptionText>
            </Option>
          </List>
        </Selector>
      </Hero>
    );
  }
}

export default SelectMenu;
