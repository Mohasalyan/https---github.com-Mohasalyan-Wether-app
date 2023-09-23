import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './ForecastStyle.css';

function Forecast() {
  const [forecastData, setForecastData] = useState(null);
  const [city,setCity]=useState("Jerusalem")
  const apiKey = '9b81c8612ec85ba15610a87cd8f17eb3';

  
useEffect(()=>{
    const fetchData = async () => {
        const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&appid=${apiKey}`;
    
        try {
          const response = await axios.get(apiUrl);
          setForecastData(response.data.list);
          console.log(response.data.list)
        } catch (error) {
          console.error(`Error fetching forecast data for ${city}:`, error);
        }
      };
      fetchData()
},[city])

  return (
    <div>
      <h2>5-Day Weather Forecast</h2>
   {forecastData &&(
    <table>
        <thead> 
        <tr>
            <th> Date and Time</th>
            <th> Temp</th>
            <th> Weather</th>
        </tr>
        </thead>
        <tbody>
            {forecastData.map((data,index)=>(
                <tr>
                    <td> {data.dt_txt} </td>
                </tr>
            ))}
        </tbody>
      
        </table>
   )}
    </div>
  );
}

export default Forecast;
