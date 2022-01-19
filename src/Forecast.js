import React from "react";
import "./Forecast.css";
import WeatherIcon from "./WeatherIcon";

export default function Forecast() {
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
