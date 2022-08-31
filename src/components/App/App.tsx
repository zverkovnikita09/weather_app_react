import React, {useState, useEffect} from 'react';
import './App.css';
import { Weather } from '../weather';
import WeatherInfo from '../WeatherInfo/WeatherInfo'
import InputCity from '../InputCity/InputCity';

const App:React.FC =()=> {
  const [weather, setWeather] = useState<Weather|null>(null)
  const [city, setCity] = useState<string>()

  const apiKey = 'a49334b4d30df534873913fc9e2f6db1';
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
  const suffix = `&units=imperial&appid=${apiKey}`;

  const getWeather = async (loc:string)=>{
    const resp = await fetch(baseUrl+loc+suffix);
    if(resp.ok){
      const resToJSON = await resp.json();
      console.log(resToJSON);
      const cityTemp: Weather = resToJSON.main;
      cityTemp.wind = resToJSON.wind.speed;
      cityTemp.sky = resToJSON.weather[0].description;
      setWeather(cityTemp);
      setCity(resToJSON.name);
    }
    else{
      setCity(loc);
      setWeather(null);
    }
  }

  useEffect(()=> {
    getWeather('Воронеж')
  },[])

  return (
    <> 
      <InputCity getWeather={getWeather}/>
      {weather ? (
        <>
          <h2 className='city_name'>{city}</h2>
          <ul className='weather__list'>
            <li><WeatherInfo weather={weather}/></li>
            <li><WeatherInfo weather={weather}/></li>
            <li><WeatherInfo weather={weather}/></li>
            <li><WeatherInfo weather={weather}/></li>
            <li><WeatherInfo weather={weather}/></li>
          </ul>
        </>
        ) : (
          <h2 className='cantFind'>Cat can't get to {city}</h2>
        )
      }
    </>
  );
}

export default App;
