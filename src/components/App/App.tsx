import React, {useState, useEffect} from 'react';
import './App.css';
import { Weather } from '../weather';
import WeatherInfo from '../WeatherInfo/WeatherInfo'
import InputCity from '../InputCity/InputCity';
import Loader from '../Loader/Loader';

const App:React.FC =()=> {
  const [weather, setWeather] = useState<Weather|null>(null)
  const [city, setCity] = useState<string>()
  const [loading, setLoading] = useState<boolean>(true);

  const apiKey = 'a49334b4d30df534873913fc9e2f6db1';
  const baseUrl = 'https://api.openweathermap.org/data/2.5/weather?q='
  const suffix = `&units=imperial&appid=${apiKey}`;

  const getWeather = async (loc:string)=>{
    const resp = await fetch(baseUrl+loc+suffix);
    if(resp.ok){
      const resToJSON = await resp.json();
      const cityTemp: Weather = resToJSON.main;
      cityTemp.wind = resToJSON.wind.speed;
      cityTemp.sky = resToJSON.weather[0].description;
      setWeather(cityTemp);
      setCity(resToJSON.name);
      setLoading(false);
    }
    else{
      setCity(loc);
      setWeather(null);
      setLoading(false);
    }
  }

  const getCity = async():Promise<string>=>{
    try{
      const res = await fetch('https://api.db-ip.com/v2/free/self')
      const data = await res.json();
      return data.city;
    }
    catch{
      return 'your place. Please enter your city'; //cat can't get to...
    }
  }

  useEffect(()=> {
    getCity().then(res=>{
      getWeather(res);
    });
  },[])

  return (
    <div className='app__container'> 
      <InputCity getWeather={getWeather}/>
      {
        loading ? <Loader/> : weather ? (
          <>
            <h2 className='city_name'>In <strong>{city}</strong> the cat is wet</h2>
            <WeatherInfo weather={weather}/>
          </>
        ) : (
          <h2 className='cantFind'>Cat can't get to {city}</h2>
        )
      }
    </div>
  );
}

export default App;
