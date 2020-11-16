import React from "react";
import "./Weather.css";

export default function Weather() {
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
            <h1>Los Angeles, CA 🌵 </h1>
            <ul>
                <li>
                    Monday, 12:00
                </li>

                <li>
                    Sunny 
                </li>
            </ul>
           <div className="row">
               <div className="col-6">
                   <img src="https://ssl.gstatic.com/onebox/weather/64/sunny.png"
                   alt="Sunny"/>
                    31°C
               </div>
              <div className="col-6">
                  <ul>
                      <li> 
                          Precipitation: 0% 
                        </li>
                      <li>
                          Humidity: 10%
                      </li>
                      <li>
                          Wind: 3mph
                      </li>
                  </ul>
              </div>
           </div>
        </div>
    );
}
