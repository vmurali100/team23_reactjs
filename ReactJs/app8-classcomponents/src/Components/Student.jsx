import { Component } from "react";

export class Student extends Component {
    constructor() {
        super();
        this.state = {
            myName: "Kotholla Jeswanth",
            person: {
                fname: "Kotholla",
                lname: "Jachu"
            },
            users: ["Jeswanth","Vishal","Sekhar","Nethaji"]
        }
    }
    render() {
        const {myName, person, users} = this.state;
        return <div>
            {/* <h2>{this.state.person.fname}</h2>
            <ul>
                <li>{this.state.person.fname}</li>
                <li>{this.state.person.lname}</li>
            </ul>
            <ul>
                {this.state.users.map(function(usr){
                    return <li>{usr}</li>
                })}
            </ul> */}

            <h2>{myName}</h2>
            <ul>
                <li>{person.fname}</li>
                <li>{person.lname}</li>
            </ul>

            <ul>
                {users.map(function(usr){
                    return <li>{usr}</li>
                })}
            </ul>
        </div>

    }
}