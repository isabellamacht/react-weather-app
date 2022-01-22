import React from "react";
import WeatherIcon from "./WeatherIcon";

export default function forecastDay(props) {
  function maxTemperature() {
    let temperature = Math.round(props.data.temp.max);
    return `${temperature}°`;
  }

  function minTemperature() {
    let temperature = Math.round(props.data.temp.min);
    return `${temperature}°`;
  }

  function day() {
    let date = new Date(props.data.dt * 1000);
    let day = date.getDay();

    let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

    return days[day];
  }

  return (
    <div>
      <div className="forecastDay">{day()}</div>
      <div>
        <WeatherIcon code={props.data.weather[0].icon} size={48} />
      </div>
      <div className="forecastTemps">
        <span className="forecastTempHigh">{maxTemperature()}</span>
        <span className="forecastTempLow">{minTemperature()}</span>
      </div>
    </div>
  );
}
