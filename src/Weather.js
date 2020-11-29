import React, { useState } from "react";
import WeatherInfo from "./WeatherInfo";
import axios from "axios";
import "./Weather.css";


export default function Weather(props) {
   
    const [weatherData, setWeatherData] = useState({ ready: false});
    const [city, setCity] = useState(props.defaultCity);
    function handleResponse(response) {
        console.log(response.data);

        setWeatherData({
            ready: true,
            temperature: response.data.main.temp,
            humidity: response.data.main.humidity,
            date: new Date (response.data.dt * 1000),
            description: response.data.weather[0].description,
            icon: response.data.weather[0].icon,
            wind: response.data.wind.speed ,
            city: response.data.name
        })

        
        
    }

    function search() {
        const apiKey = "8040433fe9fe2a6479424f9f02429b14";
        let apiUrl = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        axios.get(apiUrl).then(handleResponse);


    }

    function handleSubmit(event) {
        event.preventDefault();
        search();
    }

    function handleCityChange(event){
        setCity(event.target.value);
        
    }

    if (weatherData.ready) {
        return (
        <div className="Weather">
            <form onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-9">
                    <input 
                        type="search" 
                        placeholder="Please enter a city..." 
                        className="form-control"
                        onChange={handleCityChange}
                    />
                    </div>
                    <div className="col-3">
                    <input type="submit" value="Search 🌍" className="btn btn-primary"/>
                    
                  </div>
                    
                </div>
            </form>
            <WeatherInfo data={weatherData}/>
           
        </div>
        );

    } else {
        search();
        return "Loading...";

    }



 
    

}
