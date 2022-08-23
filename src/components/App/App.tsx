import React, {useState, ChangeEvent, useEffect, FormEvent} from 'react';
import './App.css';
import { Weather } from '../weather';
import { json } from 'stream/consumers';

const App:React.FC =()=> {
  const [city, setCity] = useState('Voronezh');
  const [weather, setWeather] = useState<Weather|null>(null)

  const apiKey = 'a49334b4d30df534873913fc9e2f6db1';
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
  const suffix = `&units=imperial&appid=${apiKey}`;

  const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
    setCity(event.target.value);
  }

  const getWeather = async (loc:string)=>{
    const resp = await fetch(baseUrl+loc+suffix);
    if(resp.ok){
      const resToJSON = await resp.json();
      const cityTemp: Weather = resToJSON.main;
      cityTemp.city=resToJSON.name;
      setWeather(cityTemp);
      console.log(weather);
    }
    else{
      setWeather(null);
    }
    
  }

  /* const submit = (event:FormEvent<HTMLButtonElement>)=>{
    
  } */

  useEffect(()=> {
    getWeather(city)
  },[])

  return (
    <div>
      <form>
        <input type='text' placeholder='enter city' onChange={handleChange}/>
        <button type='submit' /* onSubmit={submit} */>Get weather</button>
        <h2>City: {city}</h2>
      </form>
    </div>
  );
}

export default App;
