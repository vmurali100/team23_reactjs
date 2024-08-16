// Clock.js
import React, { Component } from 'react';

const heroStyle = {
    width: '100%',
    minHeight: '100vh',
    background: 'linear-gradient(45deg)',
    color: '#fff',
    position: 'relative',
};

const containerStyle = {
    width: '800px',
    height: '180px',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    position: 'relative',
};

const clockStyle = {
    width: '100%',
    height: '100%',
    background: 'rgba(234, 0, 255, 0.742)',
    borderRadius: '10px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
};

const beforeAfterCommonStyle = {
    content: '""',
    width: '180px',
    borderRadius: '5px',
    position: 'absolute',
    zIndex: -1,
};

const beforeStyle = {
    ...beforeAfterCommonStyle,
    background: '#f41b75',
    left: '-50px',
    top: '-50px',
};

const afterStyle = {
    ...beforeAfterCommonStyle,
    background: '#419aff',
    right: '-30px',
    bottom: '-50px',
};

const timeSpanStyle = {
    fontSize: '80px',
    width: '110px',
    display: 'inline-block',
    textAlign: 'center',
    position: 'relative',
};

const hoursStyle = {
    ...timeSpanStyle,
};

const minutesStyle = {
    ...timeSpanStyle,
};

const secondsStyle = {
    ...timeSpanStyle,
};

const separatorStyle = {
    fontSize: '80px',
    width: '110px',
    display: 'inline-block',
    textAlign: 'center',
    position: 'relative',
};

class ClockComponent extends Component {
    constructor(props) {
        super(props);
        this.state = {
            hours: '00',
            minutes: '00',
            seconds: '00',
        };
    }

    componentDidMount() {
        this.timerID = setInterval(() => this.tick(), 1000);
    }

    componentWillUnmount() {
        clearInterval(this.timerID);
    }

    tick() {
        const now = new Date();
        this.setState({
            hours: now.getHours().toString().padStart(2, '0'),
            minutes: now.getMinutes().toString().padStart(2, '0'),
            seconds: now.getSeconds().toString().padStart(2, '0'),
        });
    }

    render() {
        return (
            <div style={heroStyle}>
                <div style={containerStyle}>
                    <div style={clockStyle}>
                        <div style={hoursStyle}>
                            {this.state.hours}
                            <div style={{ fontSize: '16px', position: 'absolute', bottom: '-5px', left: '50%', transform: 'translateX(-50%)' }}>HOURS</div>
                        </div>
                        <div style={separatorStyle}>:</div>
                        <div style={minutesStyle}>
                            {this.state.minutes}
                            <div style={{ fontSize: '16px', position: 'absolute', bottom: '-5px', left: '50%', transform: 'translateX(-50%)' }}>MINS</div>
                        </div>
                        <div style={separatorStyle}>:</div>
                        <div style={secondsStyle}>
                            {this.state.seconds}
                            <div style={{ fontSize: '16px', position: 'absolute', bottom: '-5px', left: '50%', transform: 'translateX(-50%)' }}>SEC</div>
                        </div>
                    </div>
                    <div style={beforeStyle} />
                    <div style={afterStyle} />
                </div>
            </div>
        );
    }
}

export default ClockComponent;
