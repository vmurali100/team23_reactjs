import React, { Component} from "react";

export default class LifeCycleA extends Component {
    constructor(){
        super()
        console.log("Triggering the constructor - LifeCycleA");
        this.state = {
            count:0
        };
    }
    static getDerivedStateFromProps() {
        console.log("Triggering the getDerivedStateFromProps - LifeCycleA");
        return null;
    }
    render() {
        console.log("Triggering the render - LifeCycleA")
        return <div>
            <h2>Welcome to LifeCycles </h2>
            <
        </div>;
    }
    componentDidMount(){
        console.log("Triggering the componentDidMount - LifeCycleA")
    }
}