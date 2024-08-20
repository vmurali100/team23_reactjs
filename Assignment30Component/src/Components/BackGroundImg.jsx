import React, { Component } from 'react';
import styled from 'styled-components';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    align-items: center;
    justify-content: center;
    background: #f3fbff;
`;

const ImageBox = styled.div`
    width: 60%;
    margin: auto;
    line-height: 0;
    background-image: url('./background_change_img/background.png');
    overflow: hidden;
    position: relative;
`;

const ImgDrop = styled.div`
    position: absolute;
    left: 0;
    top: 0;
    overflow: hidden;
    height: 100%;
`;

const Line = styled.span`
    width: 1px;
    height: 100%;
    cursor: ew-resize;
    background: #fff;
    position: absolute;
    left: 0;
    top: 0;
`;

const Arrow = styled.img`
    width: 40px;
    position: absolute;
    top: 50%;
    margin-left: -20px;
    margin-top: -20px;
`;

class ImageAnimation extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageBoxWidth: 0,
            leftSpace: 0,
            lineLeft: 0,
            imgDropWidth: 0,
        };
    }

    componentDidMount() {
        const imageBox = this.imageBoxRef.getBoundingClientRect();
        this.setState({
            imageBoxWidth: imageBox.width,
            leftSpace: imageBox.left,
        });
    }

    handleMouseMove = (e) => {
        const { leftSpace, imageBoxWidth } = this.state;
        const boxWidth = e.pageX - leftSpace;
        if (boxWidth >= 0 && boxWidth <= imageBoxWidth) {
            this.setState({
                imgDropWidth: boxWidth,
                lineLeft: boxWidth,
            });
        }
    };

    render() {
        const { imgDropWidth, lineLeft } = this.state;

        return (
            <Container>
                <ImageBox
                    ref={(ref) => { this.imageBoxRef = ref; }}
                    onMouseMove={this.handleMouseMove}
                >
                    <ImgDrop style={{ width: imgDropWidth }}>
                        <img src="./background_change_img/original.jpg" alt="Original Image" style={{ width: '100%' }} />
                    </ImgDrop>
                    <Line style={{ left: lineLeft }}>
                        <Arrow src="./background_change_img/arrow.png" alt="Arrow" />
                    </Line>
                    <img src="./background_change_img/transparent.png" alt="" width="100%" />
                </ImageBox>
            </Container>
        );
    }
}

export default ImageAnimation;
