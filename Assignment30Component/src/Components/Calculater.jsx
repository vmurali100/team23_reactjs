import React, { Component } from 'react';

class Calculator extends Component {
  constructor(props) {
    super(props);
    this.state = {
      display: ''
    };
  }

  handleClick = (value) => {
    const { display } = this.state;

    if (value === 'AC') {
      this.setState({ display: '' });
    } else if (value === 'DC') {
      this.setState({ display: display.slice(0, -1) });
    } else if (value === '=') {
      try {
        this.setState({ display: eval(display).toString() });
      } catch {
        this.setState({ display: 'Error' });
      }
    } else {
      this.setState({ display: display + value });
    }
  };

  render() {
    return (
      <div className="container">
        <div className="calculator">
          <div className="display">
            <input
              type="text"
              value={this.state.display}
              placeholder="0"
              readOnly
            />
          </div>
          <div>
            <input
              type="button"
              value="AC"
              onClick={() => this.handleClick('AC')}
              className="operater"
            />
            <input
              type="button"
              value="DC"
              onClick={() => this.handleClick('DC')}
              className="operater"
            />
            <input
              type="button"
              value="."
              onClick={() => this.handleClick('.')}
              className="operater"
            />
            <input
              type="button"
              value="/"
              onClick={() => this.handleClick('/')}
              className="operater"
            />
          </div>
          <div>
            <input
              type="button"
              value="7"
              onClick={() => this.handleClick('7')}
            />
            <input
              type="button"
              value="8"
              onClick={() => this.handleClick('8')}
            />
            <input
              type="button"
              value="9"
              onClick={() => this.handleClick('9')}
            />
            <input
              type="button"
              value="*"
              onClick={() => this.handleClick('*')}
              className="operater"
            />
          </div>
          <div>
            <input
              type="button"
              value="4"
              onClick={() => this.handleClick('4')}
            />
            <input
              type="button"
              value="5"
              onClick={() => this.handleClick('5')}
            />
            <input
              type="button"
              value="6"
              onClick={() => this.handleClick('6')}
            />
            <input
              type="button"
              value="-"
              onClick={() => this.handleClick('-')}
              className="operater"
            />
          </div>
          <div>
            <input
              type="button"
              value="1"
              onClick={() => this.handleClick('1')}
            />
            <input
              type="button"
              value="2"
              onClick={() => this.handleClick('2')}
            />
            <input
              type="button"
              value="3"
              onClick={() => this.handleClick('3')}
            />
            <input
              type="button"
              value="+"
              onClick={() => this.handleClick('+')}
              className="operater"
            />
          </div>
          <div>
            <input
              type="button"
              value="00"
              onClick={() => this.handleClick('00')}
            />
            <input
              type="button"
              value="0"
              onClick={() => this.handleClick('0')}
            />
            <input
              type="button"
              value="="
              onClick={() => this.handleClick('=')}
              className="equal operater"
            />
          </div>
        </div>
      </div>
    );
  }
}

export default Calculator;
