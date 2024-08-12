import React, { useState } from 'react';

function WeatherApp() {
  const [city, setCity] = useState('');
  const [weatherData, setWeatherData] = useState(null);
  const [error, setError] = useState('');

  const fetchWeatherData = async () => {
    setError('');  // Reset any previous error
    try {
      const response = await fetch(
        `https://yahoo-weather5.p.rapidapi.com/weather?location=${city}&format=json&u=f`,
        {
          method: 'GET',
          headers: {
            'x-rapidapi-key': '2a5f5c3301msh25a5b13be667fcfp1e078djsn0a8478fc4d00',
            'x-rapidapi-host': 'yahoo-weather5.p.rapidapi.com',
          },
        }
      );

      if (!response.ok) {
        throw new Error('Failed to fetch weather data');
      }

      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      setError('Error fetching weather data. Please check your API key or try again later.');
      console.error('Error:', error);
    }
  };

  return (
    <div>
      <u>
        <div style={{ marginRight: '20px', color: 'red', textAlign: 'center' }}>
          <h2>1. Weather Info</h2>
        </div>
      </u>

      <h1 style={{ textAlign: 'center' }}>Weather Details</h1>

      <div style={{ display: 'flex', marginLeft: '200px', marginTop: '50px' }}>
        <div style={{ marginTop: '30px' }}>
          <form>
            <label>USER INPUT</label>
            <input
              type="text"
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
            />
            <button type="button" onClick={fetchWeatherData}>
              Submit
            </button>
          </form>
        </div>

        {weatherData && (
          <div style={{ marginLeft: '50px' }} id="display">
            <h2>CITY NAME IS: {weatherData.location.city}</h2>
            <h2>CITY HUMIDITY IS: {weatherData.current_observation.atmosphere.humidity}</h2>
            <h2>CITY SUNRISE AT: {weatherData.current_observation.astronomy.sunrise}</h2>
            <h2>CITY SUNSET AT: {weatherData.current_observation.astronomy.sunset}</h2>
            <h2>CITY TEMPERATURE IS: {weatherData.current_observation.condition.temperature}</h2>
          </div>
        )}

        {error && (
          <div style={{ marginLeft: '50px', color: 'red' }}>
            <h2>{error}</h2>
          </div>
        )}
      </div>
    </div>
  );
}

export default WeatherApp;
