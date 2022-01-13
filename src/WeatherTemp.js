import React, { useState } from "react";

export default function WeatherTemp(props) {
  const [unit, setUnit] = useState("celcius");
  function showFahrenheit(event) {
    event.preventDefault();
    setUnit("fahrenheit");
  }
  function showCelsius(event) {
    event.preventDefault();
    setUnit("celcius");
  }
  function fahrenheit() {
    return (props.celcius * 9) / 5 + 32;
  }
  if (unit === "celcius") {
    return (
      <div className="WeatherTemp">
        <strong>{Math.round(props.celcius)}</strong>
        <span className="units">
          °C |{" "}
          <a href="/" onClick={showFahrenheit}>
            °F
          </a>
        </span>
      </div>
    );
  } else {
    return (
      <div className="WeatherTemp">
        <strong>{Math.round(fahrenheit())}</strong>
        <span className="units">
          <a href="/" onClick={showCelsius}>
            °C
          </a>{" "}
          | °F
        </span>
      </div>
    );
  }
}
