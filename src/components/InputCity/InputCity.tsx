import React, { useState,ChangeEvent, FormEvent, useCallback } from "react";
import './InputCity.css';

const InputCity:React.FC< {getWeather: (loc: string)=>void}> = ({getWeather})=>{
    const [city, setCity] = useState('');
    const handleChange = (event:ChangeEvent<HTMLInputElement>)=>{
        setCity(event.target.value);
    }
    const submit = (event:FormEvent)=>{
        event.preventDefault();
        if(city.length>0){
            getWeather(city)
        } 
    }
    return (
        <form onSubmit={submit} className='city__form'>
            <h1 className="title">How does cat feel in</h1>   
            <input type='text' placeholder='enter city' onInput={handleChange} className='city__input'/>
            <button type='submit'>Сlick to know</button>
        </form>
    )
}

export default InputCity;