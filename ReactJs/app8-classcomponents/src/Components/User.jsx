import { Component } from "react";

export class User extends Component{
    constructor(){
        super()
        this.state={
            fname:"K Jeswanth..!!",
            email:""
        }
    }

    handleChange=(e)=>{
        const newState = {...this.state}
        newState[e.target.name] = e.target.value;
        this.setState(newState);
    }
    render(){
        return (
            <div>
                <h2>Welcome to User Component..!!</h2>
                <input type="text" name="email" value={this.state.email} onChange={this.handleChange}/>
            </div>
        );
    }
}