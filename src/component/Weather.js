import React, { useState, useEffect } from 'react'
import './Weather.css'
import axios from 'axios'

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
    // console.log('asdas', res.data)
    // u.push(res.data)
  //   console.log(Object.values(res.data))
    setState(res.data.list)
  //   for (const [key, value] of Object.entries(res.data)) {
  //     datas[key] = value
  //     info.push(value)
  // }

  })    
}, [])

let test = state
// console.log('test', test)
useEffect (() => {
  for(let y of test) {
    // console.log(y.dt)
    let meep = y.dt;
    let main2 = y.main;
    let cloud = y.cloud;
    let winds = y.wind;
    let weather2 = y.weather;

    // setState2({...state, meep});
    setState2({time: meep, main: main2, clouds: cloud, wind: winds, weather: weather2});
  }
}, [])
// console.log(state2)

let parseTime = new Date(state2.time * 1000) 
const hour = parseTime.getHours();
const minute = "0" + parseTime.getMinutes();
const second = "0" + parseTime.getSeconds();
const testTime = hour + ':' + minute.substr(-2) + ':' + second.substr(-2);

console.log(state2)

  return (
      <div>   
        <div className='weather-box'>
          <p>Time is: {testTime}</p>
          {/* <p>{state2.main}</p> */}
          <p>{state2.wind} {state2.clouds} {state2.weather} {state2.clouds}</p>
        </div>
      </div>
  );
}