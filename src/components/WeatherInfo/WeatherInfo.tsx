import React from "react";
import { Weather } from "../weather";
import './WeatherInfo.css';

const WeatherInfo:React.FC<{weather: Weather}>=({weather}) => {
    const { humidity, temp, pressure, sky, wind} = weather;
    const fahrToCelc = (degrees:number):number=>{
        return Math.round((degrees - 32)*(5/9));
      }
    const ucFirstLetter=(word:string):string=>{
        return word[0].toUpperCase()+word.slice(1)
    }

    return(
        <div className="today__container">
            <h2>Sky: {ucFirstLetter(sky)}</h2>
            <img className="catImg" src="./catImage.png"/>
            <h2 className="currentTemperature">{fahrToCelc(temp)}&deg;C</h2>
            <div className="weatherInfo">
                <h2>Humidity: {humidity}%</h2>
                <h2>Pressure: {Math.round(pressure*0.75)} mmHg</h2>
                <h2>Wind: {Math.round(wind/2.237)} m/s</h2>
            </div>
        </div>
    )
}

export default WeatherInfo;