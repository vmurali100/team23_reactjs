import React, { Component } from "react";
import MyImageComp from "./MyImageComp";

export default class LifeCycleB extends Component {
  constructor() {
    super();
    console.log("Triggering constructor in - LifeCycleB");
    this.state = {};
  }

  static getDerivedStateFromProps() {
    console.log("Triggering getDerivedStateFromProps in - LifeCycleB");
    return null;
  }

  shouldComponentUpdate(){
    console.log("Triggering shouldComponentUpdate in - LifeCycleB");
    return true;
  }
  getSnapshotBeforeUpdate(){
    console.log("Triggering getSnapshotBeforeUpdate in - LifeCycleB");
    return null
  }
  componentDidUpdate(){
    console.log("Triggering componentDidUpdate in - LifeCycleB");

  }
  render() {
    return <div>
        <h2>{this.props.count}</h2>
        {this.props.count < 5 && <MyImageComp/>}
    </div>;
  }
}
