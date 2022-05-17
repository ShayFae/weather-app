import React, { useState, useEffect } from 'react'
import './Weather.css'
import axios from 'axios'

export default function Weather() {
  const weather = `https://api.openweathermap.org/data/2.5/forecast?lat=43.7446603&lon=-79.5940434&appid=c9972b4e5fadd10d760467ce0cffc68a`

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
useEffect (() => {
  for(let y of test) {
    // console.log(y.dt)
    let meep = y.dt
    let main2 = y.main
    // setState2({...state, meep});
    setState2({time: meep});
  }
}, [])
// console.log(state2)

  return (
      <div>   
        <p>{state.time} </p>
      </div>
  );
}