import React, { useState, useEffect } from "react";
import axios from "axios";

function Dashboard() {
  const [weatherData, setWeatherData] = useState(null);
  const [city, setCity] = useState("Jerusalem");

  useEffect(() => {
    const apiKey = "a9187aa35c2f74b1ddae8a2201f0ef3b";

    const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}`;

    axios
      .get(apiUrl)
      .then((response) => {
        setWeatherData(response.data);
        console.log(response.data);
      })
      .catch((error) => {
        console.error("Error fetching weather data:", error);
      });
  }, [city]);

  return (
    <div>
      {weatherData && (
        <div>
          <input
            type="text"
            placeholder="Enter a city name"
            value={city}
            onChange={(e) => setCity(e.target.value)}
          />
          <button> Search</button>
          <h1> {city}</h1>
          <h2>Current Weather in {weatherData.name}</h2>
          <p>Temperature: {weatherData.main.temp}°C</p>
          <p>Weather: {weatherData.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Dashboard;