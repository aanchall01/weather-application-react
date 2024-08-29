import React, { useState , useEffect} from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTemperatureQuarter , faDroplet , faCloud, faWind} from '@fortawesome/free-solid-svg-icons';

import './Weather.css';

const Weather = () => {

  const [city, setCity] = useState('');

  const [weather, setWeather] = useState(null);
 
  const fetchWeather = async () => {

    const API_KEY = 'e7f9f8d8e1f3030e09b23d3e63139bc0'; // Replace with your OpenWeatherMap API key

    const response = await fetch(
            `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`
      );
      

    const data = await response.json();

    setWeather(data);

  };
 
  const handleSearch = (e) => {

    e.preventDefault();

    fetchWeather();

  };

  useEffect(() => {
    document.body.style.backgroundColor = 'skyblue'; // Simple test
}, []);


  
 
  return (

    <div className="weather-container">

      <h1 className='heading'>Weather App</h1>
      <div className="search-box">
      <form onSubmit={handleSearch}>
        
        <input

          type="text"

          value={city}

          onChange={(e) => setCity(e.target.value)}

          placeholder="Enter city name"

          required

        />

        <button type="submit">Search</button>

      </form>
      </div>

      {weather && (

        <div className="weather-details">

        <h2>{weather.name}</h2>
        <div className="details-weather">
          <p><FontAwesomeIcon icon={faTemperatureQuarter} />Temperature: <span className="temperature-value">{weather.main.temp}</span> °C</p>

          <p><FontAwesomeIcon icon={faCloud} />Weather: <span className="temperature-value">{weather.weather[0].description}</span></p>

          <p><FontAwesomeIcon icon={faDroplet} />Humidity: <span className="temperature-value">{weather.main.humidity} </span>%</p>

          <p><FontAwesomeIcon icon={faWind} />Wind Speed: <span className="temperature-value">{weather.wind.speed} </span>m/s</p>
          </div>
        </div>

      )}

    </div>

  );

};
 
export default Weather;
