import Axios from "axios";
import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast(props) {
  function handleResponse(response) {
    console.log(response.data);
  }

  let apiKey = "aa9e93ab5b20be8afbcb86d1117a3d24";
  let longitude = props.coordinates.lon;
  let latitude = props.coordinates.lat;
  let apiUrl = `https://api.openweathermap.org/data/2.5/onecall?lat=${latitude}&lon=${longitude}&appid=${apiKey}&units=metric`;

  Axios.get(apiUrl).then(handleResponse);

  let forecastData = {
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    temperatureLow: 13,
    temperatureHigh: 17,
  };
  let elements = ["Sun", "Mon", "Tue", "Wed", "Thu"];
  return (
    <div className="Forecast">
      <div className="row">
        {elements.map(function (value, index) {
          return (
            <div className="col" key={index}>
              <div className="forecastDay">{value}</div>
              <div>
                <WeatherIcon code="11d" size={48} />
              </div>
              <div className="forecastTemps">
                <span className="forecastTempHigh">
                  {forecastData.temperatureHigh}°
                </span>
                <span className="forecastTempLow">
                  {forecastData.temperatureLow}°
                </span>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}
