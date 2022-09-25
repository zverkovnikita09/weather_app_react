import React from "react";
import './WeatherIcon.css'

const WeatherIcon:React.FC<{sky:string}> = ({sky})=>{
    let source = '';
    switch(sky){
        case 'light rain':
            source = require('./img/lightrain.png')
            break;
        case 'clear sky':
            source = require('./img/clearsky.png')
            break;
        case 'broken clouds':
            source = require('./img/brokenclouds.png')
            break;
        case 'scattered clouds':
            source = require('./img/brokenclouds.png')
            break;
        case 'overcast clouds':
            source = require('./img/overcastclouds.png')
            break;
        default:
            source = require('./img/clearsky.png')
            break;
    }
    
    return <img src={source} alt="" className="weatherIcon" />
}

export default WeatherIcon;