import React, { Component } from 'react';
import ToDoList from './Components/ToDoList';
import Quiz_App from './Components/Quiz_App';
import Weather_App from './Components/Weather_App';
import Stopwatch from './Components/StopWatchs';
import Calculator from './Components/Calculater';
import DragAndDrop from './Components/DragAndDrop';
import PasswordStrengthIndicator from './Components/PasswordStranth';
import QuizApp from './Components/Quiz_App';
import CircularProgressBar from './Components/CircularBar';
import WedSiteLunch from './Components/WebsiteLunch';
import DarkTheme from './Components/DarkThime';
import PasswordInputEye from './Components/PasswordInputEye';
import PopupNotification from './Components/PopUpNotification';
import ClockComponent from './Components/DigitalClock';
import ToastNotification from './Components/ToastNatifications';
import AgeCalculator from './Components/AgeCalculater';
import ComingSoon from './Components/launchCountDown';
import TextToSpeech from './Components/TextToVoice';
import PasswordGenerator from './Components/RandomPassword';
import GalleryComponent from './Components/ImageScroll';
import ProductPage from './Components/cartImages';
import Bitcoin from './Components/Bitcoin';
import ImageAnimation from './Components/BackGroundImg';
import ImageSearchEngine from './Components/ImageSearch';
import MiniCalendar from './Components/Calander';
import SelectMenu from './Components/SocialMedia';
import QuoteOfTheDay from './Components/QuateGenerater';
import MusicPlayer from './Components/AudioPlayer';



export default class Projects extends Component {
    constructor(props) {
        super(props);

        this.state = {
            projects: [
                { name: "todo_list", value: "ToDoList" },
                { name: "QuizApp", value: "QuizApp" },
                { name: "weather_app", value: "Weather_App" },
                { name: "stopWatch", value: "Stopwatch" },
                { name: "Calculator", value: "Calculator" },
                { name: "DragAndDrop", value: "DragAndDrop" },
                { name: "PasswordStrengthIndicator", value: "PasswordStrengthIndicator" },
                { name: "CircularProgressBar", value: "CircularProgressBar" },
                { name: "WedSiteLunch", value: "WedSiteLunch" },
                { name: "DarkTheme", value: "DarkTheme" },
                { name: "PasswordInputEye", value: "PasswordInputEye" },
                { name: "PopupNotification", value: "PopupNotification" },
                { name: "ClockComponent", value: "ClockComponent" },
                { name: "ToastNotification", value: "ToastNotification" },
                { name: "AgeCalculator", value: "AgeCalculator" },
                { name: "ComingSoon", value: "ComingSoon" },
                { name: "PasswordGenerator", value: "PasswordGenerator" },
                { name: "TextToSpeech", value: "TextToSpeech" },
                { name: "GalleryComponent", value: "GalleryComponent" },
                { name: "ProductPage", value: "ProductPage" },
                { name: "Bitcoin", value: "Bitcoin" },
                { name: "checkWeather", value: "checkWeather" },
                { name: "ImageAnimation", value: "ImageAnimation" },
                { name: "ImageSearchEngine", value: "ImageSearchEngine" },
                { name: "MiniCalendar", value: "MiniCalendar" },
                { name: "SelectMenu", value: "SelectMenu" },
                { name: "QuoteOfTheDay", value: "QuoteOfTheDay" },
                { name: "MusicPlayer", value: "MusicPlayer" },
            ],
            SelectProject: "ToDoList"
        };
    }

    handleChange = (e) => {
        console.log(e.target.value);
        this.setState({ SelectProject: e.target.value });
    };

    showSelectedComponent = () => {
        switch (this.state.SelectProject) {
            case "ToDoList":
                return <ToDoList />;
            case "QuizApp":
                return <QuizApp />;
            case "Weather_App":
                return <Weather_App />;
            case "Stopwatch":
                return <Stopwatch />;
            case "Calculator":
                return <Calculator />;
            case "DragAndDrop":
                return <DragAndDrop />;
            case "PasswordStrengthIndicator":
                return <PasswordStrengthIndicator />;
            case "CircularProgressBar":
                return <CircularProgressBar />;
            case "WedSiteLunch":
                return <WedSiteLunch />;
            case "DarkTheme":
                return <DarkTheme />;
            case "PasswordInputEye":
                return <PasswordInputEye />;
            case "PopupNotification":
                return <PopupNotification />;
            case "ClockComponent":
                return <ClockComponent />;
            case "ToastNotification":
                return <ToastNotification />;
            case "AgeCalculator":
                return <AgeCalculator />;
            case "ComingSoon":
                return <ComingSoon />;
            case "PasswordGenerator":
                return <PasswordGenerator />;
            case "TextToSpeech":
                return <TextToSpeech />;
            case "GalleryComponent":
                return <GalleryComponent />;
            case "ProductPage":
                return <ProductPage />;
            case "Bitcoin":
                return <Bitcoin />;
            case "checkWeather":
                return <checkWeather />;
            case "ImageAnimation":
                return <ImageAnimation />;
            case "ImageSearchEngine":
                return <ImageSearchEngine />;
            case "MiniCalendar":
                return <MiniCalendar />;
            case "SelectMenu":
                return <SelectMenu />;
            case "QuoteOfTheDay":
                return <QuoteOfTheDay />;
            case "MusicPlayer":
                return <MusicPlayer />;
            default:
                return null;
        }
    };

    render() {
        return (
            <div className="container">
                <form action="">
                    <select className="form-select" onChange={this.handleChange}>
                        <option value="" disabled selected>Select Projects :</option>
                        {this.state.projects.map((prj) => (
                            <option key={prj.name} value={prj.value}>{prj.name}</option>
                        ))}
                    </select>
                </form>
                {this.showSelectedComponent()}
            </div>
        );
    }
}
