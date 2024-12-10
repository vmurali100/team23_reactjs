import React, { Component } from "react";
import AgeCalculator from "./Components/AgeCalculator";
import Gallery from "./Components/Gallery";
import QuizApp from "./Components/QuizApp";
import QuoteGenerator from "./Components/QuoteGenerator";
import RandomPassword from "./Components/RandomPassword";
import ToDoList from "./Components/ToDoList";
import WeatherApp from "./Components/WeatherApp";

export default class Projects extends Component {
  constructor(props) {
    super(props);

    this.state = {
      projects: [
        { name: "Weather App", value: "WeatherApp" },
        { name: "To-Do List", value: "ToDoList" },
        { name: "Quiz App", value: "QuizApp" },
        { name: "Random Password", value: "RandomPassword" },
        { name: "Gallery", value: "Gallery" },
        { name: "Age Calculator", value: "AgeCalculator" },
        { name: "Quote Generator ", value: "QuoteGenerator" },
      ],
      selectedProject: "ToDoList",
    };
  }
  handleChange = (e) => {
    console.log(e.target.value);
    const newStateObject = { ...this.state };
    newStateObject.selectedProject = e.target.value;
    this.setState(newStateObject);
  };

  showSelectedComponent = () => {
    switch (this.state.selectedProject) {
      case "ToDoList":
        return <ToDoList />;
      case "WeatherApp":
        return <WeatherApp />;
      case "QuizApp":
        return <QuizApp />;
      case "RandomPassword":
        return <RandomPassword />;
      case "Gallery":
        return <Gallery />;
      case "AgeCalculator":
        return <AgeCalculator />;
      case "QuoteGenerator":
        return <QuoteGenerator />;
    }
    // if (this.state.selectedProject === "ToDoList") {
    //   return <ToDoList />;
    // }
    // if (this.state.selectedProject === "WeatherApp") {
    //   return <WeatherApp />;
    // }
    // if (this.state.selectedProject === "QuizApp") {
    //   return <QuizApp />;
    // }
    // if (this.state.selectedProject === "RandomPassword") {
    //   return <RandomPassword />;
    // }
  };
  render() {
    return (
      <div className="container">
        <form action="">
          <select class="form-select" onChange={this.handleChange}>
            <option selected>Select a Project</option>
            {this.state.projects.map((prj) => (
              <option value={prj.value}>{prj.name}</option>
            ))}
          </select>
        </form>
        {this.showSelectedComponent()}
        {/* <ToDoList/>
        <WeatherApp/>
        <RandomPassword/>
        <QuizApp/> */}
        {/* <Gallery/> */}
      </div>
    );
  }
}
