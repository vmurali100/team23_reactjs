import { Component } from "react";

export class Student extends Component {
  constructor() {
    super();
    this.state = {
      myName: "Murali Krishna",
      person: {
        fname: "Ram",
        lname: "Krishna",
      },
      users: ["Kiran", "Kumar", "Ravi", "SAM"],
    };
  }
  render() {
    const { myName, person, users } = this.state;
    return (
      <div>
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
    );
  }
}

// function Student(){
// const [myName,setMyName] = useState("Murali")// useState Hook
//     return <h2>Welcome Student Comp</h2>
// }
