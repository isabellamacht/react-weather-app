import React from "react";
import Forecast from "./Forecast";
import axios from "axios";
import "./Weather.css";

export default function Weather() {
  function handleResponse(response) {
    console.log(response.data);
  }

  let weatherData = {
    city: "Berlin",
    temperature: 19,
    date: "Saturday 17:38",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    humidity: 80,
    wind: 10,
  };
  const apiKey = "bd1ece0d4891a8d6f3bef7dd131bf487";
  let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${weatherData.city}&appid=${apiKey}&units=metric`;
  axios.get(apiUrl).then(handleResponse);
  return (
    <div className="Weather">
      <form className="mb-3">
        <div className="row">
          <div className="col-9">
            <input
              type="search"
              placeholder="Type a city.."
              className="form-control rounded-pill"
              autoComplete="off"
            />
          </div>
          <div className="col-3">
            <input
              type="submit"
              value="Search"
              className="btn btn-info rounded-pill"
            />
          </div>
        </div>
      </form>
      <div className="overview">
        <h1>{weatherData.city}</h1>
        <ul>
          <li>Last updated: {weatherData.date}</li>
          <li>{weatherData.description}</li>
        </ul>
      </div>
      <div className="row">
        <div className="col-6">
          <div className="clearfix weather-temperature">
            <img
              src={weatherData.imgUrl}
              alt={weatherData.description}
              className="float-left"
            />
            <div className="float-left">
              <strong>{weatherData.temperature}</strong>
              <span className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </span>
            </div>
          </div>
        </div>
        <div className="col-6">
          <ul>
            <li>Humidity: {weatherData.humidity}%</li>
            <li>Wind: {weatherData.wind} km/h</li>
          </ul>
        </div>
      </div>
      <Forecast />
    </div>
  );
}
