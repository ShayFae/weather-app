import './Weather.css'

export default function Weather() {
  const weather = `https://api.openweathermap.org/data/2.5/forecast?lat=43.7446603&lon=-79.5940434&appid=5e1b862aefc313afac141f2d00567d76`

  const datas = {}
  const info = []
  fetch(weather)
  .then(response => response.json())
  .then(data => info.push(data.city));

  console.log(info)

  return (
      <div>    
      </div>
  );
}