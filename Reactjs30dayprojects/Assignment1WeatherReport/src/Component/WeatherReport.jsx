import React, { useState } from 'react';

const WeatherApp = () => {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState(false);

  const apikey = "f5f027d9f3c5eda1dc124481ac92faee";
  const apiurl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

  const checkWeather = async () => {
    try {
      const response = await fetch(apiurl + city + `&appid=${apikey}`);
      if (response.status === 404) {
        setError(true);
        setWeatherData(null);
      } else {
        const data = await response.json();
        setWeatherData({
          name: data.name,
          temp: Math.round(data.main.temp),
          humidity: data.main.humidity,
          wind: data.wind.speed,
          main: data.weather[0].main,
        });
        setError(false);
      }
    } catch (error) {
      console.error("Error fetching weather data:", error);
      setError(true);
    }
  };

  const handleSearch = () => {
    checkWeather();
  };

  return (
    <div className="card">
      <div className="search">
        <input 
          type="text" 
          placeholder="Enter your city" 
          value={city} 
          onChange={(e) => setCity(e.target.value)} 
        />
        <button onClick={handleSearch}>
          <img src="./search.svg" alt="Search" />
        </button>
      </div>

      {error && (
        <div className="error">
          <p>Invalid city name</p>
        </div>
      )}

      {weatherData && (
        <div className="Weather">
          <img 
            src={`./${weatherData.main.toLowerCase()}.svg`} 
            className="weather-icon" 
            alt="Weather Icon" 
          />
          <h1 className="temp">{weatherData.temp}°c</h1>
          <h2 className="city">{weatherData.name}</h2>

          <div className="details">
            <div className="col">
              <img src="./cloud-fog-fill.svg" alt="Humidity" />
            </div>
            <div>
              <p className="humidity">{weatherData.humidity}%</p>
              <p>Humidity</p>
            </div>

            <div className="col">
              <img src="./wind.svg" alt="Wind Speed" />
            </div>
            <div>
              <p className="wind">{weatherData.wind} km/h</p>
              <p>Wind Speed</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default WeatherApp;
