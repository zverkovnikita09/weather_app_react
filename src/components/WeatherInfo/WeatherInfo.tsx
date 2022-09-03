import React from "react";
import { Weather } from "../weather";
import './WeatherInfo.css';

const WeatherInfo:React.FC<{weather: Weather}>=({weather}) => {
    const { humidity, temp, pressure, sky, wind, feels_like} = weather;
    const fahrToCelc = (degrees:number):number=>{
        return Math.round((degrees - 32)*(5/9));
      }
    const ucFirstLetter=(word:string):string=>{
        return word[0].toUpperCase()+word.slice(1)
    }

    const getCurrentDate = ():string=>{
        const date = new Date();
        const months:Array<string> = ['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'];
        let day:number|string = date.getDate();
        if (day<10) {
          day='0'+day;
        }
        let hour:number|string = date.getHours();
        if (hour<10){
            hour ='0'+hour;
        }
        let minutes:number|string = date.getMinutes();
        if (minutes<10){
            minutes ='0'+minutes;
        }
        return ` ${day} ${months[date.getMonth()]} ${date.getFullYear()} ${hour}:${minutes}`
      }
    
    const getCurrentDay = ():string=>{
        const date = new Date();
        const days:Array<string> = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
        return `${days[date.getDay()]}`;
    }
    return(
        <div className="todayContainer">
            <div className="currentWeather">
                <div className="currentWeather__header">
                    <img src="./sun.png" alt="" className="weatherImg"/>
                    <div className="weatherDate">
                        <p><strong>{getCurrentDay()}</strong>{getCurrentDate()}</p>
                        <p>{ucFirstLetter(sky)}</p>
                    </div>
                </div>
                <div className="weatherInfo">
                    <ul className="weatherInfo__main">
                        <li>Humidity: {humidity}%</li>
                        <li>Pressure: {Math.round(pressure*0.75)} mmHg</li>
                        <li>Wind: {Math.round(wind/2.237)} m/s</li>
                        <li>Feels like: {fahrToCelc(feels_like)}&deg;C</li>
                    </ul>
                    <div className="temp">{fahrToCelc(temp)}&deg;C</div>
                </div>
            </div>
            <div className="catImg">
                <img src="./catImage.png"/>
            </div>
        </div>
    )
}

export default WeatherInfo;