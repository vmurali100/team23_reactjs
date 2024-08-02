import React, { useState } from "react";
import { WeatherInfoContextProvider } from "./Weathercontext";
import World from "./World";

const Main1 = () => {
    const [weather, setWeather] = useState({
        temp: "20c",
        wind: "15 km/h",
        cold: "24c"
    });

    return (
        <div id="Main1Comp">
            <WeatherInfoContextProvider value={weather}>
                <World />
            </WeatherInfoContextProvider>
        </div>
    );
}

export default Main1;
