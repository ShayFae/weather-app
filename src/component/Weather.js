import React, { useState, useEffect } from 'react'
import './Weather.css'
import axios from 'axios'

export default function Weather() {
  const weather = `https://api.openweathermap.org/data/2.5/forecast?lat=43.7446603&lon=-79.5940434&appid=`

  const [state, setState] = useState([])
  
  axios(`${weather}`);

  useEffect (() => {
    axios.get(`${weather}`)
    .then(res => {
      setState(res.data.list)
    })    
  }, [])

  let g = new Date().getTime() / 1000;
  let o = Math.trunc(g)
  let j = new Date()
  console.log(j)

  let u = Object.keys(state).map((value) => (
        <li>
          Time: {state[value].dt_txt},Temperature: {state[value].main.temp} Feels Like: {state[value].main.feels_like} Cloud Type: {state[value].weather[0].description}
          <p>{state[value].weather[0].description == 'overcast clouds' && <img src="https://www.kindpng.com/picc/m/5-59720_clouds-cloudy-overcast-weather-forecast-night-cloudy-weather.png"/>} </p>
          <p>{state[value].weather[0].description == 'few clouds' && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Weather-few-clouds.svg/1200px-Weather-few-clouds.svg.png"/>} </p>
          <p>{state[value].weather[0].description == 'scattered clouds' && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Gnome-weather-few-clouds.svg/1024px-Gnome-weather-few-clouds.svg.png"/>} </p>
          <p>{state[value].weather[0].description == 'light rain' && <img src="https://img.icons8.com/officexs/480/light-rain.png"/>} </p>
          <p>{state[value].weather[0].description == 'moderate rain' && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHpN1tfQT0wkFj-uiiC_sW72uEbGHDaG1m_GR0zO7yn04iKtUZKPVMeRvzs1ATvvKnS8&usqp=CAU"/>} </p>
          {console.log(state[value].dt_txt)}
          {state[value].dt != o && <h1>HELLO</h1>}
        </li>      
  ))

  return (
      <div>   
        <div className='weather-box'>
          {u}
        </div>
      </div>
  );
}