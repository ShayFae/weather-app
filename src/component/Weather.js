import React, { useState, useEffect } from 'react'
import './Weather.css'
import axios from 'axios'
import { isCompositeComponent } from 'react-dom/test-utils'

export default function Weather() {
  const weather = `https://api.openweathermap.org/data/2.5/forecast?lat=43.7446603&lon=-79.5940434&appid=`

  const [state, setState] = useState([])
  const [state2, setState2] = useState({
    time: [],
    main: {},
    weather: {},
    wind: [],
  });
  
axios(`${weather}`);

useEffect (() => {
  axios.get(`${weather}`)
  .then(res => {
    setState(res.data.list)
  })    
}, [])

let test = state
useEffect (() => {
  for(let y of test) {
    // console.log(y.dt)
    let meep = y.dt;
    let main2 = y.main;
    let cloud = y.cloud;
    let winds = y.wind;
    let weather2 = y.weather;
    setState2({time: meep, main: main2, clouds: cloud, wind: winds, weather: weather2});
  }
}, [])

// let parseTime = new Date(state2.time * 1000) 
// const hour = parseTime.getHours();
// const minute = "0" + parseTime.getMinutes();
// const second = "0" + parseTime.getSeconds();
// const testTime = hour + ':' + minute.substr(-2) + ':' + second.substr(-2);

let temp = state2.main.temp

let u = Object.keys(state).map((value) => (
      <li>
        Time: {state[value].dt_txt},Temperature: {state[value].main.temp} Feels Like: {state[value].main.feels_like} Cloud Type: {state[value].weather[0].description}
        <p>{state[value].weather[0].description == 'overcast clouds' && <img src="https://www.kindpng.com/picc/m/5-59720_clouds-cloudy-overcast-weather-forecast-night-cloudy-weather.png"/>} </p>
        <p>{state[value].weather[0].description == 'few clouds' && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/52/Weather-few-clouds.svg/1200px-Weather-few-clouds.svg.png"/>} </p>
        <p>{state[value].weather[0].description == 'scattered clouds' && <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/5/57/Gnome-weather-few-clouds.svg/1024px-Gnome-weather-few-clouds.svg.png"/>} </p>
        <p>{state[value].weather[0].description == 'light rain' && <img src="https://img.icons8.com/officexs/480/light-rain.png"/>} </p>
        <p>{state[value].weather[0].description == 'moderate rain' && <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTfHpN1tfQT0wkFj-uiiC_sW72uEbGHDaG1m_GR0zO7yn04iKtUZKPVMeRvzs1ATvvKnS8&usqp=CAU"/>} </p>
      </li>      
))

  return (
      <div>   
        <div className='weather-box'>
          {/* {temp} */}
          {u}
        </div>
      </div>
  );
}