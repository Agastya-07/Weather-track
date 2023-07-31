import './index.css'
import Description from "./components/Description"
import { useEffect , useState } from 'react'
import { getweatherdata } from './weatherser'

function App() {

    const[city,setCity] = useState('Paris')

  const[weather , setweather]= useState(null)
  const[units , setunits]= useState('metric')
  // const[bg, setbg] = useState('')

useEffect(()=>{
  const fetchdata = async () => {
  const data = await getweatherdata(city,units)
  setweather(data)
  console.log(data)
  }
  fetchdata()
},[units , city]);


// console.log(weather.icon);

const changeunit = (e)=>{
const button = e.currentTarget;
const currentunit = button.innerText.slice(1);

const isCelsius = currentunit ==='C'
button.innerText = isCelsius ? "*F" : "*C";
setunits(isCelsius ? "metric" : "imperial")

}

document.body.style.backgroundColor ='white';
const enterKeyPressed = (e) =>{
if(e.keyCode === 13){
  setCity(e.currentTarget.value)
  console.log(e.currentTarget.value)
  // e.currentTarget.blur()
  changebg()

}
}

const changebg= ()=>{
  const element = document.getElementsByClassName('overlay')
  // const url = weather.icon==='01d'?'/clouds-196230.jpg' : '/sunny-196930.jpg'
  // element.style.backgroundImage = `url(${url})`
  element.style.backgroundColor='aqua'

}



  return (
    <div className="app">
      <div className="overlay">

      {/* render only weather is not null */}

        {weather && (
            <div className="container">
            <div className="section section__input">
            <input onKeyDown={enterKeyPressed} type="text"  placeholder='search' />
            <button onClick={(e)=>changeunit(e)}>*F</button>
  
            </div>
            <div className="section section__temp">
              <div className="icons">
                <h3>{`${weather.name},${weather.country}`}</h3>
                <img src={weather.iconURL} alt="" />
                <h3>{weather.description}</h3>
              </div>
              <div className="temp">
                <h1>{`${weather.temp.toFixed()}*${units==='metric'?"C":"F"}`}</h1>
                </div>
                
  
                {/* bottom-part */}
            </div>
                <Description  weather={weather} units={units}/>
          </div>
        )}
        <div className="footer">
          <h1>MADE WITH &#x1F495; BY: AGASTYA</h1>
        </div>
      
      </div>

   </div>
  )
}

export default App
