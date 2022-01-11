import React from "react";
import "./Forecast.css";

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
                <img src={forecastData.imgUrl} alt="" />
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
