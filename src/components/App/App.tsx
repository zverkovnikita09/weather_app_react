import React, {useState, ChangeEvent, useEffect, FormEvent} from 'react';
import './App.css';

const App:React.FC =()=> {
  const [city, setCity] = useState('Gorlovka');
  const apiKey = 'a49334b4d30df534873913fc9e2f6db1';
  const baseUrl = 'http://api.openweathermap.org/data/2.5/weather?q='
  const suffix = `&units=imperial&appid=${apiKey}`
  const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
    setCity(event.target.value);
  }

  const getWeather = async (city:string)=>{
    const response = await fetch(baseUrl+city+suffix);
    const resToJSON = await response.json();
    console.log(resToJSON);
  }

  const submit = (event:FormEvent<HTMLButtonElement>)=>{
    
  }

  useEffect(()=> {
    getWeather(city)
  },[])

  return (
    <div>
      <form>
        <input type='text' placeholder='enter city' onChange={handleChange}/>
        <button type='submit' onSubmit={submit}>Get weather</button>
        <h2>City: {city}</h2>
      </form>
    </div>
  );
}

export default App;
