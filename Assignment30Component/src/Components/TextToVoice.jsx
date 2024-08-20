import React, { Component } from 'react';
import styled from 'styled-components';

const Hero = styled.div`
    width: 100%;
    min-height: 100vh;
    background: linear-gradient(45deg, #010758, #490d61);
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    color: #fff;
`;

const Title = styled.h1`
    font-size: 45px;
    font-weight: 500;
    margin-top: -50px;
    margin-bottom: 50px;
`;

const TextArea = styled.textarea`
    width: 600px;
    height: 250px;
    background: #403d84;
    color: #fff;
    font-size: 15px;
    border: 0;
    outline: 0;
    padding: 20px;
    border-radius: 10px;
    resize: none;
    margin-bottom: 30px;

    &::placeholder {
        font-size: 16px;
        color: #ddd;
    }
`;

const Row = styled.div`
    width: 600px;
    display: flex;
    align-items: center;
    gap: 20px;
`;

const Button = styled.button`
    background: #ff2963;
    color: #fff;
    font-size: 16px;
    padding: 10px 30px;
    border-radius: 35px;
    border: 0;
    outline: 0;
    cursor: pointer;
    display: flex;
    align-items: center;
`;

const Select = styled.select`
    flex: 1;
    color: #fff;
    background: #403d84;
    height: 50px;
    padding: 0 20px;
    outline: 0;
    border: 0;
    border-radius: 35px;
    appearance: none;
    background-image: url('data:image/svg+xml;base64,PHN2ZyB2aWV3Qm94PSIwIDAgMzAgMzAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgZmlsbD0id2hpdGUiPjxnIGZpbGw9Im5vbmUiIHN0cm9rZT0id2hpdGUiIHN0cm9rZS13aWR0aD0iMi41IiBzdHJva2UtbGluZWNhcD0icm91bmQiIHN0cm9rZS1saW5lam9pbj0icm91bmQiPjxwYXRoIGQ9Ik01IDExbDEwIDEwIDEwLTEwIi8+PC9nPjwvc3ZnPg==');
    background-repeat: no-repeat;
    background-position: right 10px center;
`;

class TextToSpeech extends Component {
    constructor(props) {
        super(props);
        this.state = {
            voices: [],
            selectedVoice: 0,
            text: ''
        };
        this.speech = new SpeechSynthesisUtterance();
    }

    componentDidMount() {
        this.updateVoices();
        window.speechSynthesis.onvoiceschanged = this.updateVoices;
    }

    updateVoices = () => {
        const voices = window.speechSynthesis.getVoices();
        this.setState({ voices });
        this.speech.voice = voices[this.state.selectedVoice];
    }

    handleVoiceChange = (event) => {
        const selectedVoice = event.target.value;
        this.setState({ selectedVoice }, () => {
            this.speech.voice = this.state.voices[this.state.selectedVoice];
        });
    }

    handleTextChange = (event) => {
        this.setState({ text: event.target.value });
    }

    handleListenClick = () => {
        this.speech.text = this.state.text;
        window.speechSynthesis.speak(this.speech);
    }

    render() {
        return (
            <Hero>
                <Title>Text to Speech Converter</Title>
                <TextArea
                    placeholder="Write anything here..."
                    value={this.state.text}
                    onChange={this.handleTextChange}
                />
                <Row>
                    <Select onChange={this.handleVoiceChange}>
                        {this.state.voices.map((voice, i) => (
                            <option key={i} value={i}>
                                {voice.name}
                            </option>
                        ))}
                    </Select>
                    <Button onClick={this.handleListenClick}>
                        <img src="./" alt="" style={{ width: '16px', marginRight: '10px' }} />
                        Listen
                    </Button>
                </Row>
            </Hero>
        );
    }
}

export default TextToSpeech;
