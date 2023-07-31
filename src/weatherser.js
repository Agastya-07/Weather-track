// we will be fetching data right here


const API_KEY='416bca59ba8c1a66bc2a2d57a8751fa1'

const makeiconurl=(iconID)=>`https://openweathermap.org/img/wn/${iconID}.png`

const getweatherdata=async(city, units="metric")=>{
    const url=`https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=${units}`
    const data=await fetch(url).then((res)=>res.json()).then((data)=>data)


const {
    weather,
    main:{temp,feels_like,temp_min,temp_max,humidity,pressure},
    wind:{speed},
    sys:{country},
    name,
} =  data

const{description, icon} = weather[0]
return{
    description,
    iconURL:makeiconurl(icon),
    icon,
    temp,
    feels_like,
    temp_min,
    temp_max,
    humidity,
    pressure,
    speed,
    country,
    name,

}
}



export  {getweatherdata};