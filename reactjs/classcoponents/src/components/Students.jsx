import { Component } from "react";

export class Student extends Component {


        constructor(){
            super()
            this.state = {
                person: { fname: "vishal", lname: "m.g.", rollno: 32 },
                word: " class component",
                book: ["c", "cpp"]

            }

        }
        render() {
            const {person,word ,book}=this.state
            return <h2>
                { person.fname }<br></br>
                you are in {word}
                
            </h2>
        }}

