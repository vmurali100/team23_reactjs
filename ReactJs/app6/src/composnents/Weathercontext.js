import { createContext } from 'react'

const WeatherInfoContext = createContext();

export const WeatherInfoContextProvider = WeatherInfoContext.Provider;
export const WeatherInfoContextConsumer = WeatherInfoContext.Consumer;


