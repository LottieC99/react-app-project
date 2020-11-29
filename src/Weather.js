import React, { useState } from "react";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
   
    const [weatherData, setWeatherData] = useState({ ready: false});
    function handleResponse(response) {
        console.log(response.data);

        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: "Wednesday 07:00",
            description: response.data.weather[0].description,
            iconUrl: "https://ssl.gstatic.com/onebox/weather/64/sunny.png"  ,
            wind: response.data.wind.speed ,
            city: response.data.name
        })

        
        
    }

    if (weatherData.ready) {
        return (
                    <div className="Weather">
            <form >
                <div className="row">
                  <div className="col-9">
                    <input 
                        type="search" 
                        placeholder="Please enter a city..." 
                        className="form-control"
                    />
                    </div>
                    <div className="col-3">
                    <input type="submit" value="Search 🌍" className="btn btn-primary"/>
                    
                  </div>
                    
                </div>
            </form>
            <h1> {weatherData.city} </h1>
            <ul>
                <li>
                    {weatherData.date}
                </li>

                <li className="text-capitalize">
                    {weatherData.description}
                </li>
            </ul>
           <div className="row">
               <div className="col-6">
                   <img src= {weatherData.iconUrl}
                   alt={weatherData.description}/>
                    <span className="temperature">{Math.round(weatherData.temperature)}</span>
                    <span className="unit">°C</span>
               </div>
              <div className="col-6">
                  <ul>
                    
                      <li>
                          Humidity: {weatherData.humidity} %
                      </li>
                      <li>
                          Wind: {weatherData.wind} mph
                      </li>
                  </ul>
              </div>
           </div>
        </div>
    );

    } else {
        const apiKey = "8040433fe9fe2a6479424f9f02429b14";
       
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${props.defaultCity}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);

        return "Loading...";

    }



 
    

}
