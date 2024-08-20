import React, { Component } from 'react';
import styled from 'styled-components';
import image_0 from './ScrollingImg/back.png';
import image_1 from './ScrollingImg/image-1.png';
import image_2 from './ScrollingImg/image-2.png';
import image_3 from './ScrollingImg/image-3.png';
import image_4 from './ScrollingImg/image-4.png';
import image_5 from './ScrollingImg/image-5.png';
import image_6 from './ScrollingImg/image-6.png';
import image_7 from './ScrollingImg/next.png';

const GalleryWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10% auto;
  width: 100%; 
`;

const Gallery = styled.div`
  width: 900px;
  display: flex;
  overflow-x: scroll;

  &::-webkit-scrollbar {
    display: none;
  }
`;

const GalleryItem = styled.div`
  width: 100%;
  display: grid;
  grid-template-columns: auto auto auto;
  grid-gap: 20px;
  padding: 10px;
  flex: none;
`;

const GalleryImage = styled.img`
  width: 100%;
  filter: grayscale(100%);
  transition: transform 0.5s;
  
  &:hover {
    filter: grayscale(0);
    cursor: pointer;
    transform: scale(1.1);
  }
`;

const ControlButton = styled.img`
  width: 50px;
  cursor: pointer;
  margin: 40px;
`;

class GalleryComponent extends Component {
  constructor(props) {
    super(props);
    this.scrollContainerRef = React.createRef();
  }

  handleScroll = (direction) => {
    if (this.scrollContainerRef.current) {
      const scrollAmount = 900;
      const newScrollPosition =
        direction === "left"
          ? this.scrollContainerRef.current.scrollLeft - scrollAmount
          : this.scrollContainerRef.current.scrollLeft + scrollAmount;

      this.scrollContainerRef.current.style.scrollBehavior = "smooth";
      this.scrollContainerRef.current.scrollLeft = newScrollPosition;
    }
  };

  handleWheel = (event) => {
    event.preventDefault();
    if (this.scrollContainerRef.current) {
      this.scrollContainerRef.current.scrollLeft += event.deltaY;
      this.scrollContainerRef.current.style.scrollBehavior = "auto";
    }
  };

  render() {
    return (
      <GalleryWrap>
        <ControlButton 
          src={image_0} 
          alt="Back" 
          id="backbtn" 
          onClick={() => this.handleScroll("left")}
        />
        <Gallery onWheel={this.handleWheel} ref={this.scrollContainerRef}>
          <GalleryItem>
            <span><GalleryImage src={image_1} alt="Image 1" /></span>
            <span><GalleryImage src={image_2} alt="Image 2" /></span>
            <span><GalleryImage src={image_3} alt="Image 3" /></span>
          </GalleryItem>
          <GalleryItem>
            <span><GalleryImage src={image_4} alt="Image 4" /></span>
            <span><GalleryImage src={image_5} alt="Image 5" /></span>
            <span><GalleryImage src={image_6} alt="Image 6" /></span>
          </GalleryItem>
        </Gallery>
        <ControlButton 
          src={image_7} 
          alt="Next" 
          id="nextbtn" 
          onClick={() => this.handleScroll("right")} 
        />
      </GalleryWrap>
    );
  }
}

export default GalleryComponent;

