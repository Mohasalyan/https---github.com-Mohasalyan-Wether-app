import React, { useState, useEffect } from 'react';
import axios from 'axios';

function Favorites() {
  const [favoriteCities, setFavoriteCities] = useState(['Jerusalem', 'Rome']);
  const [favoriteCitiesData, setFavoriteCitiesData] = useState([]);

  useEffect(() => {
    // Fetch weather data for favorite cities here using Axios
    const fetchDataForFavoriteCities = async () => {
      const apiKey = 'a9187aa35c2f74b1ddae8a2201f0ef3b'; 
      const favoriteCitiesDataPromises = favoriteCities.map(async (city) => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`;

        try {
          const response = await axios.get(apiUrl);
          return response.data;
        } catch (error) {
          console.error(`Error fetching weather data for ${city}:`, error);
          return null;
        }
      });

      const dataForFavoriteCities = await Promise.all(favoriteCitiesDataPromises);
      setFavoriteCitiesData(dataForFavoriteCities);
    };

    fetchDataForFavoriteCities();
  }, [favoriteCities]);

  return (
    <div>
      <h2>Favorite Cities</h2>
      {favoriteCitiesData.map((cityData) => (
        <div key={cityData.name}>
          <h3>{cityData.name}, {cityData.sys.country}</h3>
          <p>Temperature: {cityData.main.temp}°C</p>
          <p>Weather: {cityData.weather[0].description}</p>
          
        </div>
      ))}
      
    </div>
  );
}

export default Favorites;
