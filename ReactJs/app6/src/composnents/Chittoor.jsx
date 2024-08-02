import React from "react";
import { WeatherInfoContextConsumer } from "./Weathercontext";

const Chittoor = () => {
    return (
        <div id="Chittoor">
            <WeatherInfoContextConsumer>
                {(val) => {
                    return (
                        <ul>
                            <li>{val.temp}</li>
                            <li>{val.wind}</li>
                            <li>{val.cold}</li>
                        </ul>
                    );
                }}
            </WeatherInfoContextConsumer>
        </div>
    );
}

export default Chittoor;
