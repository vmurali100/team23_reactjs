import React, { Component } from 'react';
import styled from 'styled-components';

// Styled components
const Card = styled.div`
    background: linear-gradient(135deg, #00feba, #5b548a);
    max-width: 470px;
    color: #fff;
    margin: 100px auto 0;
    border-radius: 20px;
    padding: 40px 35px;
    text-align: center;
`;

const Search = styled.div`
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const SearchInput = styled.input`
    background: #ebfffc;
    color: #555;
    padding: 10px 25px;
    border-radius: 30px;
    height: 60px;
    flex: 1;
    font-size: 18px;
    border: 0;
    outline: 0;
    margin-right: 16px;
`;

const SearchButton = styled.button`
    border-radius: 50%;
    width: 60px;
    height: 60px;
    border: 0;
    cursor: pointer;
`;

const WeatherIcon = styled.img`
    width: 170px;
    margin-top: 30px;
`;

const WeatherH1 = styled.h1`
    font-size: 80px;
    font-weight: 500;
`;

const WeatherH2 = styled.h2`
    font-size: 45px;
    font-weight: 400;
`;

const Details = styled.div`
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding: 0 20px;
    margin-top: 50px;
`;

const Col = styled.div`
    width: 40px;
    margin-right: 0px;
    text-align: left;
`;

const ColImage = styled.img`
    width: 40px;
    margin-right: 10px;
`;

const Humidity = styled.p`
    font-size: 28px;
    margin-top: -6px;
`;

const Wind = styled.p`
    font-size: 28px;
    margin-top: -6px;
`;

const Error = styled.div`
    text-align: left;
    margin-left: 10px;
    font-size: 14px;
    margin-top: 10px;
    display: none;
    color: red;
    font-style: oblique;
`;

class WeatherApp extends Component {
    constructor(props) {
        super(props);
        this.state = {
            city: '',
            weatherData: null,
            error: false
        };
    }

    async checkWeather(city) {
        const apikey = 'f5f027d9f3c5eda1dc124481ac92faee';
        const apiurl = 'https://api.openweathermap.org/data/2.5/weather?units=metric&q=';
        try {
            const response = await fetch(apiurl + city + `&appid=${apikey}`);
            if (response.status === 404) {
                this.setState({ error: true, weatherData: null });
            } else {
                const data = await response.json();
                this.setState({ 
                    weatherData: data,
                    error: false 
                });
            }
        } catch (error) {
            console.error('Error fetching weather data:', error);
            this.setState({ error: true, weatherData: null });
        }
    }

    handleSearchClick = () => {
        this.checkWeather(this.state.city);
    }

    handleInputChange = (event) => {
        this.setState({ city: event.target.value });
    }

    render() {
        const { weatherData, error } = this.state;

        return (
            <Card>
                <Search>
                    <SearchInput 
                        type="text" 
                        placeholder="enter your city" 
                        onChange={this.handleInputChange}
                    />
                    <SearchButton onClick={this.handleSearchClick}>
                        <img src="./search.svg" alt="Search" />
                    </SearchButton>
                </Search>
                
                {error && <Error>Invalid city name</Error>}

                {weatherData && !error && (
                    <div>
                        <WeatherIcon src={this.getWeatherIcon(weatherData.weather[0].main)} alt="Weather Icon" />
                        <WeatherH1>{Math.round(weatherData.main.temp)}°c</WeatherH1>
                        <WeatherH2>{weatherData.name}</WeatherH2>
                        <Details>
                            <Col>
                                <ColImage src="./cloud-fog-fill.svg" alt="Humidity Icon" />
                            </Col>
                            <div>
                                <Humidity>{weatherData.main.humidity}%</Humidity>
                                <p>Humidity</p>
                            </div>
                            <Col>
                                <ColImage src="./wind.svg" alt="Wind Icon" />
                            </Col>
                            <div>
                                <Wind>{weatherData.wind.speed} km/h</Wind>
                                <p>Wind Speed</p>
                            </div>
                        </Details>
                    </div>
                )}
            </Card>
        );
    }

    getWeatherIcon(main) {
        switch (main) {
            case 'Clouds':
                return './cloud-lightning-rain.svg';
            case 'Clear':
                return './clear-sky.svg';
            case 'Rain':
                return './rain.svg';
            case 'Drizzle':
                return './drizzle.svg';
            case 'Mist':
                return './mist.svg';
            default:
                return './default.svg';
        }
    }
}

export default WeatherApp;
