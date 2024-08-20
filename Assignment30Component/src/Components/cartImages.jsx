import React, { Component } from 'react';
import styled from 'styled-components';

// Styled components
const Container = styled.div`
  width: 100%;
  min-height: 100vh;
  background: #d0eaff;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Product = styled.div`
  width: 90%;
  max-width: 750px;
  display: flex;
`;

const Gallery = styled.div`
  flex-basis: 47%;
  background: #241e20;
  transform: scale(1.08);
  box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
  position: relative;
`;

const ProductImage = styled.img`
  width: 100%;
  height: auto;
`;

const Controls = styled.div`
  position: absolute;
  bottom: 40px;
  right: 20px;
`;

const Btn = styled.span`
  display: block;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.5);
  margin: 10px;
  cursor: pointer;
  &.active {
    background: #553ff0;
  }
`;

const Details = styled.div`
  flex-basis: 53%;
  background: #fff;
  padding: 40px;
  padding-left: 60px;
  box-shadow: -10px 5px 10px 10px rgba(0, 0, 0, 0.1);
  font-size: 13px;
  font-weight: 500;
  color: #777;

  h1 {
    color: #555;
    font-size: 30px;
  }

  h2 {
    color: #555;
    font-size: 30px;
    font-weight: 600;
  }

  h3 {
    color: #00d874;
  }

  form {
    font-size: 15px;
    font-weight: 400;
  }
`;

const SizeSelect = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  p {
    width: 70px;
  }

  input:checked + span {
    color: blue;
    font-weight: 600;
  }

  input {
    display: none;
  }

  span {
    display: inline-block;
    width: 30px;
    height: 30px;
    border: 1px solid #ddd;
    line-height: 30px;
    text-align: center;
    border-radius: 50%;
    margin-right: 15px;
    cursor: pointer;
  }
`;

const ColorSelect = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  p {
    width: 75px;
  }

  span {
    display: inline-block;
    width: 30px;
    height: 30px;
    border-radius: 50%;
    margin-right: 15px;
    cursor: pointer;
  }

  .color-1 {
    background: red;
  }

  .color-2 {
    background: green;
  }

  .color-3 {
    background: blue;
  }

  .color-4 {
    background: pink;
  }

  input:checked + span {
    transform: scale(0.7);
    box-shadow: 0 0 0 4px #fff, 0 0 0 4px #000;
  }
`;

const QuantitySelect = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;

  p {
    width: 75px;
  }

  input {
    background: #eee;
    border: 0;
    outline: 0;
    padding: 5px 10px;
    width: 50px;
    border-radius: 12px;
  }
`;

const AddToCartButton = styled.button`
  background: #553ff0;
  color: #fff;
  font-size: 17px;
  width: 100%;
  padding: 10px;
  border-radius: 30px;
  border: 0;
  outline: 0;
  margin-top: 50px;
  box-shadow: 0 10px 10px rgba(85, 63, 240, 0.25);
  cursor: pointer;
`;

class ProductPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      imgSrc: "./images/image1.png",
      activeBtn: 0
    };
  }

  handleImageChange = (src, index) => {
    this.setState({
      imgSrc: src,
      activeBtn: index
    });
  };

  render() {
    const { imgSrc, activeBtn } = this.state;

    return (
      <Container>
        <Product>
          <Gallery>
            <ProductImage src={imgSrc} alt="Product Image" />
            <Controls>
              <Btn
                className={activeBtn === 0 ? 'active' : ''}
                onClick={() => this.handleImageChange("./images/image1.png", 0)}
              />
              <Btn
                className={activeBtn === 1 ? 'active' : ''}
                onClick={() => this.handleImageChange("./images/image2.png", 1)}
              />
              <Btn
                className={activeBtn === 2 ? 'active' : ''}
                onClick={() => this.handleImageChange("./images/image3.png", 2)}
              />
            </Controls>
          </Gallery>
          <Details>
            <h1>Casual T-Shirt</h1>
            <h2>$15.00</h2>
            <h3>30% OFF</h3>
            <p>Wrangler is an American manufacturer of jeans and other clothing items.</p>
            <form>
              <SizeSelect>
                <p>Size</p>
                <label htmlFor="small">
                  <input type="radio" name="size" id="small" />
                  <span>S</span>
                </label>
                <label htmlFor="medium">
                  <input type="radio" name="size" id="medium" />
                  <span>M</span>
                </label>
                <label htmlFor="large">
                  <input type="radio" name="size" id="large" />
                  <span>L</span>
                </label>
                <label htmlFor="x-large">
                  <input type="radio" name="size" id="x-large" />
                  <span>XL</span>
                </label>
                <label htmlFor="xx-large">
                  <input type="radio" name="size" id="xx-large" />
                  <span>XXL</span>
                </label>
              </SizeSelect>
              <ColorSelect>
                <p>Color</p>
                <label htmlFor="red">
                  <input type="radio" name="color" id="red" />
                  <span className="color-1"></span>
                </label>
                <label htmlFor="green">
                  <input type="radio" name="color" id="green" />
                  <span className="color-2"></span>
                </label>
                <label htmlFor="blue">
                  <input type="radio" name="color" id="blue" />
                  <span className="color-3"></span>
                </label>
                <label htmlFor="pink">
                  <input type="radio" name="color" id="pink" />
                  <span className="color-4"></span>
                </label>
              </ColorSelect>
              <QuantitySelect>
                <p>Quantity</p>
                <input type="number" value="1" placeholder="0" />
              </QuantitySelect>
              <AddToCartButton type="submit">Add to Cart</AddToCartButton>
            </form>
          </Details>
        </Product>
      </Container>
    );
  }
}

export default ProductPage;
