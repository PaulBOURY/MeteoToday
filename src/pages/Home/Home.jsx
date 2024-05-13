import { useEffect, useState } from "react"

export default function Home() {
  const [weatherMax, setWeatherMax] = useState([])
  const [weatherMin, setWeatherMin] = useState([])
  useEffect(()=>{
    fetch("https://api.open-meteo.com/v1/meteofrance?latitude=44.8404&longitude=-0.5805&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon")
      .then (response=>response.json())
      .then(data=> setWeatherMax(data.daily.temperature_2m_max))
      .catch((error)=>{console.error("il y a une erreur c'est pas d'chance",error)});
    fetch("https://api.open-meteo.com/v1/meteofrance?latitude=44.8404&longitude=-0.5805&daily=temperature_2m_max,temperature_2m_min&timezone=Europe%2FLondon")
      .then (response=>response.json())
      .then(data=> setWeatherMin(data.daily.temperature_2m_min))
      .catch((error)=>{console.error("il y a une erreur c'est pas d'chance",error)});
  },[])
  console.log(weatherMax)
  console.log(weatherMin)
  return (
    <>
    <ul>
      {Object.entries(weatherMax).map((value, index) => (<li key={index}> Max {value[1]}
      </li>))}
    </ul>
    <ul>
      {Object.entries(weatherMin).map((value, index) => (<li key={index}> Min {value[1]}
      </li>))}
    </ul>
    </>
  )
}
