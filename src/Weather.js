import React from "react";
import "./Weather.css";

export default function Weather() {
  let weatherData = {
    city: "New York",
    date: "Tuesday 1.00PM",
    description: "Cloudy",
    imgUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png",
    temperature: 19,
    humidity: 56,
    wind: 4,
  };
  return (
    <div className="Weather">
      <div className="weather-app border border-secondary">
        <form className="search-form ms-2 mt-2">
          <div className="row">
            <div className="col-9">
              <input
                className="form-control"
                type="text"
                placeholder="Type a city"
              />
            </div>
            <div className="col-2">
              <input className="btn btn-primary" type="submit" value="Search" />
            </div>
          </div>
        </form>
        <ul className="dayanddescription">
          <li className="place">{weatherData.city}</li>
          <li className="dayandtime">{weatherData.date}</li>
          <li className="description">{weatherData.description}</li>
        </ul>
        <div className="row">
          <div className="col-6">
            <p>
              <img src={weatherData.imgUrl} alt="" />
              <span>{weatherData.temperature}</span>
              <small className="units">
                <a href="/">°C</a> | <a href="/">°F</a>
              </small>
            </p>
          </div>
          <div className="col-6">
            <ul className="PHW">
              <li>Humidity: {weatherData.humidity}%</li>
              <li>Wind:{weatherData.wind}km/h</li>
            </ul>
          </div>
        </div>
        <div className="weather-forecast"></div>
      </div>
      <small>
        <a
          href="https://github.com/minuantony/weather-app.git"
          target="_blank"
          rel="noreferrer"
        >
          Open-source code
        </a>
        by Minu Antony
      </small>
    </div>
  );
}
