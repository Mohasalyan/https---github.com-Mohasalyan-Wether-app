import React, { useState } from 'react';
import axios from 'axios'; 

function Home() {
  const [city, setCity] = useState('');
  const [temperature, setTemperature] = useState(null);

  const handleSearch = async () => {
    const citiesToSearch = ['Jerusalem', 'Rome', 'Budapest', 'Miami', 'New York'];

    const temperatureDataPromises = citiesToSearch.map(async (cityName) => {
      try {
        const apiKey = 'a9187aa35c2f74b1ddae8a2201f0ef3b';
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${apiKey}&units=metric`;

        const response = await axios.get(apiUrl);

        return { city: cityName, temperature: response.data.main.temp };
      } catch (error) {
        console.error(`Error fetching weather data for ${cityName}:`, error);
        return null; 
      }
    });

    
    const temperatureData = await Promise.all(temperatureDataPromises);

    setTemperature(temperatureData);
  };

  return (
    <div>
      <h2>Weather Search</h2>
      <input
        type="text"
        placeholder="Enter a city name"
        value={city}
        onChange={(e) => setCity(e.target.value)}
      />
      <button onClick={handleSearch}>Search</button>

      {temperature !== null && (
        <div>
          <h3>Temperatures:</h3>
          <ul>
            {temperature.map((data) => (
              <li key={data.city}>
                Temperature in {data.city}: {data.temperature}°C
              </li>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
}

export default Home;
