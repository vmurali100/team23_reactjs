import React, { Component } from "react";
import LifeCycleB from "./LifeCycleB";

export default class LifeCycleA extends Component {
  handleIncrement = () => {
    const newState = {...this.state};
    newState.count++
    this.setState(newState);
  };
  render() {
    console.log("Triggering the render - LifeCycleA");
    return (
      <div>
        <h2>Welcome to LifeCycles </h2>
        <button onClick={this.handleIncrement}>Increment</button>
        <LifeCycleB count={this.state.count} />
      </div>
    );
  }

  constructor() {
    super();
    console.log("Triggering the constructor - LifeCycleA");
    this.state = {
      count: 0,
    };
  }

  static getDerivedStateFromProps() {
    console.log("Triggering the getDerivedStateFromProps - LifeCycleA");
    return null;
  }

  componentDidMount() {
    console.log("Triggering the componentDidMount - LifeCycleA");
  }
}
