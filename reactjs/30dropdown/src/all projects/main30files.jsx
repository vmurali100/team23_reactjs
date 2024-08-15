import React, { Component } from 'react'
import WeatherApp from './WeatherApp';
import ToDoList from './ToDoList';
import QuizApp from './QuizApp';
import RandomPassword from './RandomPassword';
import NotesApp from './NotesApp';
import AgeCalculator from './AgeCalculator';
import QuoteGenerator from './QuoteGenerator';
import ImageSearchApp from './ImageSearchApp';
import SimpleCalendar from './SimpleCalendar';
import QuoteBox from './QuoteGenerator';
import PasswordGenerator from './RandomPassword';
import NotePad from './NotesApp';
//import TodoApp from '../../../../30assingmnents/src/assingments/secondassingment';

export default class Main extends Component {


    constructor(props) {
        super(props)

        this.state = {

            allprojects: [
                { name: "WeatherApp", value: "WeatherApp" },
                { name: "ToDoList", value: "ToDoList" },
                { name: "QuizApp", value: "QuizApp" },
                { name: "PasswordGenerator", value: "PasswordGenerator" },
                { name: "NotePad ", value: "NotePad" },
                { name: " AgeCalculator", value: "AgeCalculator" },

                { name: "QuoteBox", value: "QuoteBox" },
                { name: "ImageSearchApp", value: "ImageSearchApp" },
                { name: "SimpleCalendar", value: "SimpleCalendar" },


            ],
            seletedproject: "",
        };
    }

    selectedcomponent = () => {
        switch (this.state.seletedproject) {
            case "WeatherApp":
                return <WeatherApp />
            case "ToDoList":
                return <ToDoList />
            case "QuizApp":
                return <QuizApp />
            case "PasswordGenerator":
                return <PasswordGenerator />
            case "NotePad":
                return <NotePad/>

            case "AgeCalculator":
                return <AgeCalculator />
            case "QuoteBox":
                return <QuoteBox />
            case "ImageSearchApp":
                return <ImageSearchApp />
            case "SimpleCalendar":
                return <SimpleCalendar/>


        }
    }
    handleChange = (e) => {
        console.log(e.target.value);
        const newStateObject = { ...this.state };
        newStateObject.seletedproject = e.target.value;
        this.setState(newStateObject);
    };
    render() {
        return (
            <div>
                <form >
                    <b><label style={{fontSize:"20px",color:"red"}}> select project</label></b>
                    <select name="form-select" onChange={this.handleChange}>
                        <option selected style={styles.selectprj} id="selectprj"><select name=" a project" id="">select a prj</select> </option>
                        {this.state.allprojects.map((prj) => (
                            <option value={prj.value}>{prj.name}</option>
                        ))}
                    </select>
                </form>
                {this.selectedcomponent()}


            </div >
        )

    }

}
const styles={
    selectprj: {
        padding : '20px'
    }


}
